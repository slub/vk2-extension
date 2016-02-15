<?php
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

\TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
	'SLUB.' . $_EXTKEY,
	'Search',
	array(
		'Main' => 'show',
		'Evaluation' => 'getProcess, setIsValide, setIsInValide',
		'Static' => 'contact, faq, impressum, project, profileMap, login, logout, 
			georefPage, evaluationPage, georeferenceChoosePage, georeferenceHistoryPage,
			welcomePage, getContactMessage',
		'Auth' => 'login, signup, logout, loginError',
		'Georeference' => 'getProcess, validateGeorefProcess, confirmGeorefProcess, georeferenceUserHistory,
			georeferenceUserInformation',
	),
	// non-cacheable actions
	array(
		'Main' => 'show',
		'Evaluation' => 'getProcess, setIsValide, setIsInValide',
		'Static' => 'contact, faq, impressum, project, profileMap, login, logout, 
			georefPage, evaluationPage, georeferenceChoosePage, georeferenceHistoryPage,
			welcomePage, getContactMessage',
		'Auth' => 'login, signup, logout, loginError',
		'Georeference' => 'getProcess, validateGeorefProcess, confirmGeorefProcess, georeferenceUserHistory,
			georeferenceUserInformation',
	)
);

// Configuration of the real url
$TYPO3_CONF_VARS['EXTCONF']['realurl']['_DEFAULT'] = array(
 	'init' => array(
 		'enableCHashCache' => true,
 		'appendMissingSlash' => 'ifNotFile',
 		'enableUrlDecodeCache' => true,
 		'enableUrlDecodeCache' => true,
 		'emptyUrlReturnValue' => '/',
 	),
	'preVars' => array(
		array(
			'GETvar' => 'L',
			'valueMap' => array(
				'en' => '0',
				'de' => '1',
			),
			'noMatch' => 'bypass',
		),
	),
	'pagePath' => array(
		'type' => 'user',
		'userFunc' => 'EXT:realurl/class.tx_realurl_advanced.php:&tx_realurl_advanced->main',
		'spaceCharacter' => '-',
		'languageGetVar' => 'L',
		'expireDays' => 3
	),
	'postVarSets' => array(
		'_DEFAULT' => array(
			'vkviewer' => array(
				array(
					'GETvar' => 'tx_vk2_search[controller]',
					'valueMap' => array(
							'static' => 'Static',
							'auth' => 'Auth',
							'georef' => 'Georeference',
							'evaluation' => 'Evaluation',
							'main' => 'Main',
					)
				),
				array(
					'GETvar' => 'tx_vk2_search[action]',
					'valueMap' => array(
						'profile-map' => 'profileMap',
						'georefpage' => 'georefPage',
						'getprocess' => 'getProcess',
						'validation' => 'validateGeorefProcess',
						'confirm' => 'confirmGeorefProcess',
						'information' => 'georeferenceUserInformation',
						'history' => 'georeferenceUserHistory',
						'isvalide' => 'setIsValide',
						'isinvalide' => 'setIsInValide',
						'welcome' => 'welcomePage',
						'evaluationpage' => 'evaluationPage',
						'georefhistorypage' => 'georeferenceHistoryPage',
						'georefchoosepage' => 'georeferenceChoosePage',
					)	
				),
			),
		),
		'noMatch' => 'bypass',
	),
	'rootpage_id' => 19,
);