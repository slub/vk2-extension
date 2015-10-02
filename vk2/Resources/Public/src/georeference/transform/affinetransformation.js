/**
 * Created by mendt on 03.09.15.
 */
goog.provide('vk2.georeference.transform.Affine');

/**
 * The affine transform consists of six coefficients which mal pixel/line coordinates into georeferenced space using
 * the following relations ship
 *
 *      Xgeo = GT(0) + Xpixel*GT(1) + Yline*GT(2)
 *      Ygeo = GT(3) + Xpixel*GT(4) + Yline*GT(5)
 *
 * In case of north up images, the GT(2) and GT(4) coefficients are zero, and the GT(1) is pixel width, and GT(5) is
 * pixel height. The (GT(0), GT(3)) position is the top left corner of the top left pixel of the raster.
 *
 * Note that the pixel/line coordinates in the above are from (0.0,0.0) at the top left corner of the top left
 * pixel to (width_in_pixels,height_in_pixels) at the bottom right corner of the bottom right pixel.
 * The pixel/line location of the center of the top left pixel would therefore be (0.5,0.5).
 *
 * @typedef {Array.<number>}
 */
vk2.georeference.transform.Affine;

/**
 * Partly port of the GDALGCPsToGeoTransform function from the gdal-library.
 *
 * @param {Array.<vk2.georeference.transform.GCP>} gcps
 * @returns {vk2.georeference.transform.Affine|undefined}
 */
vk2.georeference.transform.Affine.geoTransfromFromGCPs = function(gcps){

    // affine transformation array
    var geoTransform = [null, null, null, null, null, null];

    // in case of not enough GCPs return undefined
    if (gcps.length < 2)
        return;

    // in case of 2 GCPs do a special calculation
    if (gcps.length == 2 ) {
        // @TODO
    };

    /**
     * Special case of 4 corner coordinates of a non-rotated image.
     * The points must be in TL-TR-BR-BL order for now.
     * This case helps avoid some imprecision in the general calcuations.
     * @TODO
     */

    /**
     * In the general case, do at least squares error approximation by
     * solving the equation Sum[(A - B * x + C*y - Lon)^2] = minimum
     */
    var sum_x = 0,
        sum_y = 0,
        sum_xy = 0,
        sum_xx = 0,
        sum_yy = 0,
        sum_lon = 0,
        sum_lonx = 0,
        sum_lony = 0,
        sum_lat = 0,
        sum_latx = 0,
        sum_laty = 0,
        divisor;

    for (i = 0; i < gcps.length; i++) {
        sum_x += gcps[i].pixelX;
        sum_y += gcps[i].pixelY;
        sum_xy += gcps[i].pixelX * gcps[i].pixelY;
        sum_xx += gcps[i].pixelX * gcps[i].pixelX;
        sum_yy += gcps[i].pixelY * gcps[i].pixelY;
        sum_lon += gcps[i].geoX;
        sum_lonx += gcps[i].geoX * gcps[i].pixelX;
        sum_lony += gcps[i].geoX * gcps[i].pixelY;
        sum_lat += gcps[i].geoY;
        sum_latx += gcps[i].geoY * gcps[i].pixelX;
        sum_laty += gcps[i].geoY * gcps[i].pixelY;
    };

    divisor = gcps.length * (sum_xx * sum_yy - sum_xy * sum_xy)
        + 2 * sum_x * sum_y * sum_xy - sum_y * sum_y * sum_xx
        - sum_x * sum_x * sum_yy;

    // If the divisor is zero, there is no valid solution
    if (divisor == 0)
        return;

    // compute top/left origincat
    geoTransform[0] = (sum_lon * (sum_xx * sum_yy - sum_xy * sum_xy)
        + sum_lonx * (sum_y * sum_xy - sum_x *  sum_yy)
        + sum_lony * (sum_x * sum_xy - sum_y * sum_xx))
        / divisor;

    geoTransform[3] = (sum_lat * (sum_xx * sum_yy - sum_xy * sum_xy)
        + sum_latx * (sum_y * sum_xy - sum_x *  sum_yy)
        + sum_laty * (sum_x * sum_xy - sum_y * sum_xx))
        / divisor;

    // compute x related coefficients
    geoTransform[1] = (sum_lon * (sum_y * sum_xy - sum_x * sum_yy)
        + sum_lonx * (gcps.length * sum_yy - sum_y * sum_y)
        + sum_lony * (sum_x * sum_y - sum_xy * gcps.length))
        / divisor;

    geoTransform[2] = (sum_lon * (sum_x * sum_xy - sum_y * sum_xx)
        + sum_lonx * (sum_x * sum_y - gcps.length * sum_xy)
        + sum_lony * (gcps.length * sum_xx - sum_x * sum_x))
        / divisor;

    // compute Y related coefficients
    geoTransform[4] = (sum_lat * (sum_y * sum_xy - sum_x * sum_yy)
        + sum_latx * (gcps.length * sum_yy - sum_y * sum_y)
        + sum_laty * (sum_x * sum_y - sum_xy * gcps.length))
        / divisor;

    geoTransform[5] = (sum_lat * (sum_x * sum_xy - sum_y * sum_xx)
        + sum_latx * (sum_x * sum_y - gcps.length * sum_xy)
        + sum_laty * (gcps.length * sum_xx - sum_x * sum_x))
        / divisor;

    return geoTransform;
};

/**
 * Invert Geotransform
 * 
 * This function will invert a standard 3x2 set of GeoTransform coefficients. 
 * This converts the equation from being pixel to geo to being geo to pixel.
 *
 * @param {vk2.georeference.transform.Affine} geoTransform
 * @returns {vk2.georeference.transform.Affine|undefined}
 */
vk2.georeference.transform.Affine.inverseGeoTransformation = function(geoTransform){
	
	var det, 
		inv_det,
		invGeoTransform = [null, null, null, null, null, null]
	
	// assuming a 3rd row that is [1 0 0]
	// compute determinate
	det = geoTransform[1] * geoTransform[5] - geoTransform[2] * geoTransform[4];
	
	if (Math.abs(det) < 0.000000000000001)
		return;
	
	inv_det = 1 / det;
	
	// compute adjoint and devide by determinate
	invGeoTransform[1] = geoTransform[5] * inv_det;
	invGeoTransform[4] = - geoTransform[4] * inv_det;

	invGeoTransform[2] = - geoTransform[2] * inv_det;
	invGeoTransform[5] = geoTransform[1] * inv_det;
	
	invGeoTransform[0] = ( geoTransform[2] * geoTransform[3] - geoTransform[0] * geoTransform[5]) * inv_det;
	invGeoTransform[3] = ( - geoTransform[1] * geoTransform[3] + geoTransform[0] * geoTransform[4]) * inv_det;
	
	return invGeoTransform;
};

/**
 * @param {Array.<number>} coordinate
 * @param {vk2.georeference.transform.Affine} geoTransform
 * @return {Array.<number>}
 */
vk2.georeference.transform.Affine.transformCoordinate = function(coordinate, geoTransform) {
	var x = geoTransform[0] + coordinate[0] * geoTransform[1] + coordinate[1] * geoTransform[2],
		y = geoTransform[3] + coordinate[0] * geoTransform[4] + coordinate[1] * geoTransform[5];
	return [x, y];
};