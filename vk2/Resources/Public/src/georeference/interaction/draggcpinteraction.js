goog.provide('vk2.georeference.interaction.DragGcpInteraction');
goog.provide('vk2.georeference.interaction.DragGcpInteractionEventType');

goog.require('goog.events.Event');
goog.require('goog.ui.IdGenerator');

goog.require('ol.interaction.Interaction');
goog.require('ol.interaction.Modify');
goog.require('ol.interaction.Select');

goog.require('vk2.utils.Styles');
goog.require('vk2.georeference.interaction.GeoreferenceInteraction')

/**
 * @enum
 */
vk2.georeference.interaction.DragGcpInteractionEventType = {
	SELECTED: 'selected',
	DESELECTED: 'deselected'
};


/**
 * @param {ol.layer.Vector} unrefGcpLayer
 * @param {ol.layer.Vector} georefGcpLayer
 * @param {ol.Map} unrefMap
 * @param {ol.Map} georefMap
 * @constructor
 * @extends {vk2.georeference.interaction.GeoreferenceInteraction}
 */
vk2.georeference.interaction.DragGcpInteraction = function(unrefGcpLayer, georefGcpLayer, unrefMap, georefMap){
		
	/**
	 * @type {Array.<ol.Map>}
	 * @private
	 */
	this.maps_ = [unrefMap, georefMap];
	
	var hoverStyle = vk2.utils.Styles.getGeoreferencePointHover();
	/**
	 * @type {Array.<ol.interaction.Select>}
	 * @private 
	 */
	var selects_ = [
		new ol.interaction.Select({
			'style': function(feature, resolution) {
				return [hoverStyle];
			},
			'layer': unrefGcpLayer,
			'condition': function(event) {
				if (event['type'] === 'click'){
					return true;
				};
				return false;
			}
		}),
		new ol.interaction.Select({
			'style': function(feature, resolution) {
				return [hoverStyle];
			},
			'layer': georefGcpLayer,
			'condition': function(event) {
				if (event['type'] === 'click'){
					return true;
				};
				return false;
			}
		})
	];
	
	/**
	 * @type {Array.<Array.<ol.interaction.Interaction>>}
	 * @private
	 */
	this.interactions_ = [
		[
		 selects_[0],       
		 new ol.interaction.Modify({
			 'features': selects_[0].getFeatures(),
			 'pixelTolerance': 10,
			 'style': function(feature, resolution) {
				 return [hoverStyle];
			 }
		 })
		],
		[
		 selects_[1],       
		 new ol.interaction.Modify({
			 'features': selects_[1].getFeatures(),
			 'pixelTolerance': 10,
			 'style': function(feature, resolution) {
				 return [hoverStyle];
			 }
		 })
		]
	];

	// append event behavior if features are selected
	this.loadEventBehavior_(selects_, [unrefGcpLayer, georefGcpLayer]);
	
	goog.base(this);
};
goog.inherits(vk2.georeference.interaction.DragGcpInteraction, vk2.georeference.interaction.GeoreferenceInteraction);

/**
 * @param {Object} event
 * @public
 */
vk2.georeference.interaction.DragGcpInteraction.prototype.activate = function(event){
	if (goog.DEBUG)
		console.log('Activate drag gcp interaction.');
	
	this.activate_();
	this.status_ = true;
};

/**
 * @private
 */
vk2.georeference.interaction.DragGcpInteraction.prototype.activate_ = function(){
	if (goog.DEBUG)
		console.log('Activate drag gcp interaction.');
	
	for (var i = 0; i < this.maps_.length; i++){
		for (var j = 0; j < this.interactions_[i].length; j++){
			this.maps_[i].addInteraction(this.interactions_[i][j]);
		}
	};
};

/**
 * @param {Object} event
 * @public
 */
vk2.georeference.interaction.DragGcpInteraction.prototype.deactivate = function(event){
	if (goog.DEBUG)
		console.log('Deactivate drag gcp interaction.');
	
	this.deactivate_();
	this.status_ = false;
};

/**
 * @private
 */
