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
 * EvaluationController
 */
class EvaluationController extends \TYPO3\CMS\Extbase\Mvc\Controller\ActionController {
	
	/**
	 * @var string
	 */
	protected $getProcessEndpoint = 'http://localhost:8080/georeference/admin/process'; #'http://localhost:8080/vkviewer/georeference/getprocess';
	
	/**
	 * @var string
	 */
	protected $setIsValidationEndpoint = 'http://localhost:8080/georeference/admin/process/setisvalide';
	
	/**
	 * @var string
	 */
	protected $setIsInValidationEndpoint = 'http://localhost:8080/georeference/admin/process/setinvalide';
	
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
	 * Proxies the get georeference process (admin view) to the backend service
	 * @return string json
	 */
	public function getProcessAction(){
		$mapid = $GLOBALS['_GET']['mapid'];
		$userid = $GLOBALS['_GET']['userid'];
		$validationStatus = $GLOBALS['_GET']['validation'];
		
		# generate request url
		$url = $this->getProcessEndpoint . '?';
		if (!is_null($mapid)) {
			$url = $url . 'mapid=' . $mapid; 
		} else if(!is_null($userid)) {
			$url = $url . 'userid=' . $userid;
		} else if (!is_null($validationStatus)) {
			$url = $url . 'validation=' . $validationStatus;
		}
		
		// generate request
		$request = GeneralUtility::makeInstance('t3lib_http_Request', $url);
		$request->setMethod('GET');	
		//$request->setHeader('Content-Type', 'application/json;charset=UTF-8');
		$response = $request->send()->getBody();
		
		# create response		
 		$this->view->assign('value', json_decode($response, TRUE));
	}
	
	/**
	 * Proxies the get setIsValide request (admin view) to the backend service
	 * @return string json
	 */
	public function setIsValideAction(){
		$georeferenceid = $GLOBALS['_GET']['georeferenceid'];
		$comment = $GLOBALS['_GET']['comment'];
		$username = $GLOBALS['TSFE']->fe_user->user['username'];
	
		# generate request url
		$url = $this->setIsValidationEndpoint . '?';
		
		if ($georeferenceid) {
			$url = $url . 'georeferenceid=' . $georeferenceid . '&userid=' . $username;
		} 
		if($comment ) {
			$url = $url . '&comment=' . $comment;
		}
	
		// generate request
		$request = GeneralUtility::makeInstance('t3lib_http_Request', $url);
		$request->setMethod('GET');
		$response = $request->send()->getBody();
	
		# create response
		$this->view->assign('value', json_decode($response, TRUE));
	}
	
	/**
	 * Proxies the get setIsInvalide request (admin view) to the backend service
	 * @return string json
	 */
	public function setIsInValideAction(){
		$georeferenceid = $GLOBALS['_GET']['georeferenceid'];
		$comment = $GLOBALS['_GET']['comment'];
		$username = $GLOBALS['TSFE']->fe_user->user['username'];
	
		# generate request url
		$url = $this->setIsInValidationEndpoint . '?';
		if ($georeferenceid) {
			$url = $url . 'georeferenceid=' . $georeferenceid . '&userid=' . $username;;
		}
		if($comment) {
			$url = $url . '&comment=' . $comment;
		}
	
		// generate request
		$request = GeneralUtility::makeInstance('t3lib_http_Request', $url);
		$request->setMethod('GET');
		$response = $request->send()->getBody();
	
		# create response
		$this->view->assign('value', json_decode($response, TRUE));
	}
}