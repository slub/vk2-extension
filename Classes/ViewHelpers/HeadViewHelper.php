<?php
namespace  SLUB\Vk2\ViewHelpers;

class HeadViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {
	
	/**
	 * @return string
	 * @param string $key the key for additionalHeaderData; useful for overriding
     * @return void
	 */
	public function render($key = NULL){
		$textToAdd = $this->renderChildren();
        if($key !== NULL) {
            $GLOBALS['TSFE']->additionalHeaderData[$key] = $textToAdd;
        } else {
            $GLOBALS['TSFE']->additionalHeaderData[] = $textToAdd;
        }
	}
}