vk2.georeference.interaction.DragGcpInteraction.prototype.deactivate_ = function(){
	if (goog.DEBUG)
		console.log('Deactivate drag gcp interaction.');
	
	// remove the interactions
	for (var i = 0; i < this.maps_.length; i++){
		for (var j = 0; j < this.interactions_[i].length; j++){
			this.maps_[i].removeInteraction(this.interactions_[i][j]);
		}
	};
};

/**
 * This event handling is necessary for update the style of the selected features equivalently
 * @param {Array.<ol.interaction.Select>} selects
 * @param {Array.<ol.layer.Vector>} layers
 * @private
 */
vk2.georeference.interaction.DragGcpInteraction.prototype.loadEventBehavior_ = function(selects, layers){	
	
	/**
	 * This functions adds/remove the equivalent gcp feature to the respective selection collection.
	 * @param {ol.Feature} feature
	 * @param {string} type
	 */
	var toggleEquivalentFeature = function(feature, type){
		// add equivalent feature to selection
		if (!goog.isDefAndNotNull(feature.getId()))
			return undefined;
		
		var unrefFt = layers[0].getSource().getFeatureById(feature.getId());
		var georefFt = layers[0].getSource().getFeatureById(feature.getId());
		
		if (type === 'add'){
			selects[0].getFeatures().addFeature(unrefFt);
			selects[1].getFeatures().addFeature(georefFt);
		} else if (type === 'remove'){
			selects[0].getFeatures().clear();
			selects[1].getFeatures().clear();
		};			
	};
	
	var dispatchSelectEvent = goog.bind(function(event){
		toggleEquivalentFeature(event['element'], 'add');
		
		// dispatch event
		if (goog.isDefAndNotNull(event['element'].getId()))
			this.dispatchEvent(new goog.events.Event(vk2.georeference.interaction.DragGcpInteractionEventType.SELECTED, {
				'feature': event['element'],
				'srcStyle': vk2.utils.Styles.getGeoreferencePointStyle(event['element'].getId().replace(':','')),
				'targetStyle': vk2.utils.Styles.getGeoreferencePointHover(event['element'].getId().replace(':',''))
			}));
	}, this);
	
	var dispatchDeselectEvent = goog.bind(function(event){
		toggleEquivalentFeature(event['element'], 'remove');
		
		// dispatch event
		if (goog.isDefAndNotNull(event['element'].getId()))
			this.dispatchEvent(new goog.events.Event(vk2.georeference.interaction.DragGcpInteractionEventType.DESELECTED, {
				'feature': event['element'],
				'srcStyle': vk2.utils.Styles.getGeoreferencePointHover(event['element'].getId().replace(':','')),
				'targetStyle': vk2.utils.Styles.getGeoreferencePointStyle(event['element'].getId().replace(':',''))
			}));
	}, this);
	
	var unrefSelectFeatures = selects[0].getFeatures();
	unrefSelectFeatures.on('add', dispatchSelectEvent);
	unrefSelectFeatures.on('remove', dispatchDeselectEvent);
	
	var georefSelectFeatures = selects[1].getFeatures();
	georefSelectFeatures.on('add', dispatchSelectEvent);
	georefSelectFeatures.on('remove', dispatchDeselectEvent);
};

/**
 * Extending the ol.Collection
 * @param {ol.Feature}
 * @private
 */
ol.Collection.prototype.addFeature = function(feature){
	// first check if the feature is in the collection
	var isFeatureInCollection = false;	
	this.forEach(function(ft){
		if (ft === feature)
			isFeatureInCollection = true;
	});
	
	// if the feature is not in the collection add it
	if (!isFeatureInCollection)
		this.push(feature);	
};

/**
 * Extending the ol.Collection
 * @param {ol.Feature}
 * @private
 */
ol.Collection.prototype.removeFeature = function(feature){
	// first check if the feature is in the collection
	var isFeatureInCollection = false;	
	this.forEach(function(ft){
		if (ft === feature)
			isFeatureInCollection = true;
	});
	
	// if the feature is not in the collection add it
	if (isFeatureInCollection)
		this.remove(feature);	
};