var Adoption = artifacts.require("Adoption");
var EscrowFactory = artifacts.require("EscrowFactory");

module.exports = function(deployer) {
	deployer.deploy(Adoption);
	deployer.deploy(EscrowFactory);
};

