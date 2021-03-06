<?php
namespace  SLUB\Vk2\ViewHelpers;

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
 * This ViewHelper checks if the georeference module is activated or not.
 *
 * Class IsGeorefOnViewHelper
 * @package SLUB\Vk2\ViewHelpers
 */
class IsGeorefOnViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractConditionViewHelper {

	/**
	 * @param string $key the key for additionalHeaderData; useful for overriding
     * @return string
	 */
	public function render($key = NULL){
		$settings = $this->templateVariableContainer->get('settings');

		if ($settings['georef']['active'] == '1') {
			return $this->renderThenChild();
		} else {
			return $this->renderElseChild();
		}
	}

}