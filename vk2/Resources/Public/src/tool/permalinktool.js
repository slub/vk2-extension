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
 * @param {ol.Map} map
 * @constructor
 * @extends {goog.events.EventTarget}
 */
vk2.tool.Permalink = function(map){
	
	/**
	 * @type {ol.Map}
	 * @private
	 */
	this._map = map;
		
	this.parsePermalink_(map);
	
	goog.base(this);
};
goog.inherits(vk2.tool.Permalink, goog.events.EventTarget);

/**
 * @param {ol.Map} map
 * @private
 */
vk2.tool.Permalink.prototype.parsePermalink_ = function(map){
	var uri = new goog.Uri(window.location.href),
		queryData = uri.getQueryData(),
		center,
		// default zoom
		zoom = 4;
		
	// if there are information to center and zoom parse them
	if (queryData.containsKey('z') && queryData.containsKey('c')){
		// zoom to given center
		var centerArr = queryData.get('c').split(',');
		center = [parseInt(centerArr[0], 0),parseInt(centerArr[1], 0)];
		zoom = parseInt(queryData.get('z'), 0);
	};
	
	// if there is center information but not oid zoom to center
	if (!queryData.containsKey('oid') && goog.isDef(center)){
		this.zoomToMapView_(center, zoom);
		return;
	};
	
	// now oid so return
	if (!queryData.containsKey('oid') || queryData.get('oid') === "")
		return;
	
	// else parse the information regarding the oid
	var objectids = queryData.get('oid').split(',');
			
	// remove empty strings
	for (var i = 0; i < objectids.length; i++){
		if (objectids[i] == '')
			objectids.splice(i, 1);
	};			
	objectids.reverse();
	
	if (objectids.length === 1 && !goog.isDef(center)) {
		var url = vk2.request.ElasticSearch.getFeatureForId('map', objectids[0]);
		// send request
		goog.net.XhrIo.send(url, goog.bind(function(e) {
			var xhr = /** @type {goog.net.XhrIo} */ (e.target);
			var data = xhr.getResponseJson() ? xhr.getResponseJson() : undefined;
	    	xhr.dispose();

	    	if (goog.isDef(data)) {
	    		var feature = vk2.parser.ElasticSearch.readFeature(objectids[0], data['_source'],
	    				vk2.settings.ELASTICSEARCH_SRS, 'EPSG:3857');
	    		
	    		if (feature !== undefined) {
	    			center = feature.getGeometry().getInteriorPoint().getCoordinates();
	    			this.dispatchEvent(new goog.events.Event(vk2.tool.PermalinkEventType.ADDMAP,{'feature':feature}));
		    		this.zoomToMapView_(center, zoom);
	    		};	    			
	    	};
		}, this), 'GET');
	} else {
		// assumes that there exists multiple oid regaring a permalink
		vk2.request.ElasticSearch.getFeatureForIds('map', objectids, goog.bind(function(e){
			var xhr = /** @type {goog.net.XhrIo} */ (e.target);
			var data = xhr.getResponseJson() ? xhr.getResponseJson() : undefined;
	    	xhr.dispose();
	    	
	    	if (goog.isDef(data)) {
	    		var features = vk2.parser.ElasticSearch.readFeatures(data['docs'],
	    				vk2.settings.ELASTICSEARCH_SRS, 'EPSG:3857');
	    				    		
		    	// dispatch addmtb events, but dispatch them in the correct ording corresponding to the 
		    	// ordering of the objectids array
		    	for (var i = 0; i < objectids.length; i++){
			    	for (var j = 0; j < features.length; j++){
			    		if (objectids[i] == features[j].getId())
			    			this.dispatchEvent(new goog.events.Event(vk2.tool.PermalinkEventType.ADDMAP,{'feature':features[j]}));
			    	};
		    	};
		    	
		    	// if no center was set so far get center of the first map
		    	if (!center && features.length > 0) {
		    		center = features[0].getGeometry().getInteriorPoint().getCoordinates();
		    	};
	    		this.zoomToMapView_(center, zoom);
	    	} else {
	    		if (goog.DEBUG) {
	    			alert('Could not resolve permalink.');
	    		};
	    	};
		}, this));
	};
};

/**
 * @return {string}
 */
vk2.tool.Permalink.prototype.createPermalink = function(){
	if (goog.isDef(this._map)){
		var layers = this._map.getLayers();
		
		// get objectids
		var objectids = '';
		layers.forEach(function(layer){
			if (goog.isDef(layer.getId)){
				objectids += layer.getId() + ',';
			};
		});
		
		// get zoom & center
		var center = this._map.getView().getCenter();
		var zoom = this._map.getView().getZoom();
		
		// create permalink
		var permalink = new goog.Uri(window.location.origin + vk2.utils.routing.getBaseUrl() + 'welcomepage=off');
		var qData = permalink.getQueryData();
		
		// append zoom, center and objectids to queryData
		qData.set('z',zoom);
		qData.set('c',center[0]+','+center[1]);
		qData.set('oid', objectids);
		permalink.setQueryData(qData);
		
		if (goog.DEBUG){
			console.log(objectids);
			console.log(permalink.toString());
		};
		
		return permalink.toString();
	};	
};

/**
 * @param {ol.Coordinate} center
 * @param {number} zoom
 * @private
 */
vk2.tool.Permalink.prototype.zoomToMapView_ = function(center, zoom) {
	this._map.getView().setCenter(center);
	this._map.getView().setZoom(zoom);
};