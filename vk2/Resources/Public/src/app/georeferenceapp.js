goog.provide('vk2.app.GeoreferenceApp');

//goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');

goog.require('vk2.settings');
goog.require('vk2.utils');
goog.require('vk2.utils.routing');
goog.require('vk2.viewer.ZoomifyViewer');
goog.require('vk2.georeference.utils');
goog.require('vk2.georeference.Georeferencer');
goog.require('vk2.georeference.GeoreferencerService');
goog.require('vk2.georeference.view.SourceView');
goog.require('vk2.georeference.view.TargetView');
/**
 * @constructor
 * @param {string} originalMapContainerId
 * @param {string} geoMapContainerId
 */
vk2.app.GeoreferenceApp = function(originalMapContainerId, geoMapContainerId){
	vk2.utils.checkIfCookiesAreEnabble();
	vk2.utils.loadModalOverlayBehavior('vk2-modal-anchor');
	vk2.georeference.utils.initializeGeorefenceCRS();
	
	// parse object id
	var url = new goog.Uri(window.location.href);
	
	var objectid = /** @type {string} */ (url.getQueryData().get('objectid'));
	var georeferenceid = /** @type {string} */ (url.getQueryData().get('georeferenceid'));

	// now load the process and necessary data 
	if (goog.isDef(georeferenceid)){
		this.initializeWithGeoreferenceId_(georeferenceid, originalMapContainerId, geoMapContainerId);
	} else if (goog.isDef(objectid)) {
		this.initializeWithObjectId_(objectid, originalMapContainerId, geoMapContainerId);
	};
};

/**
 * @private
 * @param {Object} query_string
 * @param {Function} callback
 */
vk2.app.GeoreferenceApp.prototype.fetchProcessDataFromServer_ = function(query_string, callback){
	var url = vk2.utils.routing.getGeorefGetProcessRoute(query_string);
	goog.net.XhrIo.send(url, function(event){
		if (event.target.getStatus() != 200){
			alert('Something went wrong, while trying to get the process information from the server. Please try again or contact the administrator.');
		};	
		callback(event.target.getResponseJson());
	});
};

/**
 * @private
 * @param {string} georeferenceid
 * @param {string} originalMapContainerId
 * @param {string} geoMapContainerId
 */
vk2.app.GeoreferenceApp.prototype.initializeWithGeoreferenceId_ = function(georeferenceid, originalMapContainerId, geoMapContainerId){
	if (goog.DEBUG){
		console.log('Load georeference application for georeferenceid.')
	};
	
	this.fetchProcessDataFromServer_('georeferenceid=' + georeferenceid, goog.bind(this.loaderFunction_, this, originalMapContainerId, geoMapContainerId));
};

/**
 * @private
 * @param {string} objectid
 * @param {string} originalMapContainerId
 * @param {string} geoMapContainerId
 */
vk2.app.GeoreferenceApp.prototype.initializeWithObjectId_ = function(objectid, originalMapContainerId, geoMapContainerId){
	if (goog.DEBUG){
		console.log('Load georeference application for objectid.')
	};
	
	this.fetchProcessDataFromServer_('objectid=' + objectid, goog.bind(this.loaderFunction_, this, originalMapContainerId, geoMapContainerId));
};

/**
 * @private
 * @param {string} originalMapContainerId
 * @param {string} geoMapContainerId
 * @param {Object} data
 */
vk2.app.GeoreferenceApp.prototype.loaderFunction_ = function(originalMapContainerId, geoMapContainerId, data){
	if (goog.DEBUG){
		console.log('Sucessfully fetch data from server:');
		console.log(data);
	};
		
	var extent = data.hasOwnProperty('extent') ? data['extent'] : [13.8,51, 14.2,52],
		srsView = new vk2.georeference.view.SourceView(originalMapContainerId, data['zoomify']),
		targetView = new vk2.georeference.view.TargetView(geoMapContainerId, ol.proj.transformExtent(extent, 
			vk2.settings.GEOREFERNCE_DEFAULT_EXTENT_SRS, vk2.settings.DISPLAY_SRS ));		
	
	// before calling this function the zoomify layer has to be loaded
	goog.events.listen(srsView, 'loadend', function(){
		
		// load toolbox
		var georeferencer = new vk2.georeference.Georeferencer({
			parentEl: originalMapContainerId,
			menuElId: 'georef-validate-menu',
			mapId: data['objectid'],
			srcViewer: srsView,
			trgViewer: targetView,
			gcp: data['georeference'], 
			type: data['type'],
			clipPolygon: data['clip'],
			georeferenceId: data['georeferenceid']
		});
	},undefined, this);
	
	// Should be active in production
	// if the server response a warn message display it
//	if (data.hasOwnProperty('warn')){
//		var warnMsg  = data['warn'];
//		var warnEl = goog.dom.createDom('div', {
//			'innerHTML': warnMsg + ' <a href="' + vk2.settings.MAIN_PAGE + '?georef=on">' + vk2.utils.getMsg('backToMain') + '</a>',
//			'class': 'alert alert-danger warn-msg'
//		});
//		
//		var parentContainer = goog.dom.getElement(originalMapContainerId);
//		goog.dom.appendChild(parentContainer, warnEl);
//	}
};
