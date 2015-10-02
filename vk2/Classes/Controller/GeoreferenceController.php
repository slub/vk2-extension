<?php
namespace SLUB\Vk2\Controller;

use \TYPO3\CMS\Extbase\Utility\DebuggerUtility;
use \TYPO3\CMS\Core\Utility\GeneralUtility;
use \TYPO3\CMS\Extbase\Mvc\View\JsonView;

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
	protected $getProcessEndpoint = 'http://localhost:8080/georeference/process'; #'http://localhost:8080/vkviewer/georeference/getprocess';
	
	/**
	 * @var string
	 */
	protected $validationEndpoint = 'http://localhost:8080/georeference/validation';
	
	/**
	 * @var string
	 */
	protected $confirmationEndpoint = 'http://localhost:8080/georeference/confirm';
	
	/**
	 * GeoreferenceProcessRepository
	 *
	 * @var \SLUB\Vk2\Domain\Repository\GeoreferenceProcessRepository
	 * @inject
	 */
	protected $georefProcessRepository;
	
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
		
		# generate request 
		$body = array('objectid' => $objectid);
		$request = GeneralUtility::makeInstance('t3lib_http_Request', $this->getProcessEndpoint);
		$request->setMethod('POST');
		$request->setHeader('Content-Type', 'application/json;charset=UTF-8');
		$request->setBody(json_encode(array('objectid' => $objectid)));		
		$response = $request->send()->getBody();
		
		# create response		
 		$this->view->assign('value', json_decode($response, TRUE));
	}
	
	public function initializeValidateGeorefProcessAction() {
		//DebuggerUtility::var_dump($GLOBALS['_POST']);
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
		$confirmRequest = $_POST['req'];
		$user = $GLOBALS['TSFE']->fe_user->user;
		if (!is_null($confirmRequest)) {
			# generate request
			$body = json_decode(stripslashes($confirmRequest), TRUE);
			$body['username'] = $user['username'];
			$this->routeRequest($this->confirmationEndpoint, $body);
			
			/*
			# In case someone wants to move this part of the application to the typo3 extension
			
			# generate process and set the variables
			if ($process == NULL) {
				$process = new \SLUB\Vk2\Domain\Model\GeoreferenceProcess();
			}
			
			$process->setGeorefparams(json_encode($body['georeference']));
			$process->setType($body['type']);
			$process->setMapid($body['id']);
			$process->setClipparams(json_encode($body['clip']));
			
			// save georeference process in repository
			$this->georefProcessRepository->add($process);
			*/

		}
		return;
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
}