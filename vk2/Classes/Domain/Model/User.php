<?php
namespace SLUB\Vk2\Domain\Model;

use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;
use TYPO3\CMS\Saltedpasswords\Salt\SaltFactory;
use TYPO3\CMS\Saltedpasswords\Utility\SaltedPasswordsUtility;

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
 * User
 */
class User extends \TYPO3\CMS\Extbase\Domain\Model\FrontendUser {

	/**
	 * usergroups
	 *
	 * @var \TYPO3\CMS\Extbase\Persistence\ObjectStorage<\SLUB\Vk2\Domain\Model\UserGroup>
	 */
	protected $usergroup;
	
	/**
	 * crdate
	 *
	 * @var \DateTime
	 */
	protected $crdate;
	
	/**
	 * tstamp
	 *
	 * @var \DateTime
	 */
	protected $tstamp;
	
	/**
	 * disable
	 *
	 * @var bool
	 */
	protected $disable;
	
	/**
	 * firstname
	 *
	 * @var string
	 * @validate NotEmpty
	 */
	protected $firstname = '';
	
	/**
	 * lastname
	 *
	 * @var string
	 * @validate NotEmpty
	 */
	protected $lastname = '';
	
	/**
	 * email
	 *
	 * @var string
	 * @validate NotEmpty
	 */
	protected $email = '';
	
	/**
	 * password
	 *
	 * @var string
	 * @validate NotEmpty
	 */
	protected $password = '';
	
	/**
	 * username
	 *
	 * @var string
	 * @validate NotEmpty
	 */
	protected $username = '';
	
	/**
	 * Get usergroup
	 *
	 * @return ObjectStorage
	 */
	public function getUsergroup() {
		return $this->usergroup;
	}
	
	/**
	 * Set usergroup
	 *
	 * @param ObjectStorage $usergroup
	 * @return User
	 */
	public function setUsergroup(ObjectStorage $usergroup) {
		$this->usergroup = $usergroup;
		return $this;
	}
	
	/**
	 * Add usergroup
	 *
	 * @param UserGroup $usergroup
	 * @return void
	 */
	public function addUsergroup(UserGroup $usergroup) {
		$this->usergroup->attach($usergroup);
	}
	
	/**
	 * Remove usergroup
	 *
	 * @param UserGroup $usergroup
	 * @return void
	 */
	public function removeUsergroup(UserGroup $usergroup) {
		$this->usergroup->detach($usergroup);
	}
	
	/**
	 * Remove all usergroups
	 * @return void
	 */
	public function removeAllUsergroups() {
		$this->usergroup = new ObjectStorage();
	}
	
	/**
	 * @param \DateTime $crdate
	 * @return User
	 */
	public function setCrdate($crdate) {
		$this->crdate = $crdate;
		return $this;
	}
	
	/**
	 * @return \DateTime
	 */
	public function getCrdate() {
		return $this->crdate;
	}
	
	/**
	 * @param \DateTime $tstamp
	 * @return User
	 */
	public function setTstamp($tstamp) {
		$this->tstamp = $tstamp;
		return $this;
	}
	
	/**
	 * @return \DateTime
	 */
	public function getTstamp() {
		return $this->tstamp;
	}
	
	/**
	 * @param boolean $disable
	 * @return User
	 */
	public function setDisable($disable) {
		$this->disable = $disable;
		return $this;
	}
	
	/**
	 * @return boolean
	 */
	public function getDisable() {
		return $this->disable;
	}
	
	/**
	 * Returns the firstname
	 *
	 * @return string $firstname
	 */
	public function getFirstname() {
		return $this->firstName;
	}
	
	/**
	 * Returns the lastname
	 *
	 * @return string $lastname
	 */
	public function getLastname() {
		return $this->lastName;
	}
	
	/**
	 * Returns the email
	 *
	 * @return string $email
	 */
	public function getEmail() {
		return $this->email;
	}
	
	/**
	 * Returns the password
	 *
	 * @return string $password
	 */
	public function getPassword() {
		return $this->password;
	}
	
	/**
	 * Returns the username
	 *
	 * @return string $username
	 */
	public function getUsername() {
		return $this->username;
	}
	
	/**
	 * Sets the firstname
	 *
	 * @param string $firstname
	 * @return void
	 */
	public function setFirstname($firstname) {
		$this->firstname = $firstname;
	}
	
	/**
	 * Sets the lastname
	 *
	 * @param string $lastname
	 * @return void
	 */
	public function setLastname($lastname) {
		$this->lastname = $lastname;
	}
	
	/**
	 * Sets the email
	 *
	 * @param string $email
	 * @return void
	 */
	public function setEmail($email) {
		$this->email = $email;
	}
	
	/**
	 * Sets the password
	 *
	 * @param string $password
	 * @return void
	 */
	public function setPassword($password) {
		$this->password = $password;
	}
	
	/**
	 * Sets the username
	 *
	 * @param string $username
	 * @return void
	 */
	public function setUsername($username) {
		$this->username = $username;
	}
	
	/**
	 * Hash the password of the given user
	 *
	 * @param string $method "md5" or "sha1"
	 * @return void
	 */
	public function hashPassword($method) {
		switch ($method) {
			case 'md5':
				$this->setPassword(md5($this->getPassword()));
				break;
	
			case 'sha1':
				$this->setPassword(sha1($this->getPassword()));
				break;
	
			default:
				if (ExtensionManagementUtility::isLoaded('saltedpasswords')) {
					if (SaltedPasswordsUtility::isUsageEnabled('FE')) {
						$objInstanceSaltedPw = SaltFactory::getSaltingInstance();
						$this->setPassword($objInstanceSaltedPw->getHashedPassword($this->getPassword()));
					}
				}
		}
	}
}