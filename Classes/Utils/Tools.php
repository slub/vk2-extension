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
	 * Gets the user by his userid
	 * @param \SLUB\Vk2\Domain\Repository\UserRepository $repo
	 * @param string $username
	 * @return \SLUB\Vk2\Domain\Model\User $user
	 */
	public static function getUserByUsername($repo, $username) {	
		$feUserObj = $repo->findByUsername( $username );
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

	/**
	 * Functions renders the openlayers dependencies to the given template.
	 * @param number $debug
	 */
	public static function renderOpenlayersDependencies($debug) {
		// get relative typo path
		$relPath = \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::siteRelPath('vk2');

		// render different js library regarding if production or debug mode
		if ($debug == 1) {
			$GLOBALS['TSFE']->additionalHeaderData[] = '
				<script type="text/javascript" src="'.$relPath.'Resources/Public/lib/openlayers/ol-debug.js"></script>
				<script type="text/javascript" src="'.$relPath.'Resources/Public/lib/closure-library/closure/goog/base.js"></script>
				<script type="text/javascript" src="'.$relPath.'Resources/Public/lib/closure-library/closure/goog/deps.js"></script>
				<script type="text/javascript" src="'.$relPath.'Resources/Public/src/vk2-deps.js"></script>';
		} else {
			$GLOBALS['TSFE']->additionalHeaderData[] = '
				<script type="text/javascript" src="'.$relPath.'Resources/Public/dist/ol-vk2.js"></script>
				<script type="text/javascript" src="'.$relPath.'Resources/Public/dist/vk2-min.js"></script>';
		}
	}
}