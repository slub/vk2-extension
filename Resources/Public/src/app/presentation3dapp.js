goog.provide('vk2.app.Presentation3DApp');

goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');

goog.require('vk2.utils');
goog.require('vk2.module.MapModule');
goog.require('vk2.tool.Permalink');
goog.require('vk2.module.SpatialTemporalSearchModule');
goog.require('vk2.module.LayerManagementModule');
goog.require('vk2.settings');

/**
 * @export
 * @constructor
 * @param {Object} settings
 * 		{boolean} authenticate
 * 		{string} modalAnchorClassName
 * 		{string} mapContainerId
 * 		{string} spatialsearchContainerId
 * 		{string} georefChooserContainerId
 */
vk2.app.Presentation3DApp = function(settings){
	if (goog.DEBUG)
		console.log(settings);
	
	// define proxy url
	vk2.utils.setProxyUrl();
	vk2.utils.checkIfCookiesAreEnabble();
	
	// check if the app should be started in georeference mode
	var isAuthenticate = goog.isDef(settings['authenticate']) && goog.isBoolean(settings['authenticate']) ? settings['authenticate'] : false;
		
	// append modal behavior to page anchors
	var modalAnchorClassName = goog.isDef(settings['modalAnchorClassName']) ? settings['modalAnchorClassName'] : 'vk2-modal-anchor';
	vk2.utils.loadModalOverlayBehavior(modalAnchorClassName);
	
	// check if there is a main page and if yes load it
	if (!isAuthenticate)
		this.loadWelcomePage_();
	
	//
	// initialize basic application modules
	//
	var mapModule = new vk2.module.MapModule(settings['mapContainerId'], vk2.settings.MAPVIEW_PARAMS, true);
	
	// load spatialsearch 
	var spatialSearch = new vk2.module.SpatialTemporalSearchModule(settings['spatialsearchContainerId'], mapModule.getMap());
	mapModule.registerSpatialTemporalSearch(spatialSearch);
	
	// load layermanagement
	var layermanagement = new vk2.module.LayerManagementModule(settings['mapContainerId'], mapModule.getMap().getLayers(), mapModule.getMap());
	
	// permalink 
	//var permalink = new vk2.tool.Permalink(mapController.getMap());
	//permalink.parsePermalink(mapController.getMap());
	//mapController.registerPermalinkTool(permalink);
		
	if(goog.DEBUG){
		window['map'] = mapModule.getMap();
		//window['spatialsearch'] = spatialSearch;
		//window['mapsearch'] = spatialSearch.getMapSearchModule();
	};
	
	// for correct displaying of tooltips
	setTimeout(function(){vk2.utils.overwriteOlTitles(settings['mapContainerId']);}, 500);
};

/**
 * @private
 */
vk2.app.Presentation3DApp.prototype.loadWelcomePage_ = function(){
	// welcome page
	var welcomePageOn = vk2.utils.getQueryParam('welcomepage');
	if (goog.dom.getElement("welcome-page-link") && vk2.utils.getCookie('vk2-welcomepage') !== 'off' && welcomePageOn !== 'off'){
		goog.dom.getElement("welcome-page-link").click();
	};
};