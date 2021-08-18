pragma solidity ^0.4.2;

contract WonkyInuToken {
  // Set total number of tokens
  // Read total number of tokens
  string public name = 'WonkyInuToken';
  string public symbol = 'WINU';
  string public standard = 'WonkyInuToken v1.0';
  uint256 public totalSupply;

  mapping(address => uint256) public balanceOf;

  function WonkyInuToken (uint256 _initialSupply) public {
    balanceOf[msg.sender] = _initialSupply;
    totalSupply = _initialSupply;
  }
}
