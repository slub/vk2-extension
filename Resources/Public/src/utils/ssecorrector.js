/**
 * Created by mendt on 01.03.16.
 */
goog.provide('vk2.utils.SSECorrector');

/**
 * See: https://github.com/geoadmin/mf-geoadmin3/blob/master/src/js/GaCesium.js
 * @constructor
 */
vk2.utils.SSECorrector = function() {
    this.mindist = parseInt('5000', 10);
    this.maxdist = parseInt('10000', 10);
    this.mincamfactor = parseFloat('0.9');
    this.maxcamfactor = parseFloat('1.2');
    // Max height to apply optmization
    this.maxheight = parseInt('0', 10);
    this.allowtilelevels = parseInt('0', 10);
    this.pickglobe = true; //!params['sseNopickglobe'];
    this.pickposition = parseFloat('0.6666');
    this.shouldCut = true; //!!params['sseEnabled'];
    this.noheight = true; //!!params['sseNoheight'];
    this.maxerrorfactor = parseFloat( '0.25');
    this.cameraHeight = undefined;
};

/**
 * Called before the Quadtree will update its tiles.
 * @param {Cesium.FrameState} frameState
 */
vk2.utils.SSECorrector.prototype.newFrameState = function(frameState) {
    this.cameraHeight = frameState.camera.positionCartographic.height;

    if (this.pickglobe && !this.noheight &&
        (!this.maxHeight || this.cameraHeight < this.maxheight)) {
        var scene = frameState.camera._scene;
        var canvas = scene.canvas;
        var pixelHeight = this.pickposition * canvas.clientHeight;
        var pixel = new Cesium.Cartesian2(canvas.clientWidth / 2, pixelHeight);
        this.cameraHeight = undefined;
        var target = olcs.core.pickOnTerrainOrEllipsoid(scene, pixel);
        if (target) {
            var position = frameState.camera.position;
            var distance = Cesium.Cartesian3.distance(position, target);
            this.cameraHeight = Math.max(this.cameraHeight || 0, distance);
        }
    }

    this.min = this.mindist;
    this.max = this.maxdist;
    if (!this.noheight && this.cameraHeight) {
        this.min = Math.min(this.mindist, this.mincamfactor * this.cameraHeight);
        this.max = Math.max(this.maxdist, this.maxcamfactor * this.cameraHeight);
    }

    // 1 = a * min + b
    // maxerrorfactor = a * max + b
    this.a = (1 - this.maxerrorfactor) / (this.min - this.max);
    this.b = 1 - this.a * this.min;
};

/**
 * Called for each processed tile, in order to correct the error.
 * Far tiles will have their error diminished so that they pass earlier
 * the error test.
 * @param {Cesium.FrameState} frameState
 * @param {Cesium.GlobeSurfaceTile} tile
 * @param {number} distance
 * @param {number} original Screen space error before correction
 * @return {number} lower screen space error after correction
 */
vk2.utils.SSECorrector.prototype.correct = function(frameState, tile, distance,
                                          original) {
    if (!this.shouldCut ||
        (this.maxheight && this.cameraHeight &&
        (this.cameraHeight > this.maxheight)) ||
        (this.allowtilelevels && (tile._level <= this.allowtilelevels))) {
        return original;
    }

    if (distance < this.max) {
        if (distance < this.min || this.min === this.max) {
            return original;
        } else {
            var linearFactor = this.a * distance + this.b;
            return linearFactor * original;
        }
    } else {
        return this.maxerrorfactor * original;
    }
};