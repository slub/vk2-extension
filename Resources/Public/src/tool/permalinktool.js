goog.provide('vk2.tool.Permalink');
goog.provide('vk2.tool.PermalinkEventType');

goog.require('goog.Uri');
goog.require('goog.Uri.QueryData');
goog.require('goog.net.XhrIo');
goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');
goog.require('goog.events.EventType');
goog.require('vk2.parser.ElasticSearch');
goog.require('vk2.request.ElasticSearch');
goog.require('vk2.utils.routing');
goog.require('vk2.settings');

/**
 * @enum {string}
 */
vk2.tool.PermalinkEventType = {
	ADDMAP: 'addmap'
};

/**
 * The permalink tools offers functions for parsing permalinks and creating them. It uses the following url query
 * parameters:
 * 		z: zoom level
 * 		c: center coordinate in EPSG:4326
 * 		oid: object id notation of the virtual map forum 2.0
 * 		dataid: dataid to support linking throught other slub services.
 *
 * @constructor
 * @extends {goog.events.EventTarget}
 */
vk2.tool.Permalink = function(map){

	goog.base(this);

};
goog.inherits(vk2.tool.Permalink, goog.events.EventTarget);

/**
 * @param {ol.Map} map
 */
vk2.tool.Permalink.prototype.parsePermalink = function(map){

	var uri = new goog.Uri(window.location.href),
		params = uri.getQueryData(),
		center, zoom, tilt, distance, altitude;

	if (params.containsKey('c')){
		// parse the center point and the zoom if exists
		var centerArray = params.get('c').split(',');
		center = ol.proj.transform([parseFloat(centerArray[0], 0),parseFloat(centerArray[1], 0)], 'EPSG:4326',
			vk2.settings.MAPVIEW_PARAMS['projection']);
		zoom = params.get('z') !== undefined ? parseInt(params.get('z'), 0) : 4;
		tilt = params.get('t') !== undefined ? parseFloat(params.get('t'), 5) : 0;
		altitude = params.get('a') !== undefined ? parseFloat(params.get('a'), 1) : 10000;
		distance = params.get('d') !== undefined ? parseFloat(params.get('d'), 1) : 10000;


		if (isNaN(center[0]) || isNaN(center[1])) {
			// assume the coordinates are in EPSG:900913
			center = ol.proj.transform([parseFloat(centerArray[0], 0),parseFloat(centerArray[1], 0)], 'EPSG:3857',
				vk2.settings.MAPVIEW_PARAMS['projection']);
		};
	};

	this.zoomToMapView_(map, center, zoom, tilt, distance, altitude);

	/**
	 * Function for parsing and adding the response
	 * @param {Array.<Object>} data
	 * @param {Array.<string>|undefined} opt_objectids
 	 */
	var parseAddFeatures = goog.bind(function(data, opt_objectids){

		var features = vk2.parser.ElasticSearch.readFeatures(data,
			vk2.settings.ELASTICSEARCH_SRS, 'EPSG:3857');

		if (opt_objectids !== undefined) {
			// dispatch addmtb events, but dispatch them in the correct ording corresponding to the
			// ordering of the objectids array
			for (var i = 0; i < objectids.length; i++){
				for (var j = 0; j < features.length; j++){
					if (objectids[i] == features[j].getId())
						this.dispatchEvent(new goog.events.Event(vk2.tool.PermalinkEventType.ADDMAP,{'feature':features[j]}));
				};
			};
		} else {
			for (var j = 0; j < features.length; j++){
				this.dispatchEvent(new goog.events.Event(vk2.tool.PermalinkEventType.ADDMAP,{'feature':features[j]}));
			};
		}

		// if no center was set so far get center of the first map
		if (!center && features.length > 0) {
			center = features[0].getGeometry().getInteriorPoint().getCoordinates();};
		this.zoomToMapView_(map, center, zoom);

	}, this);

	// add map objects
	if (params.containsKey('oid') && params.get('oid') !== "") {
		// native oid support for virtual map forum ids

		// parse oids
		var objectids = params.get('oid').split(',');

		// remove empty strings
		for (var i = 0; i < objectids.length; i++){
			if (objectids[i] == '')
				objectids.splice(i, 1);
		};
		objectids.reverse();

		// assumes that there exists multiple oid regaring a permalink
		vk2.request.ElasticSearch.getFeatureForIds('map', objectids, function(e) {
			var xhr = /** @type {goog.net.XhrIo} */ (e.target);
			var data = xhr.getResponseJson() ? xhr.getResponseJson() : undefined;
			xhr.dispose();

			if (data['docs'] !== undefined && data['docs'].length > 0) {
				parseAddFeatures(data['docs'], objectids);
			};
		});
	} else if (params.containsKey('dataid') && params.get('dataid') !== "") {
		// assumes that there exists multiple oid regaring a permalink
		// send request
		var url = vk2.settings.ELASTICSEARCH_NODE + '/_search',
			payload = vk2.request.ElasticSearch.getFeaturesForIdsFilterQuery('dataid', [params.get('dataid')]);
		goog.net.XhrIo.send(url, function(e) {
			var xhr = /** @type {goog.net.XhrIo} */ (e.target);
			var data = xhr.getResponseJson() ? xhr.getResponseJson() : undefined;
			xhr.dispose();

			if (data['hits'] !== undefined && data['hits']['hits'] !== undefined && data['hits']['hits'].length > 0) {
				parseAddFeatures(data['hits']['hits']);
			};
		}, 'POST', JSON.stringify(payload));
	}
};

