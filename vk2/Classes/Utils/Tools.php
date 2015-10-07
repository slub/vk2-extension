<?php
namespace  SLUB\Vk2\Utils;

class Tools {
		
	/**
	 * Finds out the actual logged in user
	 * @param \TYPO3\CMS\Extbase\Domain\Repository\FrontendUserRepository $repo
	 * @return \SLUB\Vk2\Domain\Model\User $user
	 */
	public static function getActualUser($repo) {
		$user = $GLOBALS['TSFE']->fe_user->user;
		
		if (!$user)
			return null; 
		
		$feUserObj = $repo->findByUid( $user['uid'] );
		return $feUserObj;
	}
	
	/**
	 * Extract user groups for a given user.
	 * @param \SLUB\Vk2\Domain\Model\User $user
	 * @return array
	 */
	public static function getUsergroupsForUser($user) {
		if (!$user)
			return array();
		
		$userGroup = $user->getUsergroup();
		$groups = array();
		foreach ($userGroup as $key => $value) {
			array_push($groups, $value->getTitle());
		}
		return $groups;
	}
}