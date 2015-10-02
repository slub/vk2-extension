goog.provide('vk2.layer.HistoricMap');

goog.require('goog.events');
goog.require('goog.object');
goog.require('vk2.settings');
goog.require('vk2.utils');
goog.require('vk2.utils.Styles');

/**
 * Right now there are problems with the compiled version when using a ol3 compiled version. In that case
 * renamed variables of this object overwrite properties/function of the inherited object (ol.layer.Group). A
 * solution is to prevent renaming properties of this object through using the "expose" annotation.
 * 
 * @param {vk2x.layer.HistoricMapOptions} settings
 * @param {ol.Map} map
 * @constructor
 * @extends {ol.layer.Group}
 */
vk2.layer.HistoricMap = function(settings, map){
		
	/**
	 * @type {string}
	 * @private
	 * @expose
	 */
	this.id_ = goog.isDef(settings.id) ? settings.id : undefined;
	
	/**
	 * @type {number}
	 * @private
	 * @expose
	 */
	this.time_ = settings.time;
	
	/**
	 * @type {string}
	 * @private
	 * @expose
	 */
	this.title_ = goog.isDef(settings.title) ? settings.title : undefined; 
	
	/**
	 * @type {string}
	 * @private
	 * @expose
	 */
	this.thumb_ = goog.isDef(settings.thumbnail) ? settings.thumbnail : vk2.settings.DEFAULT_IMAGE_PATH + 'layer_default.png';
	
	/**
	 * @type {boolean}
	 * @private
	 * @expose
	 */
	this.allowManage_ = true;
	
	// feature
	var feature = new ol.Feature(new ol.geom.Polygon([settings.border]));
	feature.setProperties({
		'objectid':this.id_,
		'time':this.time_,
		'title':this.title_
	});
	feature.setId(this.id_);
	
	var urls = [];
	for (var i = 0; i < vk2.settings.TMS_URL.length; i++){
		urls.push(vk2.settings.TMS_URL[i] + settings.dataid + '/{z}/{x}/{-y}.png');
	};
	
	var rasterLayer = new ol.layer.Tile({
			'extent': settings.extent,
			'source': new ol.source.XYZ({
				'maxZoom': 15,
				'urls': urls//vk2.settings.TMS_URL + settings['dataid'] + '/{z}/{x}/{-y}.png'
			})
		}),
		borderLayer = new ol.layer.Vector({
			source: new ol.source.Vector({
				'features':[ feature ]
			}),
			'style': function(feature, resolution) {
				return [vk2.utils.Styles.MESSTISCHBLATT_BORDER_STYLE];
			}
		});
	settings['layers'] = [rasterLayer, borderLayer];
	
	ol.layer.Group.call(this, settings);
};
ol.inherits(vk2.layer.HistoricMap, ol.layer.Group);

/**
 * @return {number}
 */
vk2.layer.HistoricMap.prototype.getTime = function(){
	return this.time_;
};

/**
 * @return {boolean}
 */
vk2.layer.HistoricMap.prototype.getDisplayInLayerManagement = function(){
	return this.allowManage_;
};

/**
 * @return {string}
 */
vk2.layer.HistoricMap.prototype.getTitle = function(){
	return this.title_;
};

/**
 * @return {string}
 */
vk2.layer.HistoricMap.prototype.getThumbnail = function(){
	return this.thumb_;
};

/**
 * @return {string}
 */
vk2.layer.HistoricMap.prototype.getId = function(){
	return this.id_;
};

/**
 * @return {Object}
 */
//vk2.layer.HistoricMap.prototype.getMetadata = function(){
//	return this._metadata;
//};