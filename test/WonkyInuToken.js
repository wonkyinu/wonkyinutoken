var WonkyInuToken = artifacts.require("./WonkyInuToken.sol")

contract('WonkyInuToken', function(accounts) {

  it('Set up total supply upon deployment', function() {
    return WonkyInuToken.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.totalSupply();
    }).then(function(totalSupply){
      assert.equal(totalSupply.toNumber(),1000000, 'Total supply equates to 10000000')
    });
  });
})
