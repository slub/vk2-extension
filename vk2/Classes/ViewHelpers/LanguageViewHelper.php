<?php
namespace  SLUB\Vk2\ViewHelpers;

/**
 * Helps to deliver the correct language file
 * @author mendt
 *
 */
class LanguageViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {
	
	/**
	 * 
	 * @param string $urlPattern
	 * @param string $languageTag
	 * @return string
	 */
	private function createJSLanguageTag($urlPattern, $languageTag) {
		$src = str_replace('%s', $languageTag, $urlPattern);
		return '<script src="' . $src . '" type="text/javascript"></script>';
	}
	
	public function initializeArguments() {
		$this->registerArgument('urlPattern', 'string', 
			'Pattern in which the language tag should be inputed.');
		$this->registerArgument('languageTag', 'string',
				'Tag of the actual language.');
	}
	
	/**
	 * @return string
	 * @param string $key the key for additionalHeaderData; useful for overriding
     * @return void
	 */
	public function render($key = NULL){		
		$scriptTag = $this->createJSLanguageTag($this->arguments['urlPattern'],$this->arguments['languageTag']);
        if($key !== NULL) {
            $GLOBALS['TSFE']->additionalHeaderData[$key] = $scriptTag;
        } else {
            $GLOBALS['TSFE']->additionalHeaderData[] = $scriptTag;
        }
	}
}