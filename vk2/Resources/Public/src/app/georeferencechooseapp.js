goog.provide('vk2.app.GeoreferenceChooseApp');

goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
goog.require('vk2.settings');
goog.require('vk2.request.ElasticSearch');
goog.require('vk2.utils');
goog.require('vk2.utils.routing');

/**
 * @param {Object} settings
 * 		target {string} Id of the record container
 * 		targetCount {string} Id of the point container
 * @constructor
 */
vk2.app.GeoreferenceChooseApp = function(settings) {
	
	if (goog.DEBUG) {
		console.log(settings)
	};
	
	var targetEl = goog.dom.getElement(settings['target']),
		targetCountEl = goog.dom.getElement(settings['targetCount']);
	
	this.fetchData_(targetEl, targetCountEl);
};

/**
 * @param {Object} data
 * @param {Element} targetEl
 * @param {Element} targetCountEl
 * @private
 */
vk2.app.GeoreferenceChooseApp.prototype.displayData_ = function(data, targetEl, targetCountEl) {
	
	// update point data
	if (data['hits'] !== undefined && data['hits']['total'] !== undefined) {
		targetCountEl.innerHTML = data['hits']['total'];
	};
		
	if (data['hits'] !== undefined && data['hits']['hits'] !== undefined && data['hits']['hits'].length > 0) {
		// clear target element and append listContainerEl
		targetEl.innerHTML = '';
		
		var listContainerEl = goog.dom.createDom('ul');
		goog.dom.appendChild(targetEl, listContainerEl);
		
		// render map records 
		for (var i = 0, ii = data['hits']['hits'].length; i < ii; i++) {
			goog.dom.appendChild(listContainerEl, 
				this.renderRecord_(data['hits']['hits'][i]));
		}
	}
	
	// in case jquery lazy loading is active
	$('body').scroll(function() {
		$('.lazy-image').lazyload();
	});
	$('.lazy-image').lazyload();
};

/** 
 * Functions fetchs the data from server on load up
 * @param {Element} targetEl
 * @param {Element} targetCountEl
 * @private
 */
vk2.app.GeoreferenceChooseApp.prototype.fetchData_ = function(targetEl, targetCountEl) {
	var xhr = new goog.net.XhrIo();
	
	// add listener to request object
	goog.events.listenOnce(xhr, goog.net.EventType.SUCCESS, function(e){
		var xhr = /** @type {goog.net.XhrIo} */ (e.target),
		 	data = xhr.getResponseJson();
		
		if (goog.DEBUG) {
			console.log(data);
		};
		
		this.displayData_(data, targetEl, targetCountEl);
		xhr.dispose();
	}, false, this);
	
	goog.events.listenOnce(xhr, goog.net.EventType.ERROR, function(e){
		alert('Something went wrong, while trying to fetch data from the server.')
	}, false, this);
	
	// send request
	var url = vk2.settings.ELASTICSEARCH + '/_search?size=2000',
		payload = vk2.request.ElasticSearch.getFeaturesForIdsFilterQuery('georeference', [false]);
	xhr.send(url, 'POST', JSON.stringify(payload));	
};

/**
 * Function creates a map record element for a given map record 
 * @param {Object} record
 * @return {Element}
 */
vk2.app.GeoreferenceChooseApp.prototype.renderRecord_ = function(record) {
	var data = record['_source'],
		id = data['id'],
		maptype = data['maptype'],
		imageUrl = data['thumb'] !== undefined ? data['thumb'] : vk2.settings.THUMBNAILS_DEFAULT,
		georefUrl = id !== undefined ? vk2.utils.routing.getGeorefPageRoute(id) : '#';
		title = data['title'],
		time = data['time'];
	
	return goog.dom.createDom('li', {
		'id': data['id'],
		'innerHTML': '<div class="container record-container"><div class="image">' +
			'<img class="lazy-image" alt="" data-original="' + imageUrl + '"></div><div class="body">' + 
			'<p><strong>' + title + '</strong></p>' +
			'<p>' + vk2.utils.getMsg('georef-choose-time') + ': ' + time + '</p>' +
			'<p>' + vk2.utils.getMsg('georef-choose-maptype') + ': ' + maptype + '</p>' +
			'</div><div class="tools"><a class="btn btn-primary" href="' + georefUrl + '" target="_blank">' +
			vk2.utils.getMsg('georef-choose-goToGeoreference') +'</a></div></div>'
	});
};