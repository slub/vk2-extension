<?php
if (!defined ('TYPO3_MODE')) {
	die ('Access denied.');
}

$GLOBALS['TCA']['tx_vk2_domain_model_georeferenceprocess'] = array(
	'ctrl' => $GLOBALS['TCA']['tx_vk2_domain_model_georeferenceprocess']['ctrl'],
	'interface' => array(
		'showRecordFieldList' => 'sys_language_uid, l10n_parent, l10n_diffsource, hidden, id, mapid, timestamp, userid, georefparams, processed, isactive, overwrites, adminvalidation',
	),
	'types' => array(
		'1' => array('showitem' => 'sys_language_uid;;;;1-1-1, l10n_parent, l10n_diffsource, hidden;;1, id, mapid, timestamp, userid, georefparams, processed, isactive, overwrites, adminvalidation, --div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.access, starttime, endtime'),
	),
	'palettes' => array(
		'1' => array('showitem' => ''),
	),
	'columns' => array(
	
		'sys_language_uid' => array(
			'exclude' => 1,
			'label' => 'LLL:EXT:lang/locallang_general.xlf:LGL.language',
			'config' => array(
				'type' => 'select',
				'foreign_table' => 'sys_language',
				'foreign_table_where' => 'ORDER BY sys_language.title',
				'items' => array(
					array('LLL:EXT:lang/locallang_general.xlf:LGL.allLanguages', -1),
					array('LLL:EXT:lang/locallang_general.xlf:LGL.default_value', 0)
				),
			),
		),
		'l10n_parent' => array(
			'displayCond' => 'FIELD:sys_language_uid:>:0',
			'exclude' => 1,
			'label' => 'LLL:EXT:lang/locallang_general.xlf:LGL.l18n_parent',
			'config' => array(
				'type' => 'select',
				'items' => array(
					array('', 0),
				),
				'foreign_table' => 'tx_vk2_domain_model_georeferenceprocess',
				'foreign_table_where' => 'AND tx_vk2_domain_model_georeferenceprocess.pid=###CURRENT_PID### AND tx_vk2_domain_model_georeferenceprocess.sys_language_uid IN (-1,0)',
			),
		),
		'l10n_diffsource' => array(
			'config' => array(
				'type' => 'passthrough',
			),
		),

		't3ver_label' => array(
			'label' => 'LLL:EXT:lang/locallang_general.xlf:LGL.versionLabel',
			'config' => array(
				'type' => 'input',
				'size' => 30,
				'max' => 255,
			)
		),
	
		'hidden' => array(
			'exclude' => 1,
			'label' => 'LLL:EXT:lang/locallang_general.xlf:LGL.hidden',
			'config' => array(
				'type' => 'check',
			),
		),
		'starttime' => array(
			'exclude' => 1,
			'l10n_mode' => 'mergeIfNotBlank',
			'label' => 'LLL:EXT:lang/locallang_general.xlf:LGL.starttime',
			'config' => array(
				'type' => 'input',
				'size' => 13,
				'max' => 20,
				'eval' => 'datetime',
				'checkbox' => 0,
				'default' => 0,
				'range' => array(
					'lower' => mktime(0, 0, 0, date('m'), date('d'), date('Y'))
				),
			),
		),
		'endtime' => array(
			'exclude' => 1,
			'l10n_mode' => 'mergeIfNotBlank',
			'label' => 'LLL:EXT:lang/locallang_general.xlf:LGL.endtime',
			'config' => array(
				'type' => 'input',
				'size' => 13,
				'max' => 20,
				'eval' => 'datetime',
				'checkbox' => 0,
				'default' => 0,
				'range' => array(
					'lower' => mktime(0, 0, 0, date('m'), date('d'), date('Y'))
				),
			),
		),

		'id' => array(
			'exclude' => 1,
			'label' => 'LLL:EXT:vk2/Resources/Private/Language/locallang_db.xlf:tx_vk2_domain_model_georeferenceprocess.id',
			'config' => array(
				'type' => 'input',
				'size' => 4,
				'eval' => 'int'
			)
		),
		'mapid' => array(
			'exclude' => 1,
			'label' => 'LLL:EXT:vk2/Resources/Private/Language/locallang_db.xlf:tx_vk2_domain_model_georeferenceprocess.mapid',
			'config' => array(
				'type' => 'input',
				'size' => 4,
				'eval' => 'int'
			)
		),
		'timestamp' => array(
			'exclude' => 1,
			'label' => 'LLL:EXT:vk2/Resources/Private/Language/locallang_db.xlf:tx_vk2_domain_model_georeferenceprocess.timestamp',
			'config' => array(
				'type' => 'input',
				'size' => 10,
				'eval' => 'datetime',
				'checkbox' => 1,
				'default' => time()
			),
		),
		'userid' => array(
			'exclude' => 1,
			'label' => 'LLL:EXT:vk2/Resources/Private/Language/locallang_db.xlf:tx_vk2_domain_model_georeferenceprocess.userid',
			'config' => array(
				'type' => 'input',
				'size' => 4,
				'eval' => 'int'
			)
		),
		'georefparams' => array(
			'exclude' => 1,
			'label' => 'LLL:EXT:vk2/Resources/Private/Language/locallang_db.xlf:tx_vk2_domain_model_georeferenceprocess.georefparams',
			'config' => array(
				'type' => 'input',
				'size' => 30,
				'eval' => 'trim'
			),
		),
		'processed' => array(
			'exclude' => 1,
			'label' => 'LLL:EXT:vk2/Resources/Private/Language/locallang_db.xlf:tx_vk2_domain_model_georeferenceprocess.processed',
			'config' => array(
				'type' => 'check',
				'default' => 0
			)
		),
		'isactive' => array(
			'exclude' => 1,
			'label' => 'LLL:EXT:vk2/Resources/Private/Language/locallang_db.xlf:tx_vk2_domain_model_georeferenceprocess.isactive',
			'config' => array(
				'type' => 'check',
				'default' => 0
			)
		),
		'overwrites' => array(
			'exclude' => 1,
			'label' => 'LLL:EXT:vk2/Resources/Private/Language/locallang_db.xlf:tx_vk2_domain_model_georeferenceprocess.overwrites',
			'config' => array(
				'type' => 'input',
				'size' => 4,
				'eval' => 'int'
			)
		),
		'adminvalidation' => array(
			'exclude' => 1,
			'label' => 'LLL:EXT:vk2/Resources/Private/Language/locallang_db.xlf:tx_vk2_domain_model_georeferenceprocess.adminvalidation',
			'config' => array(
				'type' => 'input',
				'size' => 30,
				'eval' => 'trim'
			),
		),
		'type' => array(
			'exclude' => 1,
			'label' => 'LLL:EXT:vk2/Resources/Private/Language/locallang_db.xlf:tx_vk2_domain_model_georeferenceprocess.type',
			'config' => array(
				'type' => 'input',
				'size' => 30,
				'eval' => 'trim'
			),
		),
		'clipparams' => array(
			'exclude' => 1,
			'label' => 'LLL:EXT:vk2/Resources/Private/Language/locallang_db.xlf:tx_vk2_domain_model_georeferenceprocess.clipparams',
			'config' => array(
				'type' => 'input',
				'size' => 30,
				'eval' => 'trim'
			),
		),
	),
);
