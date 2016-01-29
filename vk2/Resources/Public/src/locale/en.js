console.log('English locals are loaded!');

var lang_dictionary = {
		// They are assigned to the layersearch module
		'toolname_layersearch': 'Map search',
		'displaytimestamp': 'Display timestamp',
		'description': 'Description',
		'timestamp': 'Time',
		'time': 'Time',
		'titel': 'Title',
		'title': 'Title',
		'georeference': 'georeferenced',
		'found_mtb': 'Maps available.',
		'found_no_maps': 'No maps founded.',
		'change_zoomlevel': 'Please zoom in!',
		'choose_valide_timestamp': 'Please choose valide timestamp',
		'change_timeperiod': 'Adjust time periode:',
		'start_message': 'Welcome to the Virtual Map Forum 2.0.<br> Please choose your map collection in the search menu on the left side. ',
		
		// layermanagement module
		'layermanagement_label': 'My Maps',
		'toolname_layerbar': 'Choose map layer',
		
		// They are assigned to the Gazetteersearch module
		'gazetteer_placeholder':'Placename',
		'gazetteer_submit':'Search',
		'noResultsBlattnr': 'This blatt number is not supported by the Virtuelle Kartenforum 2.0!',
			
		// They are assigned to the Georeference Tools
		'moveMap': 'Move map',
		'setCornerPoint': 'Set ground control point',
		'moveCornerPoint': 'Move ground control point',
		'deleteCornerPoint': 'Delete ground control point',
		'drawClip': 'Draw Clip-Polygon',
		'validateBtn_georeference': 'Preview georeferencing',
		'submitBtn_georeference': 'Submit without preview',
		'validateBtn_validate': 'Update preview',
		'submitBtn_validate': 'Confirm georeferencing',
		'checkCornerPoint_count' : 'Please select only 4 points',
		'checkCornerPoint_distance' : 'Corner point already set in this area! Please use "Move corner point"!',
		'georef_validate_msg':'Are you sure you want to persistent save the georeference paramater?',
		'confirm_dialog_clip_title': 'Confirm georeference params',
		'confirm_dialog_clip_msg': 'Confirm georeference params without clip params?',
			
		// report error
		'report_error_alert': 'Problems while notify error. Please contact the administrator.',
		'report_error_titel': 'Error report for plane survey sheet',
		'report_error_confirmed': 'Error reported!',
		'report_error_btn_submit': 'Submit',
		'report_error_btn_cancel': 'Cancel',
		
		// login validation
		'password_to_short': 'The password should contain between 5 to 16 characters.',
		'password_wrong_token': 'The password should consist out of alphabetic tokens and numbers between 0 to 9.',
		'password_is_same': 'The passwords doesn\'t match each other.',
		'username_to_short': 'The username should contain between 3 to 16 characters.',
		'username_wrong_token': 'The username should consist out of alphabetic tokens and numbers between 0 to 9.',
		'personname_to_short': 'The person name should contain between 3 to 16 characters.',
		'personname_wrong_token': 'The person name should consinst out of alphabetic tokens.',
		'email_to_short': 'The email adress should contain between 6 to 80 characters.',
		'email_wrong_token': 'The email adress should have form like Max.Mustermann@slub-dresden.de.',
		
		// show metadata
		'show_metadata': 'Single map view',
		'metadata_overview': 'Metadata overview',
		'mdrecord_moremetadata': 'Show more information about the plane survey sheet',
		'mdrecord_keyword': 'Keywords',
		'mdrecord_language': 'Language',
		'mdrecord_referencesystem': 'Reference system identifier',
		'mdrecord_onlineresource': 'Online resource',
		'mdrecord_spatialresolution': 'Spatial resolution',
		'mdrecord_uniqueid': 'Unique Identifier',
		
		// for georef feedback
		'georef_points': 'Points',
		
		// contact message
		'send_con_message_suc': 'Your message has been send. Thank you. Enjoy your time in the Virtuelle Kartenforum 2.0.',
		'send_con_message_err': 'Error while sending the contact message. Please try again or send the Admin an email.',
		
		// minimize messtischblatt view
		'mmv_label_blattnr': 'Map sheet for number:',
		
		// layerbar
		'layerbar_choosetime': 'Choose timestamp',
		
		// alerts for GeoreferencerSearchLayer
		'georeference': 'Georeference',
		'clickout' : 'Area already completed or does not contain any maps',
		
		// VK2.Tools.TimestampSwitcher
		'timestamps': 'timestamps',
		'timestamp_dropdown': 'add more timestamps',
		'found_timestamp': 'founded timestamps',
			
		// vk2.factory.MapSearchFactory
		'scale':'Scale',
		'not_georeference': 'Not georeferenced!',
		'timestamp':'Timestamp',
		'showLayer':'Display Map',
		'removeLayer':'Remove Map',
		'moveToTop':'Move Map to Top',
		
		// vk2.factory.LayerManagementFactor
		'updateGeoref': 'Update georeferencing',
		
		// vk2.control.ImageManipulation
		'openImagemanipulation':'Open Image-manipulation-toolbox',
			
		// tooltips
		'layerspy':'Get a magnifier for the map',
		'rotatenorth':'Align map to north',
		'permalink':'Produce link for share this view',
		
		// permalink msg
		'permalink_msg':'For copying the link push',

		// mousepositiononoff
		'mouseposition':'Mouse position',
		
		// generic
		'backToMain': 'back to main page ...',
		'yes':'Yes',
		'no':'No',
		
		// vk2.control.DynamicMapVisualization
		'dynMapVisStart':'Start timeseries visualization',
		'dynMapVisStop':'Stop timeseries visualization',
		
		// vk2.control.ImageManipulation
		'hue':'Hue',
		'saturation': 'Saturation',
		'contrast': 'Contrast',
		'brightness': 'Brightness',
		'reset':'Reset',
		
		// vk2.controller.MapController
		'go_to_georeference': 'Go to georeference view.',
		'go_to_originalmap': 'Go to original view.'
}