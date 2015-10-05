goog.provide('vk2.layer.Messtischblatt');

//goog.require('ol.Map');
//goog.require('ol.layer.Tile');
//goog.require('ol.geom.Polygon');
goog.require('vk2.utils');

/**
 * @param {Object} settings
 * @param {ol.Map} map
 * @return {ol.layer.Tile}
 */
vk2.layer.Messtischblatt = function(settings, map){
		
	var clipPolygon_ = goog.isDef(settings.clipPolygon) ? settings.clipPolygon : undefined,
		projection = goog.isDef(settings['projection']) ? settings['projection'] : 'EPSG:900913',
		wms_url = goog.isDef(settings.wms_url)? settings.wms_url : undefined,
		layerid = goog.isDef(settings.layerid)? settings.layerid : undefined,
		extent = clipPolygon_ === undefined ? undefined : clipPolygon_.getExtent();

	settings['source'] = new ol.source.TileWMS({
		'url': wms_url,
		'params': {
			'LAYERS':layerid,
			'VERSION': '1.1.1'
		},
		'projection': projection,
		'extent': extent
	});
	
	// define preload behavior
	settings['preload'] = Infinity; 
	var messtischblattLayer = new ol.layer.Tile(settings);
	
	/**
	 * @param {ol.Map} map
	 * @private
	 * @return {Array.<Array.<number>>}
	 */
	messtischblattLayer.getPixelForClipPolygon_ = goog.bind(function(map){	
		var clip_pixel = [];
		var polygonCoordinates = clipPolygon_.getCoordinates()[0];
		
		for (var i = 0; i < polygonCoordinates.length; i++){
			clip_pixel.push(map.getPixelFromCoordinate(polygonCoordinates[i]));
		};
		
		return clip_pixel;
	}, messtischblattLayer);

	/**
	 * @param {Array.<Array.<number>>} clip_pixel
	 * @param {number} pixelRatio
	 * @param {Object} canvas
	 * @private
	 */
	messtischblattLayer.drawClipPolygonOnCanvas_ = function(clip_pixel, pixelRatio, canvas){
		canvas.beginPath();
		canvas.moveTo(clip_pixel[0][0] * pixelRatio,clip_pixel[0][1] * pixelRatio);
		for (var i = 1; i < clip_pixel.length; i++){
			canvas.lineTo(clip_pixel[i][0] * pixelRatio,clip_pixel[i][1] * pixelRatio);
		};
		canvas.closePath();
	};
	
	// borderPolygon definded than add clip behavior
	if (goog.isDef(clipPolygon_)){
		
		messtischblattLayer.on('precompose', function(event){
			if (goog.DEBUG)
				console.log('Precompose event triggered. ');
			
				var canvas = event.context;
				var clip_pixel = this.getPixelForClipPolygon_(map);
				canvas.save();
				
				if (goog.DEBUG){
					console.log('------------------------------------------');
					for (var i = 0, ii = clip_pixel.length; i < ii; i++ ){
						console.log(clip_pixel[i]);
					};
					console.log('------------------------------------------');
				};
				
				var pixelRatio = event.frameState['pixelRatio'];
				this.drawClipPolygonOnCanvas_(clip_pixel, pixelRatio, canvas);		
				canvas.clip();
			//};
		}, messtischblattLayer);
		
		messtischblattLayer.on('postcompose', function(event){
			var canvas = event.context;
			canvas.restore();
		});
	};
		
	return messtischblattLayer;
};