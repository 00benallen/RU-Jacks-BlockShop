pragma solidity ^0.4.17;

import "./Escrow.sol";

contract EscrowFactory {
	mapping(address => address[]) wallets;

	function getWallets(address _user) public view returns(address[]){
		return wallets[_user];
	}

	function newEscrow (address _owner) payable public returns (address wallet) {
		wallet = new Escrow(msg.sender, _owner);
		wallets[msg.sender].push(wallet);
		if(msg.sender != _owner) {
			wallets[_owner].push(wallet);
		}
		wallet.transfer(msg.value);
	}
}
