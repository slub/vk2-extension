goog.provide('vk2.control.ImageManipulation');

goog.require('vk2.utils');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.object');

/**
 * @constructor
 * @extends {ol.control.Control}
 * @param {Object=} opt_options Control options.
 */
vk2.control.ImageManipulation = function(opt_options) {

  var options = opt_options || {};

  var anchor = document.createElement('a');
  anchor.href = '#image-manipulation';
  anchor.innerHTML = 'I';
  anchor.className = 'ol-has-tooltip';

  var tooltip = goog.dom.createDom('span', {'role':'tooltip','innerHTML':vk2.utils.getMsg('openImagemanipulation')})
  goog.dom.appendChild(anchor, tooltip);
  
  var openToolbox = goog.bind(function(event) {
	  event.preventDefault();
	  
	  if (goog.dom.classes.has(event.target, 'active')){
		  goog.dom.classes.remove(event.target, 'active');
		  this.close_(event.currentTarget.parentElement);
		  return;
	  } 
	  
	  goog.dom.classes.add(event.target, 'active');
	  this.open_(event.currentTarget.parentElement);
  }, this);

  
  goog.events.listen(anchor, 'click', openToolbox, undefined, this);
  goog.events.listen(anchor, 'touchstart', openToolbox, undefined, this);

  var element = document.createElement('div');
  element.className = 'image-manipulation ol-unselectable';
  element.appendChild(anchor);

  ol.control.Control.call(this, {
    element: element,
    target: options.target
  });
  
  

};
ol.inherits(vk2.control.ImageManipulation, ol.control.Control);

/**
 * @param {Element} parentEl
 * @private
 */
vk2.control.ImageManipulation.prototype.close_ = function(parentEl){
	if (goog.DEBUG)
		console.log('Close toolbox ...');
	
	$(this.sliderContainer_).fadeOut().removeClass('open');
};

/**
 * @private
 * @return {ol.layer.Base}
 */
vk2.control.ImageManipulation.prototype.getBaseLayer_ = function(){
	return this.getMap().getLayers().getArray()[0];
};

/**
 * @param {Element} parentEl
 * @private
 */
