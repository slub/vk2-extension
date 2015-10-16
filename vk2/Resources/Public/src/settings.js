goog.provide('vk2.settings');

/**
 * @type {string}
 */
vk2.settings.DISPLAY_SRS = 'EPSG:900913';

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
 * @type {string}
 */
vk2.settings.GEOREFERENCE_PAGE = 'tx_vk2_search[controller]=Static&tx_vk2_search[action]=georefPage';
	
/**
 * @type {string}
 */
vk2.settings.GEOREFERENCE_GETPROCESS = 'tx_vk2_search[controller]=Georeference&tx_vk2_search[action]=getProcess&type=999';

/**
 * @type {string}
 */
vk2.settings.GEOREFERENCE_VALIDATION = 'tx_vk2_search[controller]=Georeference&tx_vk2_search[action]=validateGeorefProcess&type=999';

/**
 * @type {string}
 */
vk2.settings.GEOREFERENCE_HISTORY = 'tx_vk2_search[controller]=Georeference&tx_vk2_search[action]=georeferenceUserHistory&type=999';

/**
 * @type {string}
 */
vk2.settings.GEOREFERENCE_CONFIRM = 'tx_vk2_search[controller]=Georeference&tx_vk2_search[action]=confirmGeorefProcess&type=999';

/**
 * @type {string}
 */
vk2.settings.GEOREFERENCE_INFORMATION = 'tx_vk2_search[controller]=Georeference&tx_vk2_search[action]=georeferenceUserInformation&type=999'
	
/**
 * @type {string}
 */
vk2.settings.GEOREFERNCE_DEFAULT_EXTENT_SRS = 'EPSG:4326';

/**
 * @type {string}
 */
vk2.settings.MAIN_PAGE = 'index.php?id=19'; //'/vkviewer';

/**
 * @type {string}
 */
vk2.settings.MAP_PROFILE_PAGE = 'tx_vk2_search[controller]=Static&tx_vk2_search[action]=profileMap'; //'static/profile-map';

/**
 * @type {string}
 */
vk2.settings.EVALUATION_GETPROCESS = 'tx_vk2_search[controller]=Evaluation&tx_vk2_search[action]=getProcess&type=999'; //'/vkviewer/admin/getprocess';

/**
 * @type {string}
 */
vk2.settings.EVALUATION_SETISVALIDE = 'tx_vk2_search[controller]=Evaluation&tx_vk2_search[action]=setIsValide&type=999'; //'/vkviewer/admin/getprocess';

/**
 * @type {string}
 */
vk2.settings.EVALUATION_SETISINVALIDE = 'tx_vk2_search[controller]=Evaluation&tx_vk2_search[action]=setIsInValide&type=999'; //'/vkviewer/admin/getprocess';

/**
 * @type {string}
 */
vk2.settings.THUMBNAILS_DEFAULT = '#';

/**
 * @type {Array.<string>}
 */
vk2.settings.TMS_URL_SUBDOMAINS = [ '1', '2', '3' ];

/**
 * @type {boolean}
 */
vk2.settings.WITH_SPEAKING_URLS = false;

/**
 * @type {string}
 */
vk2.settings.WMS_DYNAMIC_TEMPLATE = 'http://kartenforum.slub-dresden.de/cgi-bin/dynamic-ows';