/**
 * @param {ol.Map} map
 * @static
 * @return {string}
 */
vk2.tool.Permalink.createPermalink = function(map){

	var layers = map.getLayers();
		
	// get objectids
	var objectids = '';
	layers.forEach(function(layer){
		if (goog.isDef(layer.getId)){
			objectids += layer.getId() + ',';
		};
	});
		
	// get zoom & center
	var center = ol.proj.transform(map.getView().getCenter(), vk2.settings.MAPVIEW_PARAMS['projection'], 'EPSG:4326');
	var zoom = map.getView().getZoom();
		
	// create permalink
	var baseUrl = !vk2.settings.MODE_3D ? window.location.origin + vk2.utils.routing.getBaseUrl() + '?welcomepage=off' :
			window.location.origin + '/vkviewer/main/3d/?welcomepage=off',
		permalink = new goog.Uri(baseUrl),
		params = permalink.getQueryData();
		
	// append zoom, center and objectids to queryData
	params.set('z',zoom);
	params.set('c',vk2.utils.round(center[0], 4) + ',' + vk2.utils.round(center[1], 4));
	params.set('oid', objectids);

	if (vk2.settings.MODE_3D && ol3d !== undefined) {
		var camera = ol3d.getCamera(),
			position = ol.proj.transform(camera.getPosition(), vk2.settings.MAPVIEW_PARAMS['projection'], 'EPSG:4326');;

		params.set('t',vk2.utils.round(camera.getTilt(), 5));
		params.set('d',vk2.utils.round(camera.getDistance(), 1));
		params.set('a',vk2.utils.round(camera.getAltitude(), 1));
		params.set('c',vk2.utils.round(position[0], 4) + ',' + vk2.utils.round(position[1], 4));
	};

	permalink.setQueryData(params);
		
	if (goog.DEBUG){
		console.log(objectids);
		console.log(permalink.toString());
	};
		
	return permalink.toString();

};

/**
 * @param {ol.Map} map
 * @param {ol.Coordinate=} opt_center
 * @param {number=} opt_zoom
 * @param {number=} opt_tilt
 * @param {number=} opt_altitude
 * @param {number=} opt_distance
 * @private
 */
vk2.tool.Permalink.prototype.zoomToMapView_ = function(map, opt_center, opt_zoom, opt_tilt, opt_altitude, opt_distance) {

	if (opt_center !== undefined)
		map.getView().setCenter(opt_center);

	if (opt_zoom !== undefined)
		map.getView().setZoom(opt_zoom);

	// only set if mode 3d is active
	if (vk2.settings.MODE_3D && ol3d !== undefined) {
		var camera = ol3d.getCamera();

		if (opt_tilt !== undefined)
			camera.setTilt(opt_tilt);

		if (opt_altitude !== undefined)
			camera.setAltitude(opt_altitude);

		if (opt_distance !== undefined)
			camera.setDistance(opt_distance);

		if (opt_center !== undefined)
			camera.setPosition(opt_center);
	}

};