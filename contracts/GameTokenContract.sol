pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/token/ERC20/SafeERC20.sol";

contract GameTokenContract {
    // Mapping of user addresses to their game token balances
    mapping (address => uint256) public gameTokenBalances;

    // Mapping of user addresses to their game token allowances
    mapping (address => mapping (address => uint256)) public gameTokenAllowances;

    // Event emitted when a user transfers game tokens
    event Transfer(address indexed from, address indexed to, uint256 amount);

    // Event emitted when a user approves game token allowance
    event Approval(address indexed owner, address indexed spender, uint256 amount);

    // Function to transfer game tokens
    function transfer(address to, uint256 amount) public {
        require(gameTokenBalances[msg.sender] >= amount, "Insufficient balance");
        gameTokenBalances[msg.sender] -= amount;
        gameTokenBalances[to] += amount;
        emit Transfer(msg.sender, to, amount);
    }

    // Function to approve game token allowance
    function approve(address spender, uint256 amount) public {
        gameTokenAllowances[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
    }

    // Function to transfer game tokens from another address
    function transferFrom(address from, address to, uint256 amount) public {
        require(gameTokenAllowances[from][msg.sender] >= amount, "Insufficient allowance");
        require(gameTokenBalances[from] >= amount, "Insufficient balance");
        gameTokenBalances[from] -= amount;
        gameTokenBalances[to] += amount;
        gameTokenAllowances[from][msg.sender] -= amount;
        emit Transfer(from, to, amount);
    }

    // Function to mint new game tokens
    function mint(address to, uint256 amount) public {
        gameTokenBalances[to] += amount;
        emit Transfer(address(0), to, amount);
    }

    // Function to burn game tokens
    function burn(uint256 amount) public {
        require(gameTokenBalances[msg.sender] >= amount, "Insufficient balance");
        gameTokenBalances[msg.sender] -= amount;
        emit Transfer(msg.sender, address(0), amount);
    }
}
