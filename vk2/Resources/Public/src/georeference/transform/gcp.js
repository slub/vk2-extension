/**
 * Created by mendt on 03.09.15.
 */
goog.provide('vk2.georeference.transform.GCP');

/**
 * Class representing Ground Control Points
 * @param {number} pixelLocationX Pixel (x) location of GCP on a raster
 * @param {number} pixelLocationY Pixel (y) location of GCP on a raster
 * @param {number} geoPositionX X position of GCP in georeference space
 * @param {number} geoPositionY Y position of GCP in georeference space
 * @constructor
 */
vk2.georeference.transform.GCP = function(pixelLocationX, pixelLocationY, geoPositionX, geoPositionY) {

    /**
     * @type {number}
     */
    this.pixelX = pixelLocationX;

    /**
     * @type {number}
     */
    this.pixelY = pixelLocationY;

    /**
     * @type {number}
     */
    this.geoX = geoPositionX;

    /**
     * @type {number}
     */
    this.geoY = geoPositionY;
};
