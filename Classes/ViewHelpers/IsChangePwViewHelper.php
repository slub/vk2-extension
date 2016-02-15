<?php
namespace  SLUB\Vk2\ViewHelpers;

class IsChangePwViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractConditionViewHelper {

	/**
	 * @param string $key the key for additionalHeaderData; useful for overriding
     * @return string
	 */
	public function render($key = NULL){
		if (array_key_exists('tx_felogin_pi1', $GLOBALS['_GET']) && !array_key_exists('redirectReferrer', $GLOBALS['_GET']['tx_felogin_pi1'])) {
			return $this->renderThenChild();
		} else {
			return $this->renderElseChild();
		}
	}
}