goog.provide('vk2.app.AdminEvaluationApp');

goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('vk2.settings');
goog.require('vk2.utils');
goog.require('vk2.utils.routing');
goog.require('vk2.georeference.utils');
goog.require('vk2.georeference.view.TargetView');
goog.require('vk2.georeference.GeoreferencerService');

/**
 * @constructor
 * @export
 * @param {Object} settings
 * 		{string} btn_getallprocess
 * 		{string} process_list
 * 		{string} map_container
 */
vk2.app.AdminEvaluationApp = function(settings){
	if (goog.DEBUG)
		console.log('Create new vk2.app.AdminEvaluationApp');
	
	if (!settings.hasOwnProperty('process_list') || !settings.hasOwnProperty('map_container'))
		throw "Missing parameter in the vk2.app.AdminEvaluationApp settings. Please check the documentation.";
	
	this.initializeEvaluationMap_(settings['map_container']);
	
	if (settings.hasOwnProperty('btn_getallprocess'))
		this.addFetchProcessEvent_(settings['btn_getallprocess'], settings['process_list']);
	
	if (settings.hasOwnProperty('btn_getallinvalideprocess'))
		this.addFetchProcessEvent_(settings['btn_getallinvalideprocess'], settings['process_list'], 'validation=invalide');
	
	if (settings.hasOwnProperty('btn_getsingleprocess_mapid'))
		this.addFetchSingleProcessForMapId_(settings['btn_getsingleprocess_mapid'], settings['process_list']);
	
	if (settings.hasOwnProperty('btn_getsingleprocess_userid'))
		this.addFetchSingleProcessForUserId_(settings['btn_getsingleprocess_userid'], settings['process_list']);
};

/**
 * @param {string} idEventTrigger
 * @param {string} resultContainer
 * @param {string=} opt_param
 * @private
 */
vk2.app.AdminEvaluationApp.prototype.addFetchProcessEvent_ = function(idEventTrigger, resultContainer, opt_param){
	var eventTrigger = goog.dom.getElement(idEventTrigger);
	
	// add event to the trigger
	goog.events.listen(eventTrigger, 'click', function(event){
		if (goog.DEBUG)
			console.log('fetch data from server ...');
		
		var xhr = new goog.net.XhrIo();
		
		// add listener to request object
		goog.events.listenOnce(xhr, goog.net.EventType.SUCCESS, function(e){
			var xhr = /** @type {goog.net.XhrIo} */ (e.target);
			this.displayProcesses_(resultContainer, xhr.getResponseJson());
			xhr.dispose();
		}, false, this);
		
		goog.events.listenOnce(xhr, goog.net.EventType.ERROR, function(e){
			alert('Something went wrong, while trying to fetch data from the server.')
		}, false, this);
		
		// send request
		var params = goog.isDef(opt_param) ? opt_param : undefined,
			url = vk2.utils.routing.getGeoreferenceAdminProcessRoute(params);
		xhr.send(url, 'GET');	
	}, undefined, this);
};

/**
 * @param {string} idEventTrigger
 * @param {string} resultContainer
 * @private
 */
vk2.app.AdminEvaluationApp.prototype.addFetchSingleProcessForMapId_ = function(idEventTrigger, resultContainer){
	var eventTrigger = goog.dom.getElement(idEventTrigger);
	
	// add event to the trigger
	goog.events.listen(eventTrigger, 'click', function(event){
		if (goog.DEBUG)
			console.log('fetch data from server ...');
		
		var inputFieldId = event.currentTarget.getAttribute('data-src');
		var inputFieldEl = goog.dom.getElement(inputFieldId);
		var mapid = inputFieldEl.value;
		
		var xhr = new goog.net.XhrIo();
		
		// add listener to request object
		goog.events.listenOnce(xhr, goog.net.EventType.SUCCESS, function(e){
			var xhr = /** @type {goog.net.XhrIo} */ (e.target);
			this.displayProcesses_(resultContainer, xhr.getResponseJson());
			xhr.dispose();
		}, false, this);
		
//		goog.events.listenOnce(xhr, goog.net.EventType.ERROR, function(e){
//			alert('Something went wrong, while trying to fetch data from the server.');
//			debugger;
//		}, false, this);
		
		// send request
		var params = 'mapid=' + mapid,
			url = vk2.utils.routing.getGeoreferenceAdminProcessRoute(params);
		xhr.send(url, 'GET');	
	}, undefined, this);
};

/**
 * @param {string} idEventTrigger
 * @param {string} resultContainer
 * @private
 */
