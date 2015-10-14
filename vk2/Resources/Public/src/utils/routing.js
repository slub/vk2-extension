goog.provide('vk2.utils.routing');

goog.require('goog.Uri');
goog.require('vk2.settings');

/**
 * Removes unnecessary "/" tokens on the path
 */
vk2.utils.routing.clearPath = function(string) {
	var elems = string.split('/');
	var str = "/";
	for (var i = 0; i < elems.length; i++) {
		if (elems[i] !== "")
			str += elems[i] + "/";
	};
	return str;
};

/**
 * @param {string} key
 * @return {string}
 */
vk2.utils.routing.getGeoreferenceAdminProcessRoute = function(query_string) {
	var uri = new goog.Uri(window.location.href);
	if (!vk2.settings.WITH_SPEAKING_URLS)
		return uri.getPath() + '?' + vk2.settings.EVALUATION_GETPROCESS + '&' + query_string;
	return vk2.settings.EVALUATION_GETPROCESS + '&' + query_string;
};

/**
 * @param {string} key
 * @return {string}
 */
vk2.utils.routing.getGeoreferenceAdminSetIsValideRoute = function(query_string) {
	var uri = new goog.Uri(window.location.href);
	if (!vk2.settings.WITH_SPEAKING_URLS)
		return uri.getPath() + '?' + vk2.settings.EVALUATION_SETISVALIDE + '&' + query_string;
	return vk2.settings.EVALUATION_SETISVALIDE + '&' + query_string;
};

/**
 * @param {string} key
 * @return {string}
 */
vk2.utils.routing.getGeoreferenceAdminSetIsInValideRoute = function(query_string) {
	var uri = new goog.Uri(window.location.href);
	if (!vk2.settings.WITH_SPEAKING_URLS)
		return uri.getPath() + '?' + vk2.settings.EVALUATION_SETISINVALIDE + '&' + query_string;
	return vk2.settings.EVALUATION_SETISINVALIDE + '&' + query_string;
};

/**
 * @return {string}
 */
vk2.utils.routing.getGeoreferenceUserHistory = function() {
	var uri = new goog.Uri(window.location.href);
	if (!vk2.settings.WITH_SPEAKING_URLS)
		return uri.getPath() + '?' + vk2.settings.GEOREFERENCE_HISTORY;
	return vk2.settings.GEOREFERENCE_HISTORY;
};

/**
 * @return {string}
 */
vk2.utils.routing.getGeoreferenceInformation = function() {
	var uri = new goog.Uri(window.location.href);
	if (!vk2.settings.WITH_SPEAKING_URLS)
		return uri.getPath() + '?' + vk2.settings.GEOREFERENCE_INFORMATION;
	return vk2.settings.GEOREFERENCE_INFORMATION;
};

/**
 * @param {string} query_string
 * @return {string}
 */
vk2.utils.routing.getGeorefGetProcessRoute = function(query_string) {
	var uri = new goog.Uri(window.location.href);
	if (!vk2.settings.WITH_SPEAKING_URLS)
		return uri.getPath() + '?' + vk2.settings.GEOREFERENCE_GETPROCESS + '&' + query_string;
	return vk2.settings.GEOREFERENCE_GETPROCESS + '&' + query_string;
};

/**
 * @param {string} query_string
 * @return {string}
 */
vk2.utils.routing.getGeorefValidationRoute = function(query_string) {
	var uri = new goog.Uri(window.location.href);
	if (!vk2.settings.WITH_SPEAKING_URLS)
		return uri.getPath() + '?' + vk2.settings.GEOREFERENCE_VALIDATION + '&' + query_string;
	return vk2.settings.GEOREFERENCE_VALIDATION + '&' + query_string;
};

/**
 * @param {string} query_string
 * @return {string}
 */
vk2.utils.routing.getGeorefConfirmationRoute = function(query_string) {
	var uri = new goog.Uri(window.location.href);
	if (!vk2.settings.WITH_SPEAKING_URLS)
		return uri.getPath() + '?' + vk2.settings.GEOREFERENCE_CONFIRM + '&' + query_string;
	return vk2.settings.GEOREFERENCE_CONFIRM + '&' + query_string;
};

/**
 * @param {string|undefined} opt_objectid
 * @param {string|undefined} opt_params
 * @return {string}
 */
vk2.utils.routing.getGeorefPageRoute = function(opt_objectid, opt_params) {
	var params = opt_objectid !== undefined ? '&objectid=' + opt_objectid : 
			opt_params !== undefined ? '&' + opt_params :  '';
	var uri = new goog.Uri(window.location.href);
	if (!vk2.settings.WITH_SPEAKING_URLS)
		return uri.getPath() + '?' + vk2.settings.GEOREFERENCE_PAGE + params;
	return vk2.utils.routing.clearPath(uri.getPath() + '/' + vk2.settings.GEOREFERENCE_PAGE) + '?' + params;
};

/**
 * @param {string} key
 * @return {string}
 */
vk2.utils.routing.getMapProfileRoute = function(key) {
	var uri = new goog.Uri(window.location.href);
	if (!vk2.settings.WITH_SPEAKING_URLS)
		return uri.getPath() + '?' + vk2.settings.MAP_PROFILE_PAGE + '&objectid=' + key;
	return vk2.utils.routing.clearPath(uri.getPath() + '/' + vk2.settings.MAP_PROFILE_PAGE) + '?objectid=' + key;
};

/**
 * @param {string} key
 * @return {string}
 */
vk2.utils.routing.getMainPageRoute = function(key) {
	var uri = new goog.Uri(window.location.href);
	if (!vk2.settings.WITH_SPEAKING_URLS)
		return uri.getPath() + '?' + vk2.settings.MAIN_PAGE;
	return vk2.utils.routing.clearPath(uri.getPath() + '/' + vk2.settings.MAIN_PAGE);
};



