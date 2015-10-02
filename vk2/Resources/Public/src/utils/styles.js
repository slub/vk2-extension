goog.provide('vk2.utils.Styles');

//goog.require('ol.style');

/**
 * @type {Object}
 */
vk2.utils.Styles.MAP_SEARCH_FEATURE = new ol.style.Style({
    'stroke': new ol.style.Stroke({
    	'color': 'rgba(0, 0, 255, 1.0)',
    	'width': 2
    })
});

/**
 * @type {Object} 
 */
vk2.utils.Styles.MAP_SEARCH_HOVER_FEATURE = new ol.style.Style({
	'stroke': new ol.style.Stroke({
		'color': '#f00',
        'width': 1
    }),
    'fill': new ol.style.Fill({
        'color': 'rgba(255,0,0,0.1)'
    })
});

/**
 * @type {Object}
 */
vk2.utils.Styles.MESSTISCHBLATT_BORDER_STYLE = new ol.style.Style({
	'stroke': new ol.style.Stroke({
		'color': '#000000',
		'width': 2
	})
});

/**
 * @type {Object}
 */
vk2.utils.Styles.GEOREFERENCE_CLIP_POLYGON = new ol.style.Style({
	fill: new ol.style.Fill({
		color: 'rgba(255, 255, 255, 0.2)'
	}),
	stroke: new ol.style.Stroke({
		color: '#ffcc33',
		width: 2
	}),
	image: new ol.style.Circle({
		radius: 7,
		fill: new ol.style.Fill({
			color: '#ffcc33'
	    })
	})
});

/**
 * @type {Object}
 */
vk2.utils.Styles.GEOREFERENCE_POINT = new ol.style.Style({
	'image': new ol.style.Circle({
		'radius': 7,
		'fill': new ol.style.Fill({
			'color': 'rgba(255, 255, 255, 0.6)'
		}),
		'stroke': new ol.style.Stroke({
			'color': '#319FD3',
			'width': 1.5
		})
	}),
	'text': new ol.style.Text({
	    textAlign: 'start',
	    textBaseline: 'bottom',
		font: '12px Calibri,sans-serif',
		text: 'Test',
	    fill: new ol.style.Fill({color: '#aa3300'}),
	    stroke: new ol.style.Stroke({color: '#ffffff', width: 3}),
	    offsetX: 10,
	    offsetY: -5
	})
});

/**
 * @param {string=} opt_text
 * @return {ol.style.Style}
 */
vk2.utils.Styles.getGeoreferencePointStyle = function(opt_text){
	var text = goog.isDef(opt_text) ? opt_text : undefined;
	return new ol.style.Style({
		'image': new ol.style.Circle({
			'radius': 7,
			'fill': new ol.style.Fill({
				'color': 'rgba(255, 255, 255, 0.6)'
			}),
			'stroke': new ol.style.Stroke({
				'color': '#319FD3',
				'width': 1.5
			})
		}),
		'text': new ol.style.Text({
		    textAlign: 'start',
		    textBaseline: 'bottom',
			font: '12px Calibri,sans-serif',
			'text': text,
		    fill: new ol.style.Fill({color: '#aa3300'}),
		    stroke: new ol.style.Stroke({color: '#ffffff', width: 3}),
		    offsetX: 10,
		    offsetY: -5
		})
	});
};

/**
 * @type {Object}
 */
vk2.utils.Styles.GEOREFERENCE_POINT_PENDING = new ol.style.Style({
	'image': new ol.style.Circle({
		'radius': 7,
		'fill': new ol.style.Fill({
			'color': 'rgba(255, 255, 255, 0.6)'
		}),
		'stroke': new ol.style.Stroke({
			'color': '#29A329',
			'width': 1.5
		})
	})
});

/**
 * @type {Object}
 */
vk2.utils.Styles.GEOREFERENCE_POINT_HOVER = new ol.style.Style({
	'image': new ol.style.Circle({
		'radius': 7,
	    'fill': new ol.style.Fill({
	    	'color': 'rgba(255,0,0,0.1)'
	    }),
	    'stroke': new ol.style.Stroke({
	    	'color': '#f00',
	    	'width': 1
	    })
	}),
	'zIndex': 100000
});

/**
 * @param {string=} opt_text
 * @return {ol.style.Style}
 */
vk2.utils.Styles.getGeoreferencePointHover = function(opt_text){
	var text = goog.isDef(opt_text) ? opt_text : undefined;
	return new ol.style.Style({
		'image': new ol.style.Circle({
			'radius': 11,
		    'fill': new ol.style.Fill({
		    	'color': 'rgba(255,0,0,0.1)'
		    }),
		    'stroke': new ol.style.Stroke({
		    	'color': '#f00',
		    	'width': 2
		    })
		}),
		'zIndex': 100000,
		'text': new ol.style.Text({
		    textAlign: 'start',
		    textBaseline: 'bottom',
			font: '12px Calibri,sans-serif',
			'text': text,
		    fill: new ol.style.Fill({color: '#aa3300'}),
		    stroke: new ol.style.Stroke({color: '#ffffff', width: 3}),
		    offsetX: 10,
		    offsetY: -5
		})
	});
};