vk2.app.AdminEvaluationApp.prototype.addFetchSingleProcessForUserId_ = function(idEventTrigger, resultContainer){
	var eventTrigger = goog.dom.getElement(idEventTrigger);
	
	// add event to the trigger
	goog.events.listen(eventTrigger, 'click', function(event){
		
		if (goog.DEBUG)
			console.log('fetch data from server ...');
		
		var inputFieldId = event.currentTarget.getAttribute('data-src');
		var inputFieldEl = goog.dom.getElement(inputFieldId);
		var userid = inputFieldEl.value;
		
		var xhr = new goog.net.XhrIo();
		
		// add listener to request object
		goog.events.listenOnce(xhr, goog.net.EventType.SUCCESS, function(e){
			var xhr = /** @type {goog.net.XhrIo} */ (e.target);
			this.displayProcesses_(resultContainer, xhr.getResponseJson());
			xhr.dispose();
		}, false, this);
		
		goog.events.listenOnce(xhr, goog.net.EventType.ERROR, function(e){
			alert('Something went wrong, while trying to fetch data from the server.')
		}, false, this);
		
		// send request
		var params = 'userid=' + userid,
			url = vk2.utils.routing.getGeoreferenceAdminProcessRoute(params);
		xhr.send(url, 'GET');	
		
	}, undefined, this);
};

/**
 * @param {Object} record
 * @return {Element}
 * @private
 */
vk2.app.AdminEvaluationApp.prototype.createProcessListElement_ = function(record){
	var parentEl = goog.dom.createDom('article', {'id':record['georef_id']});
	
	var helperFactory = function(label, value){
		return goog.dom.createDom('p',{
			'innerHTML':'<strong>' + label + ':</strong><br> ' + value
		});
	};
	
	var helperFactoryAnchors = goog.bind(function(record){
		var phrase = goog.dom.createDom('p');
		
		if (record['adminvalidation'] != 'isvalide'){
			// set is valid
			var setIsValideBtn = goog.dom.createDom('button', {
				'data-href': vk2.utils.routing.getGeoreferenceAdminSetIsValideRoute('georeferenceid=' + record['georef_id']),
				'class':'btn btn-primary action-btn',
				'innerHTML': 'Is valide'
			});
			this.registerSetAdminValidationRequest_(setIsValideBtn, parentEl,
					'Georeference process is valide?', 'Are you sure you wanna set this georeference process to isvalide? Why?');
			goog.dom.appendChild(phrase, setIsValideBtn);
		};
		
		// show map
		var showMapBtn = goog.dom.createDom('button', {
			'data-params-georef': record['georef_params'],
			'data-params-clip': record['clippolygon'],
			'data-params-id': record['mapid'],
			'class':'btn btn-primary btn-show-georef',
			'innerHTML': 'Show map'
		});
		this.registerShowMapEventListener_(showMapBtn);
		goog.dom.appendChild(phrase, showMapBtn);
		
		// go to process
		goog.dom.appendChild(phrase, goog.dom.createDom('a', {
			'href': vk2.utils.routing.getGeorefPageRoute(undefined, 'georeferenceid=' + record['georef_id']),
			'class':'btn btn-primary action-btn',
			'target':'_blank',
			'innerHTML': 'Go to process ...'
		}));
		
		if (record['adminvalidation'] != 'invalide'){			
			// deactivete
			var deactiveBtn = goog.dom.createDom('button', {
				'data-href': vk2.utils.routing.getGeoreferenceAdminSetIsInValideRoute('georeferenceid=' + record['georef_id']),
				'class':'btn btn-warning action-btn',
				'innerHTML': 'Is invalide'
			});
			this.registerSetAdminValidationRequest_(deactiveBtn, parentEl,
					'Georeference process is invalide?', 'Are you sure you wanna set this georeference process to invalide? Why?');
			goog.dom.appendChild(phrase, deactiveBtn);
		};		
		return phrase;
	}, this);
	
	// add georeference process id
	goog.dom.appendChild(parentEl, helperFactory('Process-ID', record['georef_id']));
	
	// add admin validation
	goog.dom.appendChild(parentEl, helperFactory('Admin validation', record['adminvalidation']));
	
	// add admin validation
	goog.dom.appendChild(parentEl, helperFactory('Map id', record['mapid']));
	
	// add admin validation
	goog.dom.appendChild(parentEl, helperFactory('User id', record['userid']));
	
	// add admin validation
	goog.dom.appendChild(parentEl, helperFactory('Map sheet description', record['title']));
	
	// add admin validation
	goog.dom.appendChild(parentEl, helperFactory('Georeference parameter (lon:lat)', record['georef_params']));
	
	// add admin validation
	goog.dom.appendChild(parentEl, helperFactory('Type', record['type']));
	
	// add admin validation
	goog.dom.appendChild(parentEl, helperFactory('Processed', record['processed'])); 

	// add admin validation
	goog.dom.appendChild(parentEl, helperFactory('Is active', record['georef_isactive'])); 
	
	// add timestamp 
	goog.dom.appendChild(parentEl, goog.dom.createDom('p',{
		'class':'meta',
		'innerHTML':'Created: ' + record['georef_time']
	}));
	
	// add behavior buttons/anchor
	goog.dom.appendChild(parentEl, helperFactoryAnchors(record));
	
	return parentEl;
};

