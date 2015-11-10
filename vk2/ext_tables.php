<?php
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

$extensionName = strtolower(\TYPO3\CMS\Core\Utility\GeneralUtility::underscoredToUpperCamelCase($_EXTKEY));
$pluginSearch = 'Search';

\TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
	$_EXTKEY,
	$pluginSearch,
	'Virtual Map Forum 2.0'
);

#
# Defines a flexform for the plugin search
#
$pluginSignatureSearch  = $extensionName . '_' . strtolower($pluginSearch);
$TCA['tt_content']['types']['list']['subtypes_excludelist'][$pluginSignatureSearch] = 'layout,select_key,pages,recursive';
$TCA['tt_content']['types']['list']['subtypes_addlist'][$pluginSignatureSearch] = 'pi_flexform';
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPiFlexFormValue($pluginSignatureSearch, 'FILE:EXT:' . $_EXTKEY . '/Configuration/FlexForms/flexform_search.xml');

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 'Virtual Map Forum Extension');

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addLLrefForTCAdescr('tx_vk2_domain_model_main', 'EXT:vk2/Resources/Private/Language/locallang_csh_tx_vk2_domain_model_main.xlf');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::allowTableOnStandardPages('tx_vk2_domain_model_main');
$GLOBALS['TCA']['tx_vk2_domain_model_main'] = array(
	'ctrl' => array(
		'title'	=> 'LLL:EXT:vk2/Resources/Private/Language/locallang_db.xlf:tx_vk2_domain_model_main',
		'label' => 'uid',
		'tstamp' => 'tstamp',
		'crdate' => 'crdate',
		'cruser_id' => 'cruser_id',
		'dividers2tabs' => TRUE,

		'versioningWS' => 2,
		'versioning_followPages' => TRUE,

		'languageField' => 'sys_language_uid',
		'transOrigPointerField' => 'l10n_parent',
		'transOrigDiffSourceField' => 'l10n_diffsource',
		'delete' => 'deleted',
		'enablecolumns' => array(
			'disabled' => 'hidden',
			'starttime' => 'starttime',
			'endtime' => 'endtime',
		),
		'searchFields' => '',
		'dynamicConfigFile' => \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extPath($_EXTKEY) . 'Configuration/TCA/Main.php',
		'iconfile' => \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath($_EXTKEY) . 'Resources/Public/Icons/tx_vk2_domain_model_main.gif'
	),
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addLLrefForTCAdescr('tx_vk2_domain_model_user', 'EXT:vk2/Resources/Private/Language/locallang_csh_tx_vk2_domain_model_user.xlf');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::allowTableOnStandardPages('tx_vk2_domain_model_user');
$GLOBALS['TCA']['tx_vk2_domain_model_user'] = array(
	'ctrl' => array(
		'title'	=> 'LLL:EXT:vk2/Resources/Private/Language/locallang_db.xlf:tx_vk2_domain_model_user',
		'label' => 'name',
		'tstamp' => 'tstamp',
		'crdate' => 'crdate',
		'cruser_id' => 'cruser_id',
		'dividers2tabs' => TRUE,

		'versioningWS' => 2,
		'versioning_followPages' => TRUE,

		'languageField' => 'sys_language_uid',
		'transOrigPointerField' => 'l10n_parent',
		'transOrigDiffSourceField' => 'l10n_diffsource',
		'delete' => 'deleted',
		'enablecolumns' => array(
			'disabled' => 'hidden',
			'starttime' => 'starttime',
			'endtime' => 'endtime',
		),
		'searchFields' => 'name,',
		'dynamicConfigFile' => \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extPath($_EXTKEY) . 'Configuration/TCA/User.php',
		'iconfile' => \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath($_EXTKEY) . 'Resources/Public/Icons/tx_vk2_domain_model_user.gif'
	),
);


\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addLLrefForTCAdescr('tx_vk2_domain_model_georeferenceprocess', 'EXT:vk2/Resources/Private/Language/locallang_csh_tx_vk2_domain_model_georeferenceprocess.xlf');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::allowTableOnStandardPages('tx_vk2_domain_model_georeferenceprocess');
$GLOBALS['TCA']['tx_vk2_domain_model_georeferenceprocess'] = array(
		'ctrl' => array(
				'title'	=> 'LLL:EXT:vk2/Resources/Private/Language/locallang_db.xlf:tx_vk2_domain_model_georeferenceprocess',
				'label' => 'id',
				'tstamp' => 'tstamp',
				'crdate' => 'crdate',
				'cruser_id' => 'cruser_id',
				'dividers2tabs' => TRUE,

				'versioningWS' => 2,
				'versioning_followPages' => TRUE,

				'languageField' => 'sys_language_uid',
				'transOrigPointerField' => 'l10n_parent',
				'transOrigDiffSourceField' => 'l10n_diffsource',
				'delete' => 'deleted',
				'enablecolumns' => array(
						'disabled' => 'hidden',
						'starttime' => 'starttime',
						'endtime' => 'endtime',
				),
				'searchFields' => 'id,mapid,timestamp,userid,georefparams,processed,isactive,overwrites,adminvalidation,',
				'dynamicConfigFile' => \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extPath($_EXTKEY) . 'Configuration/TCA/GeoreferenceProcess.php',
				'iconfile' => \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath($_EXTKEY) . 'Resources/Public/Icons/tx_vk2_domain_model_georeferenceprocess.gif'
		),
);


