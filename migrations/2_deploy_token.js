const WonkyInuToken = artifacts.require("WonkyInuToken");

module.exports = function (deployer) {
  deployer.deploy(WonkyInuToken, 1000000);
};
