goog.provide('vk2.controller.MapController');

goog.require('goog.dom');
goog.require('goog.array');
goog.require('goog.events');
goog.require('vk2.utils');
goog.require('vk2.utils.Modal');
goog.require('vk2.tool.TimeSlider');
goog.require('vk2.tool.GazetteerSearch');
goog.require('vk2.tool.PermalinkEventType');
goog.require('vk2.module.SpatialTemporalSearchModule');
goog.require('vk2.module.MapSearchModule');
goog.require('vk2.module.MapSearchModuleEventType');
goog.require('vk2.layer.HistoricMap');
goog.require('vk2.control.LayerSpy');
goog.require('vk2.control.RotateNorth');
goog.require('vk2.control.Permalink');
goog.require('vk2.control.MousePositionOnOff');
goog.require('vk2.utils.routing');

ol.Map.prototype.getHistoricMapLayer = function(){
	var layers = this.getLayers().getArray();
	var historicMapLayers = [];
	for (var i = 0; i < layers.length; i++){
		if (layers[i] instanceof vk2.layer.HistoricMap){
			historicMapLayers.push(layers[i]);
		};
	};
	return historicMapLayers;
};

/**
 * @param {string} mapElId
 * @param {Object|undefined} opt_mapViewSettings
 * @constructor
 * @export
 */
vk2.controller.MapController = function(mapElId, opt_mapViewSettings){
		
	var settings = opt_mapViewSettings !== undefined ? opt_mapViewSettings : {
		projection: 'EPSG:3857',
		center: [1528150, 6630500],
		zoom: 2
	};

	/**
	 * @type {ol.Map}
	 * @private
	 */
	this.map_ = vk2.controller.MapController.createBaseMap(mapElId, settings);

	// append click behavior to map object
	this.map_.on('singleclick', function(event){
		if (goog.DEBUG)
			console.log('Pixel: '+event.pixel);

		var features = [];
		this.forEachFeatureAtPixel(event['pixel'], function(feature){
			features.push(feature);
		});

		if (goog.DEBUG)
			console.log(features);

		vk2.controller.MapController.showMapProfile(features);
	});
};

/**
 * @param {string} mapElId
 * @param {Object} mapViewSettings
 * @return
 */
vk2.controller.MapController.createBaseMap = function(mapElId, mapViewSettings){

	return new ol.Map({
		'layers': [
		   new ol.layer.Tile({
			 //  preload: Infinity,
			   source: new ol.source.OSM()
		   })
//				new ol.layer.Tile({
//					style: 'Road',
//			    	source: new ol.source.MapQuest({layer: 'osm'})
//				})
		],
		'renderer': 'canvas',
		'target': mapElId,
		'interactions': ol.interaction.defaults().extend([
		    new ol.interaction.DragRotateAndZoom()
		]),
		'controls': [
		    new ol.control.Attribution({
		    	collapsible:false,
		    	collapsed:false
		    }),
		   	new ol.control.Zoom(),
		   	new ol.control.FullScreen(),
			new vk2.control.LayerSpy({
				'spyLayer':new ol.layer.Tile({
					attribution: undefined,
					source: new ol.source.OSM()
				})
			}),
			new vk2.control.RotateNorth(),
			new ol.control.ScaleLine(),
			new vk2.control.Permalink(),
			new vk2.control.MousePositionOnOff()
		],
		'view': new ol.View(mapViewSettings)
	});
};

/**
 * @param {vk2.tool.GazetteerSearch} gazetteersearch
 */
vk2.controller.MapController.prototype.registerGazetteerSearchTool_ = function(gazetteersearch){
	// jumps to extent
	goog.events.listen(gazetteersearch, 'jumpto', function(event){
		var view = this.map_.getView();
		var lonlat = event.target['lonlat'];
		view.setCenter(ol.proj.transform([parseFloat(lonlat[0]),parseFloat(lonlat[1])], 
				event.target['srs'], 'EPSG:900913'));
		view.setZoom(5);
	}, undefined, this);
};

/**
 * @param {vk2.module.MapSearchModule} mapsearch
 */
vk2.controller.MapController.prototype.registerMapSearchModule_ = function(mapsearch){
	/**
	 * @type {vk2.module.MapSearchModule}
	 * @private
	 */
	this.map_search = mapsearch;
		
	// register addmtb event
	goog.events.listen(this.map_search, vk2.module.MapSearchModuleEventType.CLICK_RECORD, function(event){		
		if (goog.DEBUG){
			console.log('Trigger map search event');
		};			
			
		var feature = event.target['feature'];
		if (feature.get("georeference")){
			if (goog.DEBUG){
				console.log('Add map to layer management.')
			};
			
			// display the map on top of the the base map
			this.map_.addLayer(this._createHistoricMapForFeature(feature));
		} else {
			if (goog.DEBUG){
				console.log('Display original or georeference ...')
			};
			//vk2.controller.MapController.showMapProfile([feature]);
			vk2.controller.MapController.showGeoreferenceDialog(feature);
		};		
		
	}, undefined, this);
};

