goog.provide('vk2.georeference.Georeferencer');

goog.require('goog.events');

//goog.require('ol.geom.Polygon');
//goog.require('ol.Feature');

goog.require('vk2.utils');
goog.require('vk2.utils.Styles');
goog.require('vk2.georeference.toolbox.ClipToolbox');
goog.require('vk2.georeference.toolbox.ClipToolboxEventType');
goog.require('vk2.georeference.handler.ClipToolboxHandler');
goog.require('vk2.georeference.toolbox.GCPToolbox');
goog.require('vk2.georeference.toolbox.GCPToolboxEventType');
goog.require('vk2.georeference.handler.GCPToolboxHandler');
goog.require('vk2.georeference.handler.GCPDefaultHandler');
goog.require('vk2.georeference.handler.GCPTK25Handler')
goog.require('vk2.georeference.handler.GCPTK25HandlerEventType');
goog.require('vk2.georeference.control.WarpImageControl');
goog.require('vk2.georeference.control.WarpImageControlEventType');
goog.require('vk2.georeference.control.ConfirmationControl');
goog.require('vk2.georeference.control.ConfirmationControlEventType');
//goog.require('vk2.georeference.transform.AffineSource');
goog.require('vk2.georeference.utils');

/**
 * @classdesc
 * Provides clientside functionality to georeference image.
 * 
 * @constructor
 * @param {vk2x.georeference.GeoreferencerOptions} options
 */
vk2.georeference.Georeferencer = function(options){	
	
	if (goog.DEBUG) {
		console.log('Load GeoreferenceTesting with: ');
		console.log(options)
	};
	
	/**
	 * @type {Element}
	 * @private
	 */
	var parentOriginalEl = goog.isString(options.parentElOriginal) ? goog.dom.getElement(options.parentElOriginal) : options.parentElOriginal,
		parentGeorefEl = goog.isString(options.parentElGeoref) ? goog.dom.getElement(options.parentElGeoref) : options.parentElGeoref,
		menuElId = options.menuElId,
		mapId = options.mapId,
		srcViewer = options.srcViewer,
		targetViewer = options.trgViewer,
		gcp = goog.isDef(options.gcp) ? options.gcp : undefined,
		type = goog.isDef(options.type) ? options.type: undefined,
		clipPolygon = goog.isDef(options.clipPolygon) ? options.clipPolygon: undefined,
		overwriteId = goog.isDef(options.georeferenceId) ? options.georeferenceId: undefined,
		gcpSources = [new ol.source.Vector(), new ol.source.Vector()],
		projections = goog.isDef(options.projections) ? projections : undefined;

	//
	// set correct value of the transformation algorithm
	//
	if (gcp !== undefined)
		this.updateSelectOfTransformationChooser_(gcp['algorithm']);

	// 
	// generate and add gcp and clip toolbox
	//
	var gcpHandler = new vk2.georeference.handler.GCPDefaultHandler({
			sources: gcpSources,
			gcps: gcp,
			type: type,
			overwriteId: overwriteId,
			projections: projections
		}),
		gcpToolbox = new vk2.georeference.toolbox.GCPToolbox(parentOriginalEl),
		gcpToolboxHandler = new vk2.georeference.handler.GCPToolboxHandler({
			toolbox: gcpToolbox,
			handler: gcpHandler,
			maps: [srcViewer.getMap(), targetViewer.getMap()],
			sources: gcpSources			
		}),
		clipToolbox = new vk2.georeference.toolbox.ClipToolbox(parentGeorefEl),
		clipToolboxHandler = new vk2.georeference.handler.ClipToolboxHandler(clipToolbox, targetViewer.getMap(), clipPolygon);
	this.addToolboxBehavior_(gcpToolboxHandler, clipToolboxHandler);
	
	//
	// append warp and confirm controls for communication with backend
	//
	var warpImageControl = new vk2.georeference.control.WarpImageControl(menuElId, mapId, 
			gcpToolboxHandler.getHandler()),
		confirmControl = new vk2.georeference.control.ConfirmationControl(menuElId, mapId, 
			gcpToolboxHandler.getHandler(), clipToolboxHandler.getFeatureSource());
	this.addControlBehavior_(warpImageControl, confirmControl, targetViewer, clipToolboxHandler.getFeatureSource());
	
	// open gcp toolbox on start up
	gcpToolbox.activate();

};

