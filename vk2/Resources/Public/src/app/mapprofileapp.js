goog.provide('vk2.app.MapProfileApp');

goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.net.XhrIo');
goog.require('vk2.control.ImageManipulation');
goog.require('vk2.parser.ElasticSearch');
goog.require('vk2.request.ElasticSearch');
goog.require('vk2.settings');
goog.require('vk2.tool.MetadataBinding');
goog.require('vk2.utils');
goog.require('vk2.viewer.ZoomifyViewer');
goog.require('vk2.viewer.ZoomifyViewerEventType');

/**
 * @export
 * @constructor
 * @param {Object} settings
 * 		{string} metadataContainer
 * 		{string} zoomifyContainer
 *  	{string} titleshortId
 *  	{string} titlelongId
 *  	{string} linkToFotothekId
 */
vk2.app.MapProfileApp = function(settings){
	
	var objectId = vk2.utils.getQueryParam('objectid');
	
	if (!goog.isDefAndNotNull(objectId)) {
		console.log('Could not identify objectid.')
		return;
	};
	
	if (goog.DEBUG)
		console.log(settings);
	
	var requestUrl = vk2.request.ElasticSearch.getFeatureForId('map', objectId);
	goog.net.XhrIo.send(requestUrl, goog.bind(function(e){
		var responseObj = e.target.getResponseJson();
		if (responseObj) {
			var feature = vk2.parser.ElasticSearch.readFeature(responseObj['_id'], responseObj['_source']);
			this.initApp_(feature, settings)		
		};
	}, this));

};

/**
 * @param {ol.Feature} feature
 * @param {Object} settings
 */
vk2.app.MapProfileApp.prototype.initApp_ = function(feature, settings) {
	var mapProperties = feature.getProperties();
	
	// first set title
	goog.dom.getElement(settings['titleshortId']).innerHTML = mapProperties['title'];
	goog.dom.getElement(settings['titlelongId']).innerHTML = mapProperties['titlelong'];
	goog.dom.getElement(settings['linkToFotothekId']).href = mapProperties['plink'];
	
	if (!ol.has.WEBGL){
		// load the hole application with a canvas renderer
		var zoomifyViewer = new vk2.viewer.ZoomifyViewer(settings['zoomifyContainer'], mapProperties['zoomify']),
			metadatbinding = new vk2.tool.MetadataBinding(settings['metadataContainer'], feature.getId(), mapProperties);
		return;
	};	
	
	// first the access-origin-allow header has to be reset for the zoomify tiles
	// load the hole application with a webgl renderer
	var zoomifyViewer = new vk2.viewer.ZoomifyViewer(settings['zoomifyContainer'], mapProperties['zoomify'], true),
		metadatbinding = new vk2.tool.MetadataBinding(settings['metadataContainer'], feature.getId(), mapProperties);
	
	// append image manipulation tool
	goog.events.listen(zoomifyViewer, vk2.viewer.ZoomifyViewerEventType.LOADEND, function(event){
		zoomifyViewer.getMap().addControl(new vk2.control.ImageManipulation());
		
		var layer = zoomifyViewer.getLayer();
/*		layer.on('precompose', function(evt) {
			console.log('Precompose event triggered');
			
			var webglContext = evt['glContext'],
				canvasContext = evt['context'];
			if (webglContext !== undefined && webglContext !== null) {
				var webglRenderingContext = webglContext.getGL();
			}
		});*/
        //
		//layer.on('precompose', function(evt) {
		//	console.log('Postcompose event triggered');
        //
		//	var webglContext = evt['glContext'];
		//	if (webglContext !== undefined && webglContext !== null) {
		//		var webglRenderingContext = webglContext.getGL();
		//		var filter = new WebGLImageFilter(webglContext.getCanvas());
		//		filter.addFilter('contrast', 1);
		//		filter.applyToWebGLRenderingContext(webglRenderingContext);
        //
        //
		//	}
		//});

		//layer.on('precompose', function(evt) {
		//	console.log('Postcompose event triggered');
        //
		//	var webglContext = evt['glContext'];
		//	if (webglContext !== undefined && webglContext !== null) {
		//		var webglRenderingContext = webglContext.getGL();
		//		var filter = new WebGLImageFilter(webglContext.getCanvas());
		//		filter.addFilter('negative');
		//		filter.applyToWebGLRenderingContext(webglContext.getCanvas(), webglRenderingContext);
        //
		//	}
		//});

		var counter = 0;
		layer.on('postcompose', function(evt) {
			console.log('Postcompose event triggered');

			//var context = evt['glContext'];
			//var gl = context.getGL();
			//gl.disable(gl.STENCIL_TEST);

			var webglContext = evt['glContext'];
			if (webglContext !== undefined && webglContext !== null) {
				var webglRenderingContext = webglContext.getGL();
				var filter = new WebGLImageFilter(webglContext.getCanvas());
				//filter.addFilter('contrast', 100);
				filter.addFilter('negative');
				//filter.addFilter('blur', 7);
				filter.applyToWebGLRenderingContext(webglContext.getCanvas(), webglRenderingContext);
			}
		});
	}); 
	
	return;
};