pragma solidity ^0.4.17;

//todo: actually confirm that the withdraw is from the correct user
contract Escrow {
	address public creator;
	address public owner;

	modifier onlyOwner {
		require(msg.sender == owner);
		_;
	}

	constructor(address _creator, address _owner) public {
		creator = _creator;
		owner = _owner;
	}

	function info() public view returns(address, address, uint) {
		return (creator, owner, address(this).balance);
	}

	function withdraw() onlyOwner public {
		msg.sender.transfer(address(this).balance);
	}
	
	function deposit(uint256 amount) payable public {
		require(msg.value == amount);
		//nothing here
	}

	function getBalance() public view returns (uint256) {
		return address(this).balance;
	}
}