/**
 * @param {vk2.georeference.control.WarpImageControl} warpImageControl
 * @param {vk2.georeference.control.ConfirmationControl} confirmControl
 * @param {vk2.georeference.ResultViewer} targetViewer
 * @param {ol.source.Vector} clipPolygonSource
 */
vk2.georeference.Georeferencer.prototype.addControlBehavior_ = function(warpImageControl, confirmControl, targetViewer, clipPolygonSource){
	// append behavior for warp image control
	goog.events.listen(warpImageControl, vk2.georeference.control.WarpImageControlEventType.START_WARPING, function(e){
		if (goog.DEBUG){
			console.log('Start warping ...')
		}
		
		targetViewer.activateLoadingBar();
	});
	
	goog.events.listen(warpImageControl, vk2.georeference.control.WarpImageControlEventType.END_WARPING, function(e){
		if (goog.DEBUG){
			console.log('End warping ...');
			console.log(e.target['data']);	
		};
		
		var data = e.target['data'];
		targetViewer.displayValidationMap(data['wmsUrl'], data['layerId'], clipPolygonSource.getFeatures()[0]);
		targetViewer.deactivateLoadingBar();
	});
	
	goog.events.listen(warpImageControl, vk2.georeference.control.WarpImageControlEventType.ERROR, function(e){	
		alert('Something went wrong, while trying to request a validation result.')
		targetViewer.deactivateLoadingBar();
	});
	
	// append behavior for confirm params control
	goog.events.listen(confirmControl, vk2.georeference.control.ConfirmationControlEventType.END_CONFIRM, function(e){
		//window.location.href = vk2.utils.routing.getMainPageRoute();
	});
	
};

/**
 * The function append generic toolbox behavior in case of activation and deactivation
 * @param {vk2.georeference.handler.GCPToolboxHandler} gcpToolboxHandler
 * @param {vk2.georeference.handler.ClipToolboxHandler} clipToolboxHandler
 * @private
 */
vk2.georeference.Georeferencer.prototype.addToolboxBehavior_ = function(gcpToolboxHandler, clipToolboxHandler){
	var gcpToolbox = gcpToolboxHandler.getToolbox(),
		clipToolbox = clipToolboxHandler.getToolbox();
	
	// bind events
	goog.events.listen(gcpToolbox, vk2.georeference.toolbox.GCPToolboxEventType.ACTIVATE, clipToolbox.deactivate);
	goog.events.listen(clipToolbox, vk2.georeference.toolbox.ClipToolboxEventType.ACTIVATE, gcpToolbox.deactivate);
	
	// couple for special create clip box behavior gcp handler
	goog.events.listenOnce(gcpToolboxHandler.getHandler(), vk2.georeference.handler.GCPTK25HandlerEventType.ADD_GCP_CLIPPOLYGON, 
			clipToolboxHandler.addClipPolygon, undefined, clipToolboxHandler); 
};

/**
 * Update the selected option of the transformation-chooser tool
 * @param {string} algorithm
 * @private
 */
vk2.georeference.Georeferencer.prototype.updateSelectOfTransformationChooser_ = function(algorithm) {
	var transformationChooserElId = 'transformation-chooser',
		transformationChooserOptionEl = $('#' + transformationChooserElId + ' option');

	for (var i = 0; i < transformationChooserOptionEl.length; i++) {
		if (algorithm.toLowerCase() === transformationChooserOptionEl[i].innerHTML.toLowerCase())
			$('#' + transformationChooserElId).val(transformationChooserOptionEl[i].innerHTML);
	}
}