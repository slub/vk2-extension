goog.provide('vk2.georeference.transform.AffineSource');

goog.require('vk2.georeference.transform.Affine');
goog.require('vk2.georeference.transform.GCP');

/**
 * @constructor
 * @extends {ol.source.Tile}
 */
vk2.georeference.transform.AffineSource = function(opt_options){
	
	var options = goog.isDef(opt_options) ? opt_options : {};

	  var size = options.size;
	  var tierSizeCalculation = goog.isDef(options.tierSizeCalculation) ?
	      options.tierSizeCalculation :
	      ol.source.ZoomifyTierSizeCalculation.DEFAULT;

	  var imageWidth = size[0];
	  var imageHeight = size[1];
	  var tierSizeInTiles = [];
	  var tileSize = ol.DEFAULT_TILE_SIZE;

	  switch (tierSizeCalculation) {
	    case ol.source.ZoomifyTierSizeCalculation.DEFAULT:
	      while (imageWidth > tileSize || imageHeight > tileSize) {
	        tierSizeInTiles.push([
	          Math.ceil(imageWidth / tileSize),
	          Math.ceil(imageHeight / tileSize)
	        ]);
	        tileSize += tileSize;
	      }
	      break;
	    case ol.source.ZoomifyTierSizeCalculation.TRUNCATED:
	      var width = imageWidth;
	      var height = imageHeight;
	      while (width > tileSize || height > tileSize) {
	        tierSizeInTiles.push([
	          Math.ceil(width / tileSize),
	          Math.ceil(height / tileSize)
	        ]);
	        width >>= 1;
	        height >>= 1;
	      }
	      break;
	    default:
	      goog.asserts.fail();
	      break;
	  }

	  tierSizeInTiles.push([1, 1]);
	  tierSizeInTiles.reverse();

	  var resolutions = [1];
	  var tileCountUpToTier = [0];
	  var i, ii;
	  for (i = 1, ii = tierSizeInTiles.length; i < ii; i++) {
	    resolutions.push(1 << i);
	    tileCountUpToTier.push(
	        tierSizeInTiles[i - 1][0] * tierSizeInTiles[i - 1][1] +
	        tileCountUpToTier[i - 1]
	    );
	  }
	  resolutions.reverse();

	  var extent = [0, -size[1], size[0], 0];
	  var tileGrid = new ol.tilegrid.TileGrid({
	    extent: extent,
	    origin: ol.extent.getTopLeft(extent),
	    resolutions: resolutions
	  });

	  var url = options.url;

	  var zoomify = new ol.source.Zoomify({
		  'url': url,
		  'size': [width, height],
		  'crossOrigin': '*'
	});
	  
	  /**
	   * @this {ol.source.TileImage}
	   * @param {ol.TileCoord} tileCoord Tile Coordinate.
	   * @param {number} pixelRatio Pixel ratio.
	   * @param {ol.proj.Projection} projection Projection.
	   * @return {string|undefined} Tile URL.
	   */
	  function tileUrlFunction(tileCoord, pixelRatio, projection) {
		  console.log(zoomify)
	    	debugger;

	    if (goog.isNull(tileCoord)) {
	      return undefined;
	    } else {
	      var tileCoordZ = tileCoord[0];
	      var tileCoordX = tileCoord[1];
	      var tileCoordY = -tileCoord[2] - 1;
	      var tileIndex =
	          tileCoordX +
	          tileCoordY * tierSizeInTiles[tileCoordZ][0] +
	          tileCountUpToTier[tileCoordZ];
	      var tileGroup = (tileIndex / ol.DEFAULT_TILE_SIZE) | 0;
	      return url + 'TileGroup' + tileGroup + '/' +
	          tileCoordZ + '-' + tileCoordX + '-' + tileCoordY + '.jpg';
	    }
	  }
	  
		var gcps = [
	            new vk2.georeference.transform.GCP(7701,7146,8.1666669845581,48.79999923706),
	            new vk2.georeference.transform.GCP(7695,742,8.1666669845581,48.900001525879),
	            new vk2.georeference.transform.GCP(696,722,7.9999995231628,48.900001525879),
	            new vk2.georeference.transform.GCP(694,7127,7.9999995231628,48.79999923706)
	        ];
		
		var affineTransformation = vk2.georeference.transform.Affine.geoTransfromFromGCPs(gcps),
		inverseAffineTransformation = vk2.georeference.transform.Affine.inverseGeoTransformation(affineTransformation);
			
		var coordinate1 = vk2.georeference.transform.Affine.transformCoordinate([0, size[1]], affineTransformation);
		var coordinate2 = vk2.georeference.transform.Affine.transformCoordinate([size[0], 0], affineTransformation);
		var testExtent = ol.proj.transformExtent(coordinate1.concat(coordinate2), 'EPSG:4314', 'EPSG:3857');
		console.log(testExtent);
		
	  goog.base(this, {
	    attributions: options.attributions,
	    crossOrigin: options.crossOrigin,
	    logo: options.logo,
	    tileClass: ol.source.ZoomifyTile_,
	    tileGrid: new ol.tilegrid.TileGrid({ 
	    	extent: testExtent, 
	    	resolutions: [ 76.43702828517625, 38.21851414258813, 19.109257071294063 ]
	    }),
	    tileUrlFunction: tileUrlFunction
	  });

	  var height = 8966,
		width = 8329,
		proj = new ol.proj.Projection({
			'code': 'ZOOMIFY',
			'units': 'pixels',
			'extent': [0, 0, width, height]
		}),
		view = new ol.View({
		    'projection': proj,
		    'center': [width / 2, - height / 2],
			'zoom': 1,
			'maxZoom': 9
	    }),
		layer = new ol.layer.Tile({
			source: new ol.source.Zoomify({
				  'url': url,
				  'size': [width, height],
				  'crossOrigin': '*'
			})
		});
};
goog.inherits(vk2.georeference.transform.AffineSource, ol.source.TileImage);