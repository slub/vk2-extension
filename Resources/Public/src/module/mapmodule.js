/**
 * Created by mendt on 18.02.16.
 */
goog.provide('vk2.module.MapModule');

goog.require('vk2.layer.HistoricMap');
goog.require('vk2.module.MapSearchModuleEventType');

/**
 * @param {string} mapElId
 * @param {Object|undefined} opt_mapViewSettings
 * @param {boolean|undefined} opt_terrain Parameter defines if 3d should be active
 * @constructor
 * @export
 */
vk2.module.MapModule = function(mapElId, opt_mapViewSettings, opt_terrain){

    var mapViewSettings = opt_mapViewSettings !== undefined ? opt_mapViewSettings : {
        projection: 'EPSG:3857',
        center: [1528150, 6630500],
        zoom: 2
    };

    /**
     * @type {boolean}
     * @private
     */
    this.mode3d_ = false;

    /**
     * @type {ol.Map}
     * @private
     */
    this.map_ =  new ol.Map({
        'layers': [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
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
            // does not work
            //new vk2.control.LayerSpy({
            //    'spyLayer':new ol.layer.Tile({
            //        attribution: undefined,
            //        source: new ol.source.OSM()
            //    })
            //}),
            new vk2.control.RotateNorth(),
            new ol.control.ScaleLine(),
            //new vk2.control.Permalink(), @does not work because the permalink has to consider the 3d page as well as 3d view parameters
            new vk2.control.MousePositionOnOff()
        ],
        'view': new ol.View(mapViewSettings)
    });

    if (goog.isDef(opt_terrain) || opt_terrain === true) {

        this.mode3d_ = true;

        // initialize the globe
        var ol3d = new olcs.OLCesium({
            'map': this.map_,
            'createSynchronizers': function(map, scene) {
                return [
                    new olcs.RasterSynchronizer(map, scene),
                    new olcs.VectorSynchronizer(map, scene)
                ];
            }
        });
        ol3d.enableAutoRenderLoop();

        // initialize a terrain map
        var scene = ol3d.getCesiumScene(),
            globe = scene.globe,
            camera = ol3d.getCamera();

        if (goog.DEBUG) {
            window['ol3d'] = ol3d;
        }

        // some test code
        var tileCacheSize = '100',
            maximumScreenSpaceError = '2',
            fogEnabled = true,
            fogDensity = '0.0001',
            fogSseFactor = '25',
            terrainLevels = [8, 11, 14, 16, 17];

        window.minimumRetrievingLevel = 8;
        window.terrainAvailableLevels = terrainLevels;
        window.imageryAvailableLevels = undefined;

        globe.baseColor = Cesium.Color.WHITE;
        globe.tileCacheSize = tileCacheSize;
        globe.maximumScreenSpaceError = maximumScreenSpaceError;
        scene.backgroundColor = Cesium.Color.WHITE;
        scene.globe.depthTestAgainstTerrain = true;
        scene.screenSpaceCameraController.maximumZoomDistance = 500000;
        scene.terrainProvider = new Cesium.CesiumTerrainProvider({
            url : '//assets.agi.com/stk-terrain/world'
        });
        //scene.postRender.addEventListener(limitCamera, scene);
        scene.fog.enabled = fogEnabled;
        scene.fog.density = fogDensity;
        scene.fog.screenSpaceErrorFactor = fogSseFactor;

        //
        // load library and set camera
        //
        ol3d.setEnabled(true);
        camera.setTilt(0);
        camera.setAltitude(62000.04206483738);
        camera.setPosition([1529336.123970922, 6593632.4348105695]);
        camera.setDistance(64238.24055398101);
    };

    // append click behavior to map object
    //this.map_.on('singleclick', function(event){
    //    if (goog.DEBUG)
    //        console.log('Pixel: '+event.pixel);
    //
    //    var features = [];
    //    this.forEachFeatureAtPixel(event['pixel'], function(feature){
    //        features.push(feature);
    //    });
    //
    //    if (goog.DEBUG)
    //        console.log(features);
    //
    //    vk2.controller.MapController.showMapProfile(features);
    //});
};

/**
 * Checks if the layer collection already contains a layer with that id.
 *
 * @param {string} id
 * @param {ol.Collection} layers
 * @return {boolean}
 */
vk2.module.MapModule.containsLayerWithId = function(id, layers) {
    var array = layers.getArray();
    for (var i = 0; i < array.length; i++) {
        if (array[i] instanceof vk2.layer.HistoricMap) {
            if (array[i].getId() == id) {
                return true;
            }
        }
    }
    return false;
};

/**
 * @param {ol.Feature} feature
 * @return {vk2.layer.HistoricMap}
 * @private
 */
vk2.module.MapModule.prototype.createHistoricMapForFeature_ = function(feature){
    return new vk2.layer.HistoricMap({
        'time':feature.get('time'),
        'thumbnail': feature.get('thumb'),
        'title': feature.get('title'),
        'objectid': feature.get('id'),
        'id': feature.getId(),
        'dataid':feature.get('dataid'),
        'tms': feature.get('tms'),
        'clip': feature.getGeometry().clone()
    }, this.map_, this.mode3d_);
};

/**
 * @returns {ol.Map}
 * @export
 */
vk2.module.MapModule.prototype.getMap = function(){
    return this.map_;
};

/**
 * @param {vk2.module.SpatialTemporalSearchModule} spatialTemporalSearchModule
 */
vk2.module.MapModule.prototype.registerSpatialTemporalSearch = function(spatialTemporalSearchModule){

    /**
     * @type {vk2.module.MapSearchModule}
     * @private
     */
    this.mapsearch_ = spatialTemporalSearchModule.getMapSearchModule();

    // register event listener
    goog.events.listen(this.mapsearch_, vk2.module.MapSearchModuleEventType.CLICK_RECORD, function(event){
        var feature = event.target['feature'];

        // checks if a layer for this features is already present
        if (vk2.module.MapModule.containsLayerWithId(feature.getId(), this.map_.getLayers())) {
            if (goog.DEBUG) {
                console.log('Map is already displayed');
            }

            return;
        }


        // add layer to map
        if (feature.get("georeference")){
            if (goog.DEBUG){
                console.log('Add map to layer management.')
            };

            // display the map on top of the the base map
            this.map_.addLayer(this.createHistoricMapForFeature_(feature));
        };

    }, undefined, this);
};