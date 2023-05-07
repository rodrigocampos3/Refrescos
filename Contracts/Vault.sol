// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT

//É importante notar que este código em solidity seria a base de um possível "Bridge" entre redes de maneira "manual". 
// A adição deste contrato no repositório é por fins de acompanhamento do desenvolvimento feito pelo grupo, durante os três dias e para escalabilidade a longo prazo do projeto

pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Vault {
    
    address public owner;
    mapping (address => uint256) public balances;
    
    event Deposit(address indexed from, uint256 value);
    event Withdraw(address indexed to, uint256 value);
    
    struct Member{
        // carteira do cliente do contrato
        address client; 
    }

    constructor() {
        owner = msg.sender;
    }

    modifier isOwner() {
        require(msg.sender == owner, "Caller is not owner");
        _;
    }
    
    function deposit(address userWallet) public payable {
        require(msg.value > 0, "Deposit amount must be greater than 0");
        balances[userWallet] += msg.value;
        emit Deposit(userWallet, msg.value);
    }
    
    function withdraw(uint256 amount) public isOwner{
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);
        emit Withdraw(msg.sender, amount);
    }
    
    receive() external payable {
        deposit(msg.sender);
    }
}