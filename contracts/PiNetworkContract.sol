pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/token/ERC20/SafeERC20.sol";

contract PiNetworkContract {
    // Mapping of user addresses to their Pi Network balances
    mapping (address => uint256) public piBalances;

    // Mapping of user addresses to their Pi Network rewards
    mapping (address => uint256) public piRewards;

    // Event emitted when a user claims their Pi Network rewards
    event ClaimRewards(address indexed user, uint256 amount);

    // Event emitted when a user transfers Pi Network tokens
    event Transfer(address indexed from, address indexed to, uint256 amount);

    // Function to claim Pi Network rewards
    function claimRewards() public {
        uint256 rewardAmount = piRewards[msg.sender];
        piRewards[msg.sender] = 0;
        SafeERC20.transfer(msg.sender, rewardAmount);
        emit ClaimRewards(msg.sender, rewardAmount);
    }

    // Function to transfer Pi Network tokens
    function transfer(address to, uint256 amount) public {
        require(piBalances[msg.sender] >= amount, "Insufficient balance");
        piBalances[msg.sender] -= amount;
        piBalances[to] += amount;
        emit Transfer(msg.sender, to, amount);
    }

    // Function to update Pi Network balances
    function updateBalances(address[] memory users, uint256[] memory amounts) public {
        require(users.length == amounts.length, "Invalid input");
        for (uint256 i = 0; i < users.length; i++) {
            piBalances[users[i]] += amounts[i];
        }
    }

    // Function to update Pi Network rewards
    function updateRewards(address[] memory users, uint256[] memory amounts) public {
        require(users.length == amounts.length, "Invalid input");
        for (uint256 i = 0; i < users.length; i++) {
            piRewards[users[i]] += amounts[i];
        }
    }
}
