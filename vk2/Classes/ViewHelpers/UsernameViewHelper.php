<?php
namespace  SLUB\Vk2\ViewHelpers;

class UsernameViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {
	
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
			return $feUserObj->getUsername();
		} else {
			return 'Test';
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