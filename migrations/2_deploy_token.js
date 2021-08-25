const WonkyInuToken = artifacts.require("WonkyInuToken");
var WonkyInuTokenSale = artifacts.require("./WonkyInuTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(WonkyInuToken, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(WonkyInuTokenSale, WonkyInuToken.address, tokenPrice);
  });
};
