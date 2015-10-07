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
	protected $getProcessEndpoint = 'http://localhost:8080/georeference/georef/process'; #'http://localhost:8080/vkviewer/georeference/getprocess';
	
	/**
	 * @var string
	 */
	protected $validationEndpoint = 'http://localhost:8080/georeference/georef/validation';
	
	/**
	 * @var string
	 */
	protected $confirmationEndpoint = 'http://localhost:8080/georeference/georef/confirm';
	
	/**
	 * @var string
	 */
	protected $userEndpoint = 'http://localhost:8080/georeference/user';
	
	/**
	 * feUserRepository
	 *
	 * @var \TYPO3\CMS\Extbase\Domain\Repository\FrontendUserRepository
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
			$request = GeneralUtility::makeInstance('t3lib_http_Request', $this->getProcessEndpoint);
			$request->setMethod('POST');
			$request->setHeader('Content-Type', 'application/json;charset=UTF-8');
			$request->setBody(json_encode(array('objectid' => $objectid)));
			$response = $request->send()->getBody();
		} else if ($georeferenceid) {
			$request = GeneralUtility::makeInstance('t3lib_http_Request', $this->getProcessEndpoint . '/' . $georeferenceid);
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
			$request = GeneralUtility::makeInstance('t3lib_http_Request', $this->validationEndpoint);
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
	
	/**
	 * @param \SLUB\Vk2\Domain\Model\GeoreferenceProcess $process
	 */
	public function confirmGeorefProcessAction(
			\SLUB\Vk2\Domain\Model\GeoreferenceProcess $process = NULL) {
		$user = Tools::getActualUser($this->feUserRepository);
		
		# check if it is allowed
		$this->checkIfAllowed($user);
		
		$confirmRequest = $_POST['req'];
		$user = $GLOBALS['TSFE']->fe_user->user;
		if (!is_null($confirmRequest)) {
			# generate request
			$body = json_decode(stripslashes($confirmRequest), TRUE);
			$body['username'] = $user['username'];
			$this->routeRequest($this->confirmationEndpoint, $body);
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
		$url = $this->userEndpoint . '/' . $user->getUsername() . '/history';
	
		// generate request
		$request = GeneralUtility::makeInstance('t3lib_http_Request', $url);
		$request->setMethod('GET');
		$response = $request->send()->getBody();
	
		# create response
		$this->view->assign('value', json_decode($response, TRUE));
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