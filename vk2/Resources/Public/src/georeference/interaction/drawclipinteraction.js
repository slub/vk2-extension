goog.provide('vk2.georeference.interaction.DrawClipInteraction');

goog.require('ol.interaction.Draw');
goog.require('ol.layer.Vector');
goog.require('ol.source.Vector');

goog.require('vk2.utils.Styles');
goog.require('vk2.georeference.interaction.GeoreferenceInteraction')

/**
 * @param {ol.Map} map
 * @param {ol.layer.Vector} featureOverlay
 * @param {ol.source.Vector} featureSource
 * @constructor
 * @extends {vk2.georeference.interaction.GeoreferenceInteraction}
 */
vk2.georeference.interaction.DrawClipInteraction = function(map, featureOverlay, featureSource){
	
	var source = featureOverlay.getSource();
	
	/**
	 * @type {ol.Map}
	 * @private
	 */
	this.map_ = map;
	
	/**
	 * @type {Array.<ol.interaction.Draw>}
	 * @private
	 */
	this.interactions_ = [
		new ol.interaction.Draw({
			'features': source.getFeaturesCollection(),
			'type': 'Polygon',
			'style': vk2.utils.Styles.GEOREFERENCE_CLIP_POLYGON
		}),
		new ol.interaction.Modify({
			  'features': featureOverlay.getSource().getFeaturesCollection(),
			  // the SHIFT key must be pressed to delete vertices, so
			  // that new vertices can be drawn at the same position
			  // of existing vertices
			  'deleteCondition': function(event) {
				  return ol.events.condition.shiftKeyOnly(event) &&
				  	ol.events.condition.singleClick(event);
			  }
		})		
	];
	
	// append listener for preventing the drawing of multiple clip polygons
	this.interactions_[0].on('drawstart', function(event){
		if (goog.DEBUG){
			console.log('Start drawing ...');
		};

		// checks if there exists already a polygon
		if (source.getFeatures().length >= 1)
			this.finishDrawing();
	}, this.interactions_[0]);
	
	source.getFeaturesCollection().on('add', function(event){
		if (source.getFeatures().length > 1){
			if (goog.DEBUG)
				console.log('There is already a clip polygon ...');
			source.getFeatures().splice(1,1);
		};		
	}, featureOverlay);
	
	goog.base(this);
};
goog.inherits(vk2.georeference.interaction.DrawClipInteraction, vk2.georeference.interaction.GeoreferenceInteraction);

/**
 * @param {Object} event
 * @public
 */
vk2.georeference.interaction.DrawClipInteraction.prototype.activate = function(event){
	if (goog.DEBUG)
		console.log('Activate draw clip interaction.');
	
	this.activate_();
	this.status_ = true;
};

/**
 * @private
 */
vk2.georeference.interaction.DrawClipInteraction.prototype.activate_ = function(){
	if (goog.DEBUG)
		console.log('Activate draw clipinteraction.');
	
	for (var i = 0; i < this.interactions_.length; i++){
		this.map_.addInteraction(this.interactions_[i]);
	};
};

/**
 * @param {Object} event
 * @public
 */
vk2.georeference.interaction.DrawClipInteraction.prototype.deactivate = function(event){
	if (goog.DEBUG)
		console.log('Deactivate draw clip interaction.');
	
	this.deactivate_();
	this.status_ = false;
};

/**
 * @private
 */
vk2.georeference.interaction.DrawClipInteraction.prototype.deactivate_ = function(){
	if (goog.DEBUG)
		console.log('Deactivate draw clip interaction.');
	
	// remove the interactions
	for (var i = 0; i < this.interactions_.length; i++){
		this.map_.removeInteraction(this.interactions_[i]);
	};
	
};