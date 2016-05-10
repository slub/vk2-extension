/**
 * Created by mendt on 18.02.16.
 */
goog.provide('vk2.module.MapModule');

goog.require('vk2.control.FlipViewMode');
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
 * Extend the ol.Map object. Zooms to a given point. This function is also used by the permalink tool
 *
 * @param {ol.Coordinate} center
 * @param {number} zoom
 * @param {number=} opt_tilt
 * @param {number=} opt_altitude
 * @param {number=} opt_distance
 * @param {number=} opt_rotation
 */
ol.Map.prototype.zoomTo = function(center, zoom) {

    if (!vk2.utils.is3DMode()) {
        this.getView().setCenter(center);
        this.getView().setZoom(zoom);
        return;
    } else {
        var ol3d = vk2.utils.getOL3D(),
            camera = ol3d.getCesiumScene().camera,
            lonlat = ol.proj.transform(center, vk2.settings.MAPVIEW_PARAMS['projection'], 'EPSG:4326'),
            defaultHeight = 100000.0,
            position = Cesium.Cartesian3.fromDegrees(lonlat[0], lonlat[1], defaultHeight);

        camera.flyTo({
            'destination': position
        });
    };
};

/**
 * @returns {Array.<vk2.layer.HistoricMap>}
 */
ol.Map.prototype.getHistoricMapLayer = function(){
    var layers = this.getLayers().getArray();
    var historicMapLayers = [];
    for (var i = 0; i < layers.length; i++){
        if (vk2.utils.is3DMode()) {
            if (layers[i] instanceof vk2.layer.HistoricMap3D){
                historicMapLayers.push(layers[i]);
            };
        } else {
            if (layers[i] instanceof vk2.layer.HistoricMap){
                historicMapLayers.push(layers[i]);
            };
        }
    };
    return historicMapLayers;
};

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

    var controls = [
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

    // append layerspy only in case 3d mode is not active
    if (!goog.isDef(opt_terrain) || opt_terrain === false) {
        controls.push(new vk2.control.LayerSpy({
            'spyLayer':new ol.layer.Tile({
                attribution: undefined,
                source: new ol.source.OSM()
            })
        }));
    };

    // create attribution
    var attribution = [
        new ol.Attribution({
            html: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        })
    ];

    if (goog.isDef(opt_terrain) && opt_terrain === true) {
        attribution.push(new ol.Attribution({
            html: '<a href="https://cesiumjs.org/data-and-assets/terrain/stk-world-terrain.html">© Analytical Graphics, Inc., © CGIAR-CSI, ' +
                'Produced using Copernicus data and information funded by the European Union - EU-DEM layers, ' +
                ' © Commonwealth of Australia (Geoscience Australia) 2012</a>'
        }));
    };

    /**
     * @type {ol.Map}
     * @private
     */
    this.map_ =  new ol.Map({
        'layers': [
            new ol.layer.Tile({
                source: new ol.source.OSM({
                    'attributions': attribution
                })
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

    if (vk2.settings.MODE_3D === true && goog.isDef(opt_terrain) && opt_terrain === true) {

        //// initialize the globe
        var ol3d = new olcs.OLCesium({
            'map': this.map_,
            'sceneOptions': {
                'terrainExaggeration' : 2.0
            }
        });
        ol3d.enableAutoRenderLoop();

        // initialize a terrain map
        var scene = ol3d.getCesiumScene(),
            globe = scene.globe,
            camera = scene.camera;

        // set this global because it is used by other application code
        window['ol3d'] = ol3d;


        // some test code
        var tileCacheSize = '100',
            maximumScreenSpaceError = '2',
            fogEnabled = true,
            fogDensity = '0.000125',
            fogSseFactor = 1;

        window.minimumRetrievingLevel = 8;
        window.imageryAvailableLevels = undefined;

        globe.baseColor = Cesium.Color.WHITE;
        globe.tileCacheSize = tileCacheSize;
        globe.maximumScreenSpaceError = maximumScreenSpaceError;
        scene.backgroundColor = Cesium.Color.WHITE;
        scene.globe.depthTestAgainstTerrain = true;
        scene.screenSpaceCameraController.maximumZoomDistance = 4000000;
        scene.terrainProvider = new Cesium.CesiumTerrainProvider({
            url : '//assets.agi.com/stk-terrain/world',
            requestVertexNormals : true
        });
        scene.fog.enabled = fogEnabled;
        scene.fog.density = fogDensity;
        scene.fog.screenSpaceErrorFactor = fogSseFactor;

        // together with the "requestVertexNormals" flag (see terrainProvider) it enables the displaying
        // of shadows on the map,
        //scene.globe.enableLighting = true;
        //scene.globe.lightingFadeInDistance = 1000000000;
        //scene.globe.lightingFadeOutDistance = 10000000;

        // append / update controls if application is initialize in 3d mode
        var uri = new goog.Uri(window.location.href),
            params = uri.getQueryData(),
            flipControl = new vk2.control.FlipViewMode();

        if (params.containsKey('pos'))
            flipControl.switchControlMode('3d');

        this.map_.addControl(flipControl);
    };

    // append click behavior to map object
    this.map_.on('singleclick', function(event){
        if (goog.DEBUG)
            console.log('Pixel: '+event.pixel);

        var features = [];
        if (vk2.utils.is3DMode()) {
            // special behavior for mode 3d
            var clickCoordinate = this.map_.getCoordinateFromPixel(event.pixel);
            features = this.historicMapClickLayer_.getSource().getFeaturesAtCoordinate(clickCoordinate);
        } else {
            this.getMap().forEachFeatureAtPixel(event['pixel'], function(feature){
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
    return vk2.settings.MODE_3D && window['ol3d'] !== undefined ?
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

            if (vk2.utils.is3DMode()) {
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
    this.historicMapClickLayer_ = vk2.utils.is3DMode() ? new ol.layer.Vector({
            'source': new ol.source.Vector(),
            'style': function(feature, resolution) {
                return [new ol.style.Style({
                    fill: new ol.style.Fill({
                        color: 'rgba(255, 255, 255, 0.2)'
                    })
                })];
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

            if (vk2.settings.MODE_3D && window['ol3d'] !== undefined) {
                // add vector geometry for the given historic map to a special layer for simulate 3d mode experience
                var feature = vk2.layer.HistoricMap.createClipFeature(feature.getGeometry().clone(), feature.getId(),
                    feature.get('time'), feature.get('title'))
                this.historicMapClickLayer_.getSource().addFeature(feature);
            };
        };

    }, undefined, this);

    // register gazetteer tool
    goog.events.listen(spatialTemporalSearchModule.getGazetteerSearchTool(), 'jumpto', function(event){
        var lonlat = event.target['lonlat'],
            center = ol.proj.transform([parseFloat(lonlat[0]),parseFloat(lonlat[1])],
                event.target['srs'], vk2.settings.MAPVIEW_PARAMS['projection']);
        this.map_.zoomTo(center, 6);
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