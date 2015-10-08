goog.provide('vk2.settings');

/**
 * @type {string}
 */
vk2.settings.DISPLAY_SRS = 'EPSG:900913';

/**
 * @type {string}
 */
vk2.settings.DEFAULT_IMAGE_PATH = '/typo3conf/ext/vk2/Resources/Public/images/';

/**
 * @type {string}
 */
vk2.settings.ELASTICSEARCH = 'http://194.95.145.46/spatialdocuments';

/**
 * @type {boolean}
 */
vk2.settings.GEOREFERENCE_ACTIVE = true;

/**
 * @type {string}
 */
vk2.settings.ELASTICSEARCH_SRS = 'EPSG:4326';

/**
 * @type {Object}
 */
vk2.settings.WFS_PARSER_CONFIG = {
		'mtbows':{
			'featureNS': 'http://mapserver.gis.umn.edu/mapserver',
			'featureType': 'Historische_Messtischblaetter_WFS'
		},
		'mtb_grid_puzzle':{
			'featureNS': 'http://mapserver.gis.umn.edu/mapserver',
			'featureType': 'mtb_grid_puzzle',
			'featurePrefix': 'ms'
		}
};

/**
 * @type {string}
 */
vk2.settings.WFS_GEOSERVER_URL = 'http://kartenforum.slub-dresden.de/geoserver/production/ows'; //'http://194.95.145.43:8080/geoserver/testing/ows'; 

/**
 * @type {string}
 */
vk2.settings.WFS_GEOSERVER_SEARCHLAYER = 'vkdb:vmapsearch'; //'vkdb-test:mapsearch-test'// 

/**
 * @type {string}
 */
vk2.settings.WFS_GRID_URL = 'http://kartenforum.slub-dresden.de/cgi-bin/georef-grid'; //'http://kartenforum.slub-dresden.de/cgi-bin/mtb_grid';

/**
 * @type {string}
 */
vk2.settings.PROXY_URL = '/vkviewer/proxy/?url=';

/**
 * @type {string}
 */
vk2.settings.GEONETWORK = 'http://kartenforum.slub-dresden.de/geonetwork/srv/eng/search#|';

/**
 * @type {string}
 */
vk2.settings.CSW_URL = 'http://kartenforum.slub-dresden.de/geonetwork/srv/eng/csw';

/**
 * @type {string}
 */
vk2.settings.GEOREFERENCECHOOSER_WMS = 'http://kartenforum.slub-dresden.de/cgi-bin/georef-grid'; //'http://kartenforum.slub-dresden.de/cgi-bin/mtb_grid';

/**
 * @type {string}
 */
vk2.settings.GEOREFERENCECHOOSER_LAYERID = 'mtb_grid_puzzle';

/**
 * @type {string}
 */
vk2.settings.GEOREFERENCE_PAGE = 'id=19&tx_vk2_search[controller]=Static&tx_vk2_search[action]=georefPage';
	
/**
 * @type {string}
 */
vk2.settings.GEOREFERENCE_GETPROCESS = 'id=19&tx_vk2_search[controller]=Georeference&tx_vk2_search[action]=getProcess&type=999';

/**
 * @type {string}
 */
vk2.settings.GEOREFERENCE_VALIDATION = 'id=19&tx_vk2_search[controller]=Georeference&tx_vk2_search[action]=validateGeorefProcess&type=999';

/**
 * @type {string}
 */
vk2.settings.GEOREFERENCE_HISTORY = 'id=19&tx_vk2_search[controller]=Georeference&tx_vk2_search[action]=georeferenceUserHistory&type=999';

/**
 * @type {string}
 */
vk2.settings.GEOREFERENCE_CONFIRM = 'id=19&tx_vk2_search[controller]=Georeference&tx_vk2_search[action]=confirmGeorefProcess&type=999';

/**
 * @type {string}
 */
vk2.settings.GEOREFERNCE_DEFAULT_EXTENT_SRS = 'EPSG:4326';

/**
 * @type {string}
 */
vk2.settings.MAIN_PAGE = 'index.php?id=19'; //'/vkviewer';

/**
 * @type {Object}
 */
vk2.settings.MAIN_MAP_SETTINGS = {
	projection: 'EPSG:900913',
    minResolution: 1.194328566789627,
    maxResolution: 2445.9849047851562,
    extent: [640161.933,5958026.134,3585834.8011505,7847377.4901306],
    center: [1528150, 6630500],
    zoom: 2
};

/**
 * @type {Object}
 */
vk2.settings.MAIN_MAP_GEOREFERENCER_VIEW = {
	'center': [1510110.8611321,6808180.3878471],
	'zoom':0
};

/**
 * @type {string}
 */
vk2.settings.MAP_PROFILE_PAGE = 'id=19&tx_vk2_search[controller]=Static&tx_vk2_search[action]=profileMap'; //'static/profile-map';

/**
 * @type {string}
 */
vk2.settings.EVALUATION_GETPROCESS = 'id=19&tx_vk2_search[controller]=Evaluation&tx_vk2_search[action]=getProcess&type=999'; //'/vkviewer/admin/getprocess';

/**
 * @type {string}
 */
vk2.settings.EVALUATION_SETISVALIDE = 'id=19&tx_vk2_search[controller]=Evaluation&tx_vk2_search[action]=setIsValide&type=999'; //'/vkviewer/admin/getprocess';

/**
 * @type {string}
 */
vk2.settings.EVALUATION_SETISINVALIDE = 'id=19&tx_vk2_search[controller]=Evaluation&tx_vk2_search[action]=setIsInValide&type=999'; //'/vkviewer/admin/getprocess';

/**
 * @type {string}
 */
vk2.settings.EVALUATION_API = '/vkviewer/admin';

/**
 * @type {string}
 */
vk2.settings.THUMBNAILS_DEFAULT = '#';

/**
 * @type {Array.<string>}
 */
vk2.settings.TMS_URL = [
     'http://vk2-cdn1.slub-dresden.de/tms/', 
     'http://vk2-cdn2.slub-dresden.de/tms/',
     'http://vk2-cdn3.slub-dresden.de/tms/'
]

/**
 * @type {boolean}
 */
vk2.settings.WITH_SPEAKING_URLS = false;

/**
 * @type {string}
 */
vk2.settings.WMS_DYNAMIC_TEMPLATE = 'http://kartenforum.slub-dresden.de/cgi-bin/dynamic-ows';