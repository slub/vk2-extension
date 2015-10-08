<?php
namespace SLUB\Vk2\Controller;

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
 * StaticController
 */
class StaticController extends \TYPO3\CMS\Extbase\Mvc\Controller\ActionController {
	
	/**
	 * feUserRepository
	 *
	 * @var \TYPO3\CMS\Extbase\Domain\Repository\FrontendUserRepository
	 * @inject
	 */
	protected $feUserRepository;
	
	/*
	 * simple static page behavior
	 */ 
	public function contactAction(){}
	public function faqAction(){}
	public function impressumAction(){}
	public function projectAction(){}
	public function profileMapAction(){}
	public function loginAction(){}
	public function logoutAction(){}
	
	/*
	 * allow only registered user to access this pages
	 */
	public function georefPageAction(){
		$user = Tools::getActualUser($this->feUserRepository);
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
	
	public function georeferenceChoosePageAction(){
		$user = Tools::getActualUser($this->feUserRepository);
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
	
	public function georeferenceHistoryPageAction(){
		$user = Tools::getActualUser($this->feUserRepository);
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
	
	public function evaluationPageAction(){
		$user = Tools::getActualUser($this->feUserRepository);
		$usergroup = Tools::getUsergroupsForUser($user);
		if (in_array('vk2-admin', $usergroup)){
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