/**
 * @param {string} resultContainer
 * @param {Array.<Object>} data
 * @private
 */
vk2.app.AdminEvaluationApp.prototype.displayProcesses_ = function(resultContainer, data){
		
	// get resultContainer and clear it
	var containerEl = goog.dom.getElement(resultContainer);
	containerEl.innerHTML = '';
	
	// now add processes
	for (var i = 0, ii = data.length; i < ii; i++){
		goog.dom.appendChild(containerEl, this.createProcessListElement_(data[i]));
	};
};

/**
 * @param {string} idMapContainer
 * @private
 */
vk2.app.AdminEvaluationApp.prototype.initializeEvaluationMap_ = function(idMapContainer){
	vk2.georeference.utils.initializeGeorefenceCRS();
	
	/**
	 * @type {vk2.georeference.view.TargetView}
	 * @private
	 */
	this.targetView_ = new vk2.georeference.view.TargetView(idMapContainer);
};

/**
 * @param {Element} element
 * @param {Element} parentEl
 * @param {string} title
 * @param {string} msg
 * @private
 */
vk2.app.AdminEvaluationApp.prototype.registerSetAdminValidationRequest_ = function(element, parentEl, title, msg){
	var callback = goog.partial(
		vk2.utils.getConfirmationDialog, 
		title, 
		msg +   
		'<br><div id="admin-validation-comment" class="input-group"><input type="radio" value="imprecision"> Imprecision' +
		'<br><input type="radio" value="wrong-parameter"> Wrong Parameter<br>' + 
		'<input type="radio" value="wrong-map-sheet-number"> Wrong map sheet number<br>' +
		'<input type="radio" value="bad-original"> Bad original<br><br>' +
		'<input type="text" class="form-control" placeholder="comment" id="confirm-comment"></div>', 
		function(event){
			var inputs = goog.dom.getElementsByTagNameAndClass('input', undefined, goog.dom.getElement('admin-validation-comment'));
			var msg = undefined;
			for (var i = 0; i < inputs.length; i++) {
				if (inputs[i].type == 'radio' && inputs[i].checked)
					msg = inputs[i].value;
			}
			var comment = goog.isDef(msg) ? msg : goog.dom.getElement('confirm-comment').value
			var url = element.getAttribute('data-href') + '&comment=' + comment;				
			goog.net.XhrIo.send(url, function(event){
				alert(event.target.getResponseJson()['message']);
				goog.dom.removeNode(parentEl);
			}, 'GET');	
		}
	);
	
	goog.events.listen(element, 'click', callback);
};

/**
 * @param {Element} element
 * @private
 */
vk2.app.AdminEvaluationApp.prototype.registerShowMapEventListener_ = function(element){
	goog.events.listen(element, 'click', function(event){
		
		if (goog.DEBUG)
			console.log('Fire show map event ...');
		
		// parse request parameter
		var georefParamsNewOrUpdate = JSON.parse(event.currentTarget.getAttribute('data-params-georef')),
			georefParams = georefParamsNewOrUpdate.hasOwnProperty('new') ? georefParamsNewOrUpdate['new'] 
				: georefParamsNewOrUpdate,
			clipParams = event.currentTarget.getAttribute('data-params-clip') == 'None' ? undefined :
				JSON.parse(event.currentTarget.getAttribute('data-params-clip')),
			objectId = parseInt(event.currentTarget.getAttribute('data-params-id'), 0);
		
		var requestParams = {
			'georeference': georefParams,
			'id': objectId
		};

		if (clipParams !== undefined)
			requestParams['clip'] = clipParams;
		
		if (goog.DEBUG) {
			console.log(requestParams);
		}
		// request a validation result
		this.targetView_.activateLoadingBar();
		vk2.georeference.GeoreferencerService.requestValidationResult(requestParams, goog.bind(function(response){
			this.targetView_.deactivateLoadingBar();
			var data = response.target.getResponseJson();
			this.targetView_.displayValidationMap(data['wmsUrl'], data['layerId'], data['clip']);
		}, this), function(response){
			this.targetView_.deactivateLoadingBar();
			alert('Something went wrong while trying to fetch a georeference validation result from server ....');
		});
	}, false, this);
};