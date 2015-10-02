<?php
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

\TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
	'SLUB.' . $_EXTKEY,
	'Search',
	array(
		'Main' => 'show',
		'Static' => 'contact, faq, impressum, project, profileMap, login, logout, georefPage',
		'Auth' => 'login, signup, logout',
		'Georeference' => 'getProcess, validateGeorefProcess, confirmGeorefProcess',
	),
	// non-cacheable actions
	array(
		'Main' => 'show',
		'Static' => 'contact, faq, impressum, project, profileMap, login, logout, georefPage',
		'Auth' => 'login, signup, logout',
		'Georeference' => 'getProcess, validateGeorefProcess, confirmGeorefProcess',
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
					)	
				),
			),
		),
		'noMatch' => 'bypass',
	),		
);
$TYPO3_CONF_VARS['EXTCONF']['realurl']['localhost'] = $TYPO3_CONF_VARS['EXTCONF']['realurl']['_DEFAULT'];
$TYPO3_CONF_VARS['EXTCONF']['realurl']['_DEFAULT']['rootpage_id'] = 19;
$TYPO3_CONF_VARS['EXTCONF']['realurl']['localhost']['rootpage_id'] = 19;