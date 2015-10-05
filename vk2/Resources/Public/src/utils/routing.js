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
 * @param {string} key
 * @return {string}
 */
vk2.utils.routing.getGeorefPageRoute = function(key) {
	var uri = new goog.Uri(window.location.href);
	if (!vk2.settings.WITH_SPEAKING_URLS)
		return uri.getPath() + '?' + vk2.settings.GEOREFERENCE_PAGE + '&objectid=' + key;
	return vk2.utils.routing.clearPath(uri.getPath() + '/' + vk2.settings.GEOREFERENCE_PAGE) + '?objectid=' + key;
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


