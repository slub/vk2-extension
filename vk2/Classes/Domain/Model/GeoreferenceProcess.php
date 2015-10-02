<?php
namespace SLUB\Vk2\Domain\Model;


/***************************************************************
 *
 *  Copyright notice
 *
 *  (c) 2015
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
 * GeoreferenceProcess
 */
class GeoreferenceProcess extends \TYPO3\CMS\Extbase\DomainObject\AbstractEntity {

	/**
	 * id
	 *
	 * @var integer
	 */
	protected $id = 0;

	/**
	 * mapid
	 *
	 * @var integer
	 */
	protected $mapid = 0;

	/**
	 * timestamp
	 *
	 * @var \DateTime
	 */
	protected $timestamp = NULL;

	/**
	 * userid
	 *
	 * @var integer
	 */
	protected $userid = 0;

	/**
	 * georefparams
	 *
	 * @var string
	 */
	protected $georefparams = '';

	/**
	 * processed
	 *
	 * @var boolean
	 */
	protected $processed = FALSE;

	/**
	 * isactive
	 *
	 * @var boolean
	 */
	protected $isactive = FALSE;

	/**
	 * overwrites
	 *
	 * @var integer
	 */
	protected $overwrites = 0;

	/**
	 * adminvalidation
	 *
	 * @var string
	 */
	protected $adminvalidation = '';

	/**
	 * type
	 *
	 * @var string
	 */
	protected $type = '';

	/**
	 * clipparams
	 *
	 * @var string
	 */
	protected $clipparams = '';

	/**
	 * Returns the id
	 *
	 * @return integer $id
	 */
	public function getId() {
		return $this->id;
	}

	/**
	 * Sets the id
	 *
	 * @param integer $id
	 * @return void
	 */
	public function setId($id) {
		$this->id = $id;
	}

	/**
	 * Returns the mapid
	 *
	 * @return integer $mapid
	 */
	public function getMapid() {
		return $this->mapid;
	}

	/**
	 * Sets the mapid
	 *
	 * @param integer $mapid
	 * @return void
	 */
	public function setMapid($mapid) {
		$this->mapid = $mapid;
	}

	/**
	 * Returns the timestamp
	 *
	 * @return \DateTime $timestamp
	 */
	public function getTimestamp() {
		return $this->timestamp;
	}

	/**
	 * Sets the timestamp
	 *
	 * @param \DateTime $timestamp
	 * @return void
	 */
	public function setTimestamp(\DateTime $timestamp) {
		$this->timestamp = $timestamp;
	}

	/**
	 * Returns the userid
	 *
	 * @return integer $userid
	 */
	public function getUserid() {
		return $this->userid;
	}

	/**
	 * Sets the userid
	 *
	 * @param integer $userid
	 * @return void
	 */
	public function setUserid($userid) {
		$this->userid = $userid;
	}

	/**
	 * Returns the georefparams
	 *
	 * @return string $georefparams
	 */
	public function getGeorefparams() {
		return $this->georefparams;
	}

	/**
	 * Sets the georefparams
	 *
	 * @param string $georefparams
	 * @return void
	 */
	public function setGeorefparams($georefparams) {
		$this->georefparams = $georefparams;
	}

	/**
	 * Returns the processed
	 *
	 * @return boolean $processed
	 */
	public function getProcessed() {
		return $this->processed;
	}

	/**
	 * Sets the processed
	 *
	 * @param boolean $processed
	 * @return void
	 */
	public function setProcessed($processed) {
		$this->processed = $processed;
	}

	/**
	 * Returns the boolean state of processed
	 *
	 * @return boolean
	 */
	public function isProcessed() {
		return $this->processed;
	}

	/**
	 * Returns the isactive
	 *
	 * @return boolean $isactive
	 */
	public function getIsactive() {
		return $this->isactive;
	}

	/**
	 * Sets the isactive
	 *
	 * @param boolean $isactive
	 * @return void
	 */
	public function setIsactive($isactive) {
		$this->isactive = $isactive;
	}

	/**
	 * Returns the boolean state of isactive
	 *
	 * @return boolean
	 */
	public function isIsactive() {
		return $this->isactive;
	}

	/**
	 * Returns the overwrites
	 *
	 * @return integer $overwrites
	 */
	public function getOverwrites() {
		return $this->overwrites;
	}

	/**
	 * Sets the overwrites
	 *
	 * @param integer $overwrites
	 * @return void
	 */
	public function setOverwrites($overwrites) {
		$this->overwrites = $overwrites;
	}

	/**
	 * Returns the adminvalidation
	 *
	 * @return string $adminvalidation
	 */
	public function getAdminvalidation() {
		return $this->adminvalidation;
	}

	/**
	 * Sets the adminvalidation
	 *
	 * @param string $adminvalidation
	 * @return void
	 */
	public function setAdminvalidation($adminvalidation) {
		$this->adminvalidation = $adminvalidation;
	}

	/**
	 * Returns the type
	 *
	 * @return string $type
	 */
	public function getType() {
		return $this->type;
	}

	/**
	 * Sets the type
	 *
	 * @param string $type
	 * @return void
	 */
	public function setType($type) {
		$this->type = $type;
	}

	/**
	 * Returns the clipparams
	 *
	 * @return string $clipparams
	 */
	public function getClipparams() {
		return $this->clipparams;
	}

	/**
	 * Sets the clipparams
	 *
	 * @param string $clipparams
	 * @return void
	 */
	public function setClipparams($clipparams) {
		$this->clipparams = $clipparams;
	}

}