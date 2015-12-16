goog.provide('vk2.control.DeactivateMapCollection');

goog.require('goog.dom');
goog.require('goog.events');
goog.require('vk2.utils');

/**
 * @param {Element} parentEl
 * @param {ol.Map} map
 * @constructor
 */
vk2.control.DeactivateMapCollection = function(parentEl, map){

	//
	// Create container DOM nodes
	//
	var containerEl_ = goog.dom.createDom('div', {'class':'deactivate-map-col-control'});
	goog.dom.appendChild(parentEl, containerEl_);

	//
	// Create control button
	//
	var controlAnchor_ = goog.dom.createDom('a', {
		'href':'#',
		'innerHTML': 'D'
	});
	goog.dom.appendChild(containerEl_, controlAnchor_);

	//
	// Couple behavior with control button
	//
	var deactivateMapCollection_ = function(event) {
		// get all historic map layers and set visibility to false
		var layers = map.getHistoricMapLayer();

		for (var i = 0; i < layers.length; i++) {
			layers[i]['setVisible'](false);
		}
	};

	goog.events.listen(controlAnchor_, 'click', deactivateMapCollection_);
	goog.events.listen(controlAnchor_, 'touchstart', deactivateMapCollection_);

};