/**
 * @param {vk2.tool.Permalink} permalink
 */
vk2.controller.MapController.prototype.registerPermalinkTool = function(permalink){
	// register addmtb event
	goog.events.listen(permalink, vk2.tool.PermalinkEventType.ADDMAP, function(event){
		var feature = event.target['feature'];
		
		// request associated messtischblaetter for a blattnr
		if (feature.get('georeference') === true)
			this.map_.addLayer(this._createHistoricMapForFeature(feature));
	}, undefined, this);
};

/**
 * @param {vk2.tool.TimeSlider} timeSlider
 */
vk2.controller.MapController.prototype.registerTimeSliderTool_ = function(timeSlider){
	// this event links the content of the map search list with the time slider
	goog.events.listen(timeSlider, 'timechange', function(event){
		this.map_search.getFeatureSource().setTimeFilter(event.target.time[0], event.target.time[1]);
		this.map_search.getFeatureSource().refresh();
	}, undefined, this);
};

/**
 * @param {ol.Feature} feature
 * @return {vk2.layer.HistoricMap}
 */
vk2.controller.MapController.prototype._createHistoricMapForFeature = function(feature){
	return new vk2.layer.HistoricMap({
		'time':feature.get('time'),
		'thumbnail': feature.get('thumb'),
		'title': feature.get('title'),
		'objectid': feature.get('id'),
		'id': feature.getId(),
		'dataid':feature.get('dataid'),
		'tms': feature.get('tms'),
		'clip': feature.getGeometry().clone()
	}, this.map_);
};




/**
 * @param {Array.<ol.Feature>} features
 * @static 
 */
vk2.controller.MapController.showMapProfile = function(features) {
	if (features.length > 0){
		var modal = new vk2.utils.Modal('vk2-overlay-modal',document.body, true);
		modal.open(undefined, 'mapcontroller-click-modal');
		
		var section = goog.dom.createDom('section');
		for (var i = 0; i < features.length; i++){
			var anchor = goog.dom.createDom('a', {
				'href': vk2.utils.routing.getMapProfileRoute(features[i].getId()),
				'innerHTML': features[i].get('title') + ' ' + features[i].get('time'),
				'target':'_self'
			});
			goog.dom.appendChild(section, anchor);
			goog.dom.appendChild(section, goog.dom.createDom('br'));
		};			
		modal.appendToBody(section, 'map-profile');		
	
		if (features.length == 1)
			anchor.click();
	}
}

/**
 * @param {ol.Feature} feature
 * @static 
 */
vk2.controller.MapController.showGeoreferenceDialog = function(feature) {
	if (feature !== undefined){
		var modal = new vk2.utils.Modal('vk2-overlay-modal',document.body, true);
		modal.open(undefined, 'mapcontroller-click-modal georeference-dialog');
		
		var section = goog.dom.createDom('section');
		
		// create anchor go to georeference view
		var anchor = goog.dom.createDom('a', {
			'class': 'btn btn-primary',
			'href': vk2.utils.routing.getGeorefPageRoute(feature.getId()),
			'innerHTML': vk2.utils.getMsg('go-to-georef'),
			'target':'_blank'
		});
		goog.dom.appendChild(section, anchor);
		
		// create anchor go to map profile
		var anchor = goog.dom.createDom('a', {
			'class': 'btn btn-primary',
			'href': vk2.utils.routing.getMapProfileRoute(feature.getId()),
			'innerHTML': vk2.utils.getMsg('go-to-org'),
			'target':'_self'
		});
		goog.dom.appendChild(section, anchor);
		
		modal.appendToBody(section, 'map-profile');		
	}
}

/**
 * @returns {ol.Map}
 * @export
 */
vk2.controller.MapController.prototype.getMap = function(){
	return this.map_;
};

/**
 * @param {vk2.module.SpatialTemporalSearchModule} spatialTempSearch
 */
vk2.controller.MapController.prototype.registerSpatialTemporalSearch = function(spatialTempSearch){
	this.registerMapSearchModule_(spatialTempSearch.getMapSearchModule());
	this.registerTimeSliderTool_(spatialTempSearch.getTimesliderTool());
	this.registerGazetteerSearchTool_(spatialTempSearch.getGazetteerSearchTool());
};