vk2.control.ImageManipulation.prototype.initializeSliderContainer_ = function(parentEl){

	/**
	 * Values of the different image filters.
	 * @type {{brightness: number, contrast: number, hue: number, saturation: number}}
	 */
	var filters = {
			'brightness': 1,
			'contrast' : 1,
			'hue': 0,
			'saturation': 0
		},
		defaultFilters = goog.object.clone(filters)

	/**
	 * Has the value of an image filter has been changed
	 * @type {boolean}
	 */
	var filterUpdate = false;

	/**
	 * @param {string} className
	 * @param {string} orientation
	 * @param {string} key
	 * @param {ol.layer.Layer} layer
	 * @param {number=} opt_baseValues
	 * @param {string=} opt_title
	 * @return {Element}
	 * @private
	 */
	var createSlider_ = function(className, orientation, key, layer, opt_baseValues, opt_title){
		var title = goog.isDef('opt_title') ? opt_title : '',
			sliderEl = goog.dom.createDom('div', {'class': 'slider ' + className, 'title':title, 'data-type': key}),
			baseMin = goog.isDef(opt_baseValues) ? opt_baseValues[1] : 0,
			baseMax = goog.isDef(opt_baseValues) ? opt_baseValues[2] : 100,
			steps = goog.isDef(opt_baseValues) ? opt_baseValues[3] : 1,
			minValueEl,
			maxValueEl,
			startValue = goog.isDef(opt_baseValues) ? opt_baseValues[0] : 100;

		/**
		 * Updates the filters and the position attached to a slider
		 * @param {Object} event
		 * @param {Object} ui
		 */
		var update = function(event, ui) {
			var value = ui['value'];

			// check if postcompose listener ist registered and if not add the listener
			if (!postcomposeRegistered) {
				// registered the postcompose event listener
				layer.on('postcompose', postcomposeHandler);
				postcomposeRegistered = true;
			};

			// update position of the tooltip
			if (orientation == 'vertical'){
				var style_top = 100 - ((value - baseMin) / (baseMax - baseMin) * 100);
				valueEl.style.top = style_top + '%';
				valueEl.innerHTML = value + '%';
				return;
			};

			var style_left = (value - baseMin) / (baseMax - baseMin) * 100;
			valueEl.style.left = style_left + '%';
			valueEl.innerHTML = value;

			// update filters.
			filters[key] = value;
			filterUpdate = true;
			layer.changed();

		};

		$(sliderEl).slider({
			'min': baseMin,
			'max': baseMax,
			'value': startValue,
			'animate': 'slow',
			'orientation': orientation,
			'step': steps,
			'slide': update,
			'change': update
		});

		// append tooltips
		var innerHtml = goog.isDef(opt_baseValues) ? opt_baseValues[0] : '';
		var valueEl = goog.dom.createDom('div',{
			'class':'tooltip value '+className,
			'innerHTML': innerHtml
		});
		goog.dom.appendChild(sliderEl, valueEl);

		return sliderEl;
	};

	/**
	 * Events adds the filters to the layer.
	 * @param {Object} event
	 */
	var postcomposeHandler = function(event){
			var webglContext = event['glContext'],
				canvas = webglContext.getCanvas();

			if (webglContext !== undefined && webglContext !== null) {
				var gl = webglContext.getGL();

				if (filterUpdate) {
					glif.reset();

					for (var filter in filters) {
						glif.addFilter(filter, filters[filter]);
					};

					filterUpdate = false;
				}

				glif.apply(gl, canvas);

				// for showing openlayers that the program changed
				// if missing openlayers will produce errors because it
				// expected other shaders in the webgl program
				webglContext.useProgram(undefined);
			}
		},
		/**
		 * Parameters is true if the handler is registered
		 * @type {boolean}
		 */
		postcomposeRegistered = false;

	// create the container
	var sliderContainer = goog.dom.createDom('div', {'class':'slider-container', 'style':'display:none;'});
	goog.dom.appendChild(parentEl, sliderContainer);

	// create contrast slider
	var contrastSlider = createSlider_('slider-contrast', 'horizontal', 'contrast', this.getBaseLayer_(),
		[1, 0, 2, 0.01], vk2.utils.getMsg('contrast'));
	goog.dom.appendChild(sliderContainer, contrastSlider);

	// create saturation slider
	var saturationSlider = createSlider_('slider-saturation', 'horizontal', 'saturation', this.getBaseLayer_(),
		[0, -1, 1, 0.01], vk2.utils.getMsg('saturation'));
	goog.dom.appendChild(sliderContainer, saturationSlider);

	// create brightness slider
	var brightnessSlider = createSlider_('slider-brightness', 'horizontal', 'brightness', this.getBaseLayer_(),
		[1, 0, 2, 0.1], vk2.utils.getMsg('brightness'));
	goog.dom.appendChild(sliderContainer, brightnessSlider);

	// create hue slider
	var hueSlider = createSlider_('slider-hue', 'horizontal','hue', this.getBaseLayer_(),
		[0, -180, 180, 5], vk2.utils.getMsg('hue'));
	goog.dom.appendChild(sliderContainer, hueSlider);

	//
	// Append button for reset filters
	//
	var resetBtn = goog.dom.createDom('button', {
		'class':'reset-btn',
		'title': vk2.utils.getMsg('reset'),
		'innerHTML': 'Reset'
	});
	goog.dom.appendChild(sliderContainer, resetBtn);

	goog.events.listen(resetBtn, 'click', function(e){
		// remove postcomposeHandler
		this.getBaseLayer_().un('postcompose', postcomposeHandler);
		postcomposeRegistered = false;
		
		// reset the sliders
		var sliderEls = goog.dom.getElementsByClass('slider', sliderContainer);
		for (var i = 0; i < sliderEls.length; i++){
			var sliderEl = sliderEls[i],
				type = sliderEl.getAttribute('data-type'),
				value = defaultFilters[type];

			$(sliderEl).slider('value', value);
		};
	}, undefined, this);
		
	return sliderContainer;
};

/**
 * @param {Element} parentEl
 * @private
 */
vk2.control.ImageManipulation.prototype.open_ = function(parentEl){
	if (goog.DEBUG)
		console.log('Open toolbox ...');
	
	if (goog.isDef(this.sliderContainer_)) {
		$(this.sliderContainer_).fadeIn().addClass('open');
	} else {
		this.sliderContainer_ = this.initializeSliderContainer_(parentEl);
		
		// fade in
		$(this.sliderContainer_).fadeIn().addClass('open');
	};
};

