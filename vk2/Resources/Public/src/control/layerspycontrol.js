goog.provide('vk2.control.LayerSpy');

goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.events.KeyHandler');
goog.require('goog.events.KeyCodes');
goog.require('goog.dom');
goog.require('goog.dom.classes')
goog.require('vk2.utils');

/**
 * @constructor
 * @extends {ol.control.Control}
 * @param {Object=} opt_options Control options.
 */
vk2.control.LayerSpy = function(opt_options) {

	  var options = opt_options || {};

	  var spyLayer = goog.isDef(options['spyLayer']) ? options['spyLayer'] : new ol.layer.Tile({
			'attribution': undefined,
			'source': new ol.source.OSM({'attribution':undefined})
	  });
	  
	  var activate_button = goog.dom.createDom('a',{'class':'ol-has-tooltip', 'href':'#layerspy','innerHTML':'L'}),
	  	control_container = goog.dom.createDom('div',{'class':'ol-layerspy ol-unselectable'});
	  goog.dom.appendChild(control_container, activate_button);
	  
	  var tooltip = goog.dom.createDom('span', {'role':'tooltip','innerHTML':vk2.utils.getMsg('layerspy')})
	  goog.dom.appendChild(activate_button, tooltip);
	  
	  var clipRadius_ = goog.isDef(options.radius)? parseInt(options.radius, 0) : 75,
		  // get the pixel position with every move
		  mousePosition = null;
		
	  var eventHandlers = {
		  postcompose: function(event) {
			  // before rendering the layer, do some clipping
			  var ctx = event['context'];
			  ctx.restore();
		  },
		  precompose: function(event) {
			  // before rendering the layer, do some clipping
			  var ctx = event['context'];
			  var pixelRatio = event['frameState']['pixelRatio'];
			  ctx.save();
			  ctx.beginPath();
			  
			  if (mousePosition) {
			    // only show a circle around the mouse
			    ctx.arc(mousePosition[0] * pixelRatio, mousePosition[1] * pixelRatio, clipRadius_ * pixelRatio, 0, 2 * Math.PI);
			    ctx.lineWidth = 5 * pixelRatio;
			    ctx.strokeStyle = 'rgba(0,0,0,0.5)';
			    ctx.stroke();
			  }
			  ctx.clip();
		  },
		  mousemove: function(event) {
				mousePosition = this.getMap().getEventPixel(event.event_);
				this.getMap().render();
		  },
		  mouseout: function() {
			  mousePosition = null;
			  this.getMap().render();
		  },
		  keyhandler: function(event){
			  if (goog.DEBUG)
				  console.log('KeyDown event with code '+event.keyCode);
			  
			  // for handling this events in webkit
			  if (event.keyCode === goog.events.KeyCodes.Y) {
				  clipRadius_ = Math.min(clipRadius_ + 5, 150);
				  this.getMap().render();
			  } else if (event.keyCode === goog.events.KeyCodes.X) {
				  clipRadius_ = Math.max(clipRadius_ - 5, 25);
				  this.getMap().render();
			  }
		  },
		  addlayer: function(event){	
			  var topLayer = event.target.getArray()[event.target.getLength() - 1];
			  if (topLayer !== spyLayer){
				  this.getMap().removeLayer(spyLayer);
				  this.getMap().addLayer(spyLayer);
			  };
		  }			
	  };
	  
	  /**
	   * @type {goog.events.KeyHandler}
	   * @private
	   * @expose
	   */
	  this._keyHandler = null;
	
	  goog.events.listen(activate_button, goog.events.EventType.CLICK, goog.bind(function(event){
		  event.preventDefault();
		  if (goog.dom.classes.has(activate_button, 'active')){
			  this.deactivate_(activate_button, spyLayer, eventHandlers);
		  } else {			
			  this.activate_(activate_button, spyLayer, eventHandlers);
		  }
	  }, this));
	  
	  ol.control.Control.call(this, {
	    'element': control_container,
	    'target': options.target
	  });
};
ol.inherits(vk2.control.LayerSpy, ol.control.Control);

/**
 * @private
 */
vk2.control.LayerSpy.prototype._buildHtmlElement = function(){	

};

/**
 * @param {Element} activate_button
 * @param {ol.layer.Layer} spyLayer
 * @param {Object} eventHandlers
 * @private
 */
vk2.control.LayerSpy.prototype.activate_ = function(activate_button, spyLayer, eventHandlers){
	// activate critical layerspy behavior
	this.getMap().addLayer(spyLayer);
	spyLayer.on('precompose', eventHandlers.precompose, this);
	spyLayer.on('postcompose', eventHandlers.postcompose, this);
	goog.events.listen(this.getMap().getViewport(),'mousemove', eventHandlers.mousemove, undefined, this);
	goog.events.listen(this.getMap().getViewport(),'mouseout', eventHandlers.mouseout, undefined, this);
	goog.dom.classes.add(activate_button, 'active');
	
	// activate advanced layerspy behavior
	this._keyHandler = this._keyHandler || new goog.events.KeyHandler(document);
	goog.events.listen(this._keyHandler, goog.events.KeyHandler.EventType.KEY, eventHandlers.keyhandler, undefined, this);
	
	// add event listener for holding the spylayer on top of all other layers
	this.getMap().getLayers().on('add', eventHandlers.addlayer, this);
};

/**
 * @param {Element} activate_button
 * @param {ol.layer.Layer} spyLayer
 * @param {Object} eventHandlers
 * @private
 */
vk2.control.LayerSpy.prototype.deactivate_ = function(activate_button, spyLayer, eventHandlers){
	// deactivate critical layerspy behavior
	spyLayer.un('precompose', eventHandlers.precompose, this);
	spyLayer.un('postcompose', eventHandlers.postcompose, this);
	goog.events.unlisten(this.getMap().getViewport(),'mousemove', eventHandlers.mousemove, undefined, this);
	goog.events.unlisten(this.getMap().getViewport(),'mouseout', eventHandlers.mouseout, undefined, this);
	this.getMap().removeLayer(spyLayer);
	goog.dom.classes.remove(activate_button, 'active');
	
	// deactivate advanced layerspy behavior
	goog.events.unlisten(this._keyHandler, goog.events.KeyHandler.EventType.KEY, eventHandlers.keyhandler, undefined, this);
	this.getMap().getLayers().un('add', eventHandlers.addlayer, this);
};