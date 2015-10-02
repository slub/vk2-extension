<?php
namespace  SLUB\Vk2\ViewHelpers;

class IsUserViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractConditionViewHelper {
	
	/**
	 * feUserRepository
	 *
	 * @var \TYPO3\CMS\Extbase\Domain\Repository\FrontendUserRepository
	 * @inject
	 */
	protected $feUserRepository;
	
	/**
	 * @param string $key the key for additionalHeaderData; useful for overriding
     * @return string
	 */
	public function render($key = NULL){
		$feUserObj = $this->getActualUser();
		
		if ($feUserObj != NULL) {
			return $this->renderThenChild();
		} else {
			return $this->renderElseChild();
		}
	}
	
	/**
	 * gets current logged in frontenduser
	 *  
	 * @return \TYPO3\CMS\Extbase\Domain\Model\FrontendUser
	 */
	public function getActualUser() {
		$user = $GLOBALS['TSFE']->fe_user->user;
		$feUserObj = $this->feUserRepository->findByUid( $user['uid'] );
		return $feUserObj;
	}
}