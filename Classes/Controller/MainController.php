<?php
namespace SLUB\Vk2\Controller;


/***************************************************************
 *
 *  Copyright notice
 *
 *  (c) 2015 Jacob Mendt <Jacob.Mendt@slub-dresden.de>, SLUB
 *
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

/**
 * MainController
 */
class MainController extends \TYPO3\CMS\Extbase\Mvc\Controller\ActionController {

	/**
	 * mainRepository
	 *
	 * @var \SLUB\Vk2\Domain\Repository\MainRepository
	 * @inject
	 */
	protected $mainRepository = NULL;

	/**
	 * action show
	 * @return void
	 */
	public function showAction() {
		//\TYPO3\CMS\Extbase\Utility\DebuggerUtility::var_dump($this->settings['georef']['backend']);
		\SLUB\Vk2\Utils\Tools::renderOpenlayersDependencies($this->settings);
		\SLUB\Vk2\Utils\Tools::renderClientSettings($this->settings);
	}

	/**
	 * action show
	 * @return void
	 */
	public function show3dAction() {
		if ($this->settings['general']['mode3d'] == 1){
			// get relative typo path
			$relPath = \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::siteRelPath('vk2');

			// render different js library regarding if production or debug mode
			if ($this->settings['general']['debug'] == 1) {
				$GLOBALS['TSFE']->additionalHeaderData[] = '
				<script type="text/javascript" src="'.$relPath.'Resources/Public/dist/Cesium/Cesium.js"></script>
				<script type="text/javascript" src="'.$relPath.'Resources/Public/dist/ol3cesium-debug.js"></script>
				<script type="text/javascript" src="'.$relPath.'Resources/Public/lib/closure-library/closure/goog/base.js"></script>
				<script type="text/javascript" src="'.$relPath.'Resources/Public/lib/closure-library/closure/goog/deps.js"></script>
				<script type="text/javascript" src="'.$relPath.'Resources/Public/src/vk2-deps.js"></script>';
			} else {
				$GLOBALS['TSFE']->additionalHeaderData[] = '
				<script type="text/javascript" src="'.$relPath.'Resources/Public/dist/Cesium/Cesium.js"></script>
				<script type="text/javascript" src="'.$relPath.'Resources/Public/dist/ol3cesium.js"></script>
				<script type="text/javascript" src="'.$relPath.'Resources/Public/dist/vk2-min-debug.js"></script>';
			}

			\SLUB\Vk2\Utils\Tools::renderClientSettings($this->settings);
		} else {
			// 2.5d mode is deactivated
			// redirect to main page
			$this->redirect('show', 'Main', NULL);
		}
	}

}