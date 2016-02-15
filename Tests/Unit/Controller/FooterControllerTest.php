<?php
namespace SLUB\Vk2\Tests\Unit\Controller;
/***************************************************************
 *  Copyright notice
 *
 *  (c) 2015 Jacob Mendt <Jacob.Mendt@slub-dresden.de>, SLUB
 *  			
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
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
 * Test case for class SLUB\Vk2\Controller\FooterController.
 *
 * @author Jacob Mendt <Jacob.Mendt@slub-dresden.de>
 */
class FooterControllerTest extends \TYPO3\CMS\Core\Tests\UnitTestCase {

	/**
	 * @var \SLUB\Vk2\Controller\FooterController
	 */
	protected $subject = NULL;

	protected function setUp() {
		$this->subject = $this->getMock('SLUB\\Vk2\\Controller\\FooterController', array('redirect', 'forward', 'addFlashMessage'), array(), '', FALSE);
	}

	protected function tearDown() {
		unset($this->subject);
	}

	/**
	 * @test
	 */
	public function showActionAssignsTheGivenFooterToView() {
		$footer = new \SLUB\Vk2\Domain\Model\Footer();

		$view = $this->getMock('TYPO3\\CMS\\Extbase\\Mvc\\View\\ViewInterface');
		$this->inject($this->subject, 'view', $view);
		$view->expects($this->once())->method('assign')->with('footer', $footer);

		$this->subject->showAction($footer);
	}

	/**
	 * @test
	 */
	public function showActionAssignsTheGivenFooterToView() {
		$footer = new \SLUB\Vk2\Domain\Model\Footer();

		$view = $this->getMock('TYPO3\\CMS\\Extbase\\Mvc\\View\\ViewInterface');
		$this->inject($this->subject, 'view', $view);
		$view->expects($this->once())->method('assign')->with('footer', $footer);

		$this->subject->showAction($footer);
	}

	/**
	 * @test
	 */
	public function showActionAssignsTheGivenFooterToView() {
		$footer = new \SLUB\Vk2\Domain\Model\Footer();

		$view = $this->getMock('TYPO3\\CMS\\Extbase\\Mvc\\View\\ViewInterface');
		$this->inject($this->subject, 'view', $view);
		$view->expects($this->once())->method('assign')->with('footer', $footer);

		$this->subject->showAction($footer);
	}

	/**
	 * @test
	 */
	public function showActionAssignsTheGivenFooterToView() {
		$footer = new \SLUB\Vk2\Domain\Model\Footer();

		$view = $this->getMock('TYPO3\\CMS\\Extbase\\Mvc\\View\\ViewInterface');
		$this->inject($this->subject, 'view', $view);
		$view->expects($this->once())->method('assign')->with('footer', $footer);

		$this->subject->showAction($footer);
	}
}
