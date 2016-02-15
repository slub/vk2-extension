<?php
namespace  SLUB\Vk2\ViewHelpers;

use SLUB\Vk2\Utils\Tools;

class IsAdminViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractConditionViewHelper {
	
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
		$feUserObj = Tools::getActualUser($this->feUserRepository);
		
		if ($feUserObj != NULL) {
			if ($this->isAdminUser($feUserObj))
				return $this->renderThenChild();
			else {
				return $this->renderElseChild();
			}
		} else {
			return $this->renderElseChild();
		}
	}
	
	/**
	 * Get the user groups
	 * @param \TYPO3\CMS\Extbase\Domain\Model\User $user
	 * @return boolean
	 */
	public function isAdminUser($user) {
		$usergroups = Tools::getUsergroupsForUser($user);				
		if (in_array('vk2-admin', $usergroups)) {
			return true;
		} else {
			return false;
		}		
	}
}