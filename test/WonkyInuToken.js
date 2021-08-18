var WonkyInuToken = artifacts.require("./WonkyInuToken.sol")

contract('WonkyInuToken', function(accounts) {

  it('checks if it initializes the contract with the correct values', function() {
    return WonkyInuToken.deployed().then(function(instance){
      tokenInstance = instance;
      return tokenInstance.name();
    }).then(function(name){
      assert.equal(name,'WonkyInuToken','Name matches')
      return tokenInstance.symbol();
    }).then(function(symbol){
      assert.equal(symbol, 'WINU', 'Symbol matches')
      return tokenInstance.standard();
    }).then(function(standard){
      assert.equal(standard, 'WonkyInuToken v1.0', 'Verison matches')
    });
  });

  it('Set up total supply upon deployment', function() {
    return WonkyInuToken.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.totalSupply();
    }).then(function(totalSupply){
      assert.equal(totalSupply.toNumber(),1000000, 'Total supply equates to 10000000')
      return tokenInstance.balanceOf(accounts[0]); //get balance of first account
    }).then(function(adminBalance){
      assert.equal(adminBalance.toNumber(), 1000000, 'adminBalance equate to _initialSupply')
    });
  });
});
