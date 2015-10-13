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
	var parentEl = goog.isString(options.parentEl) ? goog.dom.getElement(options.parentEl) : parentEl,
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
	// generate and add gcp and clip toolbox
	//
	var gcpHandler = (goog.isDef(gcp) && vk2.georeference.utils.isNewTKGCP(gcp)) ?
		new vk2.georeference.handler.GCPTK25Handler({
			sources: gcpSources,
			gcps: gcp,
			type: type,
			overwriteId: overwriteId,
			projections: projections,
			srcViewer: srcViewer
		}) : new vk2.georeference.handler.GCPDefaultHandler({
			sources: gcpSources,
			gcps: gcp,
			type: type,
			overwriteId: overwriteId,
			projections: projections
		}),
		gcpToolbox = new vk2.georeference.toolbox.GCPToolbox(parentEl),
		gcpToolboxHandler = new vk2.georeference.handler.GCPToolboxHandler({
			toolbox: gcpToolbox,
			handler: gcpHandler,
			maps: [srcViewer.getMap(), targetViewer.getMap()],
			sources: gcpSources			
		}),
		clipToolbox = new vk2.georeference.toolbox.ClipToolbox(parentEl),
		clipToolboxHandler = new vk2.georeference.handler.ClipToolboxHandler(clipToolbox, srcViewer.getMap(), clipPolygon);
	this.addToolboxBehavior_(gcpToolboxHandler, clipToolboxHandler);
	
	//
	// append warp and confirm controls for communication with backend
	//
	var warpImageControl = new vk2.georeference.control.WarpImageControl(menuElId, mapId, 
			gcpToolboxHandler.getHandler(), clipToolboxHandler.getFeatureSource()),
		confirmControl = new vk2.georeference.control.ConfirmationControl(menuElId, mapId, 
			gcpToolboxHandler.getHandler(), clipToolboxHandler.getFeatureSource());
	this.addControlBehavior_(warpImageControl, confirmControl, targetViewer);
	
	// open gcp toolbox on start up
	gcpToolbox.activate();
	
	//this.testing(targetViewer);
};

//vk2.georeference.Georeferencer.prototype.testing = function(targetViewer) {
//	var map = targetViewer.getMap(),
//		height = 8966,
//		width = 8329,
//		proj = new ol.proj.Projection({
//			'code': 'ZOOMIFY',
//			'units': 'pixels',
//			'extent': [0, 0, width, height]
//		}),
//		view = new ol.View({
//		    'projection': proj,
//		    'center': [width / 2, - height / 2],
//			'zoom': 1,
//			'maxZoom': 9
//	    }),
//		layer = new ol.layer.Tile({
//			source: new vk2.georeference.transform.AffineSource({
//				  'url': 'http://fotothek.slub-dresden.de/zooms/df/dk/0010000/df_dk_0010001_7114_1825/',
//				  'size': [width, height],
//				  'crossOrigin': '*'
//			}),
//			projection:'EPSG:3857'
//		});
//	map.addLayer(layer);
//	
//	if (goog.DEBUG) {
//		window['map'] = map;
//	}
//};

/**
 * @param {vk2.georeference.control.WarpImageControl} warpImageControl
 * @param {vk2.georeference.control.ConfirmationControl} confirmControl
 * @param {vk2.georeference.ResultViewer} targetViewer
 */
vk2.georeference.Georeferencer.prototype.addControlBehavior_ = function(warpImageControl, confirmControl, targetViewer){
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
		targetViewer.displayValidationMap(data['wmsUrl'], data['layerId'], data['clip']);
		targetViewer.deactivateLoadingBar();
	});
	
	goog.events.listen(warpImageControl, vk2.georeference.control.WarpImageControlEventType.ERROR, function(e){	
		alert('Something went wrong, while trying to request a validation result.')
		targetViewer.deactivateLoadingBar();
	});
	
	// append behavior for confirm params control
	goog.events.listen(confirmControl, vk2.georeference.control.ConfirmationControlEventType.END_CONFIRM, function(e){
		window.location.href = vk2.utils.routing.getMainPageRoute();
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