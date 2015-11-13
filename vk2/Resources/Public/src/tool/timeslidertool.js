goog.provide('vk2.tool.TimeSlider');

goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventTarget');
goog.require('goog.events.EventType');

/**
 * @param {Element|string} parentEl
 * @param {Array.<number>|undefined} opt_timeInterval
 * @constructor
 * @extends {goog.events.EventTarget}
 */
vk2.tool.TimeSlider = function(parentEl, opt_timeInterval){
	
	/**
	 * @type {Element}
	 * @private
	 */
	this._parentEl = goog.isString(parentEl) ? goog.dom.getElement(parentEl) : parentEl;

	var timeInterval = opt_timeInterval !== undefined ? opt_timeInterval : [1868, 1945];

	// load html content
	this._loadHtmlContent(this._parentEl);
	this._appendSliderBehavior(this._sliderEl, timeInterval);
	
	goog.base(this);
};
goog.inherits(vk2.tool.TimeSlider, goog.events.EventTarget);

/**
 * @param {Element} parentEl
 * @private
 */
vk2.tool.TimeSlider.prototype._loadHtmlContent = function(parentEl){
	
	var containerEl = goog.dom.createDom('div',{'class':'timeslider-container'});
	goog.dom.appendChild(parentEl, containerEl);
	
	var labelEl = goog.dom.createDom('label',{'innerHTML':vk2.utils.getMsg('change_timeperiod')});
	goog.dom.appendChild(containerEl, labelEl);
	
	var  sliderContainer = goog.dom.createDom('div', {'class':'slider-container'});
	goog.dom.appendChild(containerEl, sliderContainer);	
	
	/**
	 * @type {Element}
	 * @private
	 */
	this._sliderEl = goog.dom.createDom('div',{'class':'slider'});
	goog.dom.appendChild(sliderContainer, this._sliderEl);	
};

/**
 * @param {Element} sliderEl
 * @param {Array.<number>} timeInterval
 * @private
 */
vk2.tool.TimeSlider.prototype._appendSliderBehavior = function(sliderEl, timeInterval){
	var minValueEl, maxValueEl;
	
	/**
	 * 	@param {number} value
	 *	@param {Element} element 
	 */
	var updatePosition = function(value, element){
		var style_left = (value - timeInterval[0]) / (timeInterval[1] - timeInterval[0]) * 100;
		element.style.left = style_left + '%';
		element.innerHTML = value;
	};
	
	$(sliderEl).slider({
        'range': true,
        'min': timeInterval[0],
        'max': timeInterval[1],
        'values': [timeInterval[0], timeInterval[1]],
        'animate': 'slow',
        'orientation': 'horizontal',
        'step': 1,
        'slide': function( event, ui ) {
        	var values = ui['values'];
        	updatePosition(values[0], minValueEl);
        	updatePosition(values[1], maxValueEl);
        },
        'change': goog.bind(function( event, ui ){
        	var values = ui['values'];
        	updatePosition(values[0], minValueEl);
        	updatePosition(values[1], maxValueEl);
        	this.dispatchEvent(new goog.events.Event(vk2.tool.TimeSlider.EventType.TIMECHANGE,{'time':values}));
        }, this)
    });
	
	// append tooltips
	minValueEl = goog.dom.createDom('div',{
		'class':'tooltip min-value',
		'innerHTML':timeInterval[0]
	});
	goog.dom.appendChild(sliderEl, minValueEl);
	
	maxValueEl = goog.dom.createDom('div',{
		'class':'tooltip max-value',
		'innerHTML':timeInterval[1]
	});
	goog.dom.appendChild(sliderEl, maxValueEl);
};

/**
 * @enum {string}
 */
vk2.tool.TimeSlider.EventType = {
		TIMECHANGE: 'timechange'
};
