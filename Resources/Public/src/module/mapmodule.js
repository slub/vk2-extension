/**
 * Created by mendt on 18.02.16.
 */
goog.provide('vk2.module.MapModule');

goog.require('vk2.control.LayerSpy');
goog.require('vk2.control.MousePositionOnOff');
goog.require('vk2.control.Permalink');
goog.require('vk2.control.RotateNorth');
goog.require('vk2.layer.HistoricMap');
goog.require('vk2.layer.HistoricMap3D');
goog.require('vk2.module.MapSearchModuleEventType');
goog.require('vk2.settings');
goog.require('vk2.utils');
goog.require('vk2.utils.Modal');
goog.require('vk2.utils.routing');

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

    var controls = goog.isDef(opt_terrain) && opt_terrain === true ? [
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
        ] : [
            new ol.control.Attribution({
                collapsible:false,
                collapsed:false
            }),
            new ol.control.Zoom(),
            new ol.control.FullScreen(),
            new vk2.control.RotateNorth(),
            new ol.control.ScaleLine(),
            new vk2.control.Permalink(),
            new vk2.control.MousePositionOnOff()
        ];

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
        'controls': controls,
        'view': new ol.View(mapViewSettings)
    });

    if (goog.isDef(opt_terrain) && opt_terrain === true) {

        // set global 3d mode to true
        vk2.settings.MODE_3D = true;

        // initialize the globe
        var ol3d = new olcs.OLCesium({
            'map': this.map_
        });
        ol3d.enableAutoRenderLoop();

        // initialize a terrain map
        var scene = ol3d.getCesiumScene(),
            globe = scene.globe,
            camera = ol3d.getCamera();

        // set this global because it is used by other application code
        window['ol3d'] = ol3d;

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
        scene.screenSpaceCameraController.maximumZoomDistance = 7500000;
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
        //camera.setTilt(0);
        //camera.setAltitude(62000);
        //camera.setPosition([1529336.123970922, 6593632.4348105695]);
        //camera.setDistance(62000);
        //camera.setTilt(1.185962657604752);
        //camera.setAltitude(1363.9887671697156);
        //camera.setPosition([1584547.2100905594, 6598444.370838029]);
        //camera.setDistance(3150.7839488238337);

        //camera.setTilt(1.18596);
        //camera.setAltitude(1363.9);
        camera.setPosition(mapViewSettings['center']);
        //camera.setDistance(3150.7);

    };

    // append click behavior to map object
    this.map_.on('singleclick', function(event){
        if (goog.DEBUG)
            console.log('Pixel: '+event.pixel);

        var features = [];
        if (vk2.settings.MODE_3D) {
            // special behavior for mode 3d
            var clickCoordinate = this.map_.getCoordinateFromPixel(event.pixel);
            features = this.historicMapClickLayer_.getSource().getFeaturesAtCoordinate(clickCoordinate);
        } else {
            this.forEachFeatureAtPixel(event['pixel'], function(feature){
                features.push(feature);
            });
        }

        if (goog.DEBUG)
            console.log(features);

        vk2.module.MapModule.showMapProfile(features);
    }, this);
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
        if (array[i] instanceof vk2.layer.HistoricMap || array[i] instanceof vk2.layer.HistoricMap3D) {
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
    return vk2.settings.MODE_3D ?
        new vk2.layer.HistoricMap3D({
            'time':feature.get('time'),
            'thumbnail': feature.get('thumb'),
            'title': feature.get('title'),
            'objectid': feature.get('id'),
            'id': feature.getId(),
            'dataid':feature.get('dataid'),
            'tms': feature.get('tms'),
            'clip': feature.getGeometry().clone()
        }, this.map_) :
        new vk2.layer.HistoricMap({
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
 * @returns {ol.Map}
 * @export
 */
vk2.module.MapModule.prototype.getMap = function(){
    return this.map_;
};

/**
 * @param {vk2.tool.Permalink} permalink
 */
vk2.module.MapModule.prototype.registerPermalinkTool = function(permalink){
    goog.events.listen(permalink, vk2.tool.PermalinkEventType.ADDMAP, function(event){
        var feature = event.target['feature'];

        // request associated messtischblaetter for a blattnr
        if (feature.get('georeference') === true) {
            this.map_.addLayer(this.createHistoricMapForFeature_(feature));

            if (vk2.settings.MODE_3D) {
                // add vector geometry for the given historic map to a special layer for simulate 3d mode experience
                var feature = vk2.layer.HistoricMap.createClipFeature(feature.getGeometry().clone(), feature.getId(),
                    feature.get('time'), feature.get('title'))
                this.historicMapClickLayer_.getSource().addFeature(feature);
            };
        }
    }, undefined, this);
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

    //
    // Initialize an historic map click layer which is only used in case of 3d mode
    //

    /**
     * @type {ol.layer.Vector|undefined}
     * @private
     */
    this.historicMapClickLayer_ = vk2.settings.MODE_3D ? new ol.layer.Vector({
            'source': new ol.source.Vector(),
            'style': function(feature, resolution) {
                return [];
            }
        }) : undefined;

    if (this.historicMapClickLayer_ !== undefined) {
        // in case 3d mode is active add altitude value to coordinate
        this.historicMapClickLayer_.set('altitudeMode', 'clampToGround');
        this.historicMapClickLayer_.set('type', 'click');

        // hold the overlay layer on top of the historic map layers
        this.map_.getLayers().on('add', function(event) {
            var topLayer = event.target.getArray()[event.target.getLength() - 1];
            if (topLayer instanceof vk2.layer.HistoricMap || topLayer instanceof vk2.layer.HistoricMap3D) {
                this.map_.removeLayer(this.historicMapClickLayer_);
                this.map_.addLayer(this.historicMapClickLayer_);
            }
        }, this);

        this.map_.addLayer(this.historicMapClickLayer_);
    };

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

            if (vk2.settings.MODE_3D) {
                // add vector geometry for the given historic map to a special layer for simulate 3d mode experience
                var feature = vk2.layer.HistoricMap.createClipFeature(feature.getGeometry().clone(), feature.getId(),
                    feature.get('time'), feature.get('title'))
                this.historicMapClickLayer_.getSource().addFeature(feature);
            };
        };

    }, undefined, this);
};

/**
 * @param {Array.<ol.Feature>} features
 * @static
 */
vk2.module.MapModule.showMapProfile = function(features) {
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
};