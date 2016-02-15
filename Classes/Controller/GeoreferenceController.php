<?php
namespace SLUB\Vk2\Controller;

use \TYPO3\CMS\Extbase\Utility\DebuggerUtility;
use \TYPO3\CMS\Core\Utility\GeneralUtility;
use \TYPO3\CMS\Extbase\Mvc\View\JsonView;

use SLUB\Vk2\Utils\Tools;

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
 * GeoreferenceController
 */
class GeoreferenceController extends \TYPO3\CMS\Extbase\Mvc\Controller\ActionController {
	
	/**
	 * @var string
	 */
	protected $getProcessEndpoint = '/georef/process';
	
	/**
	 * @var string
	 */
	protected $validationEndpoint = '/georef/validation';
	
	/**
	 * @var string
	 */
	protected $confirmationEndpoint = '/georef/confirm';
	
	/**
	 * @var string
	 */
	protected $userEndpoint = '/user';
	
	/**
	 * feUserRepository
	 *
	 * @var \SLUB\Vk2\Domain\Repository\UserRepository
	 * @inject
	 */
	protected $feUserRepository;
	
	/**
	 * @var string
	 */
	protected $defaultViewObjectName = 'TYPO3\\CMS\\Extbase\\Mvc\\View\\JsonView';
	
	/**
	 * Proxies the georeference getprocess request to the backend service
	 * @return string json
	 */
	public function getProcessAction(){
		$objectid = $GLOBALS['_GET']['objectid'];
		$georeferenceid = $GLOBALS['_GET']['georeferenceid'];

		if ($objectid) {
			$body = array('objectid' => $objectid);
			$request = GeneralUtility::makeInstance('t3lib_http_Request', $GLOBALS['TSFE']->tmpl->setup['config.']['georefBackend'] . $this->getProcessEndpoint);
			$request->setMethod('POST');
			$request->setHeader('Content-Type', 'application/json;charset=UTF-8');
			$request->setBody(json_encode(array('objectid' => $objectid)));
			$response = $request->send()->getBody();
		} else if ($georeferenceid) {
			$request = GeneralUtility::makeInstance('t3lib_http_Request', $GLOBALS['TSFE']->tmpl->setup['config.']['georefBackend'] . $this->getProcessEndpoint . '/' . $georeferenceid);
			$request->setMethod('GET');
			$request->setHeader('Content-Type', 'application/json;charset=UTF-8');
			$response = $request->send()->getBody();
		}
		
		# create response		
 		$this->view->assign('value', json_decode($response, TRUE));
	}
	
	public function validateGeorefProcessAction() {
		$validationRequest = $_POST['req'];
		if (!is_null($validationRequest)) {
			# generate request
			$body = json_decode(stripslashes($validationRequest), TRUE);
			$request = GeneralUtility::makeInstance('t3lib_http_Request', $GLOBALS['TSFE']->tmpl->setup['config.']['georefBackend'] . $this->validationEndpoint);
			$request->setMethod('POST');
			$request->setHeader('Content-Type', 'application/json;charset=UTF-8');
			$request->setBody(json_encode($body));
			$response = $request->send()->getBody();
			
			// create response
			$this->view->assign('value', json_decode($response, TRUE));				
		}
		return;
	}
	
// 	public function initializeConfirmGeorefProcessAction() {
// 		DebuggerUtility::var_dump($GLOBALS);
// 	}
	
	public function confirmGeorefProcessAction() {
		$user = Tools::getActualUser($this->feUserRepository);
		
		# check if it is allowed
		$this->checkIfAllowed($user);
		
		$confirmRequest = $_POST['req'];
		$user = $GLOBALS['TSFE']->fe_user->user;
		if (!is_null($confirmRequest)) {
			# generate request
			$body = json_decode(stripslashes($confirmRequest), TRUE);
			$body['userid'] = $user['username'];
			$this->routeRequest($GLOBALS['TSFE']->tmpl->setup['config.']['georefBackend'] . $this->confirmationEndpoint, $body);
		}
		return;
	}
	
	/**
	 * Proxies the get georeference user history request (user view) to the backend service
	 * @return string json
	 */
	public function georeferenceUserHistoryAction(){
		$user = Tools::getActualUser($this->feUserRepository);
	
		# check if it is allowed
		$this->checkIfAllowed($user);
	
		# generate request url
		$url = $GLOBALS['TSFE']->tmpl->setup['config.']['georefBackend'] . $this->userEndpoint . '/' . $user->getUsername() . '/history';
	
		// generate request
		$request = GeneralUtility::makeInstance('t3lib_http_Request', $url);
		$request->setMethod('GET');
		$response = $request->send()->getBody();
	
		# create response
		$this->view->assign('value', json_decode($response, TRUE));
	}
	
	/**
	 * Proxies the get georeference information request (user view) to the backend service
	 * @return string json
	 */
	public function georeferenceUserInformationAction(){
		# generate request url
		$url = $GLOBALS['TSFE']->tmpl->setup['config.']['georefBackend'] . $this->userEndpoint . '/information';
	
				// generate request
				$request = GeneralUtility::makeInstance('t3lib_http_Request', $url);
				$request->setMethod('GET');
				$response = $request->send()->getBody();
					
				// extract the long user names for userids
				$parsedResponse = json_decode($response, TRUE);
				$extendedPointOverview = array();
				foreach ($parsedResponse['pointoverview'] as $record) {
					$user = Tools::getUserByUsername($this->feUserRepository, $record['userid']);

					// append standard values to array
					$newRecord = array(
						'points' => $record['points'],
						'userid' => $record['userid']
					);
					
					// if a record for this user is found append further information 
					if (!empty($user[0])) {
						$newRecord['username'] = $user[0]->getFirstname() . ' ' . $user[0]->getLastname();
					}
					array_push($extendedPointOverview, $newRecord);
				}
				$parsedResponse['pointoverview'] = $extendedPointOverview;
				
				$this->view->assign('value', $parsedResponse);
	}
	
	/**
	 * This functions routes the request to the given url
	 * 
	 * @param string $url
	 * @param array $body
	 */
	public function routeRequest($url, $body) {
		$request = GeneralUtility::makeInstance('t3lib_http_Request', $url);
		$request->setMethod('POST');
		$request->setHeader('Content-Type', 'application/json;charset=UTF-8');
		$request->setBody(json_encode($body));
		$response = $request->send()->getBody();
		
		// create response
		$this->view->assign('value', json_decode($response, TRUE));
		return;
	}
	
	/**
	 * Checks if the request is allowed
	 * @param \SLUB\Vk2\Domain\Model\User $user
	 */
	public function checkIfAllowed($user) {
		if ($user){
			// user is authenticated
			// do nothing
			return;
		} else {
			// user is not authenticated
			// redirect to main page
			$this->redirect('show', 'Main', NULL);
		}
	}	
}