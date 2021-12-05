pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BCRToken is ERC20 {
    address private _owner;
    
    modifier onlyOwner() {
        require(_owner == _msgSender() , "Ownable: caller is not the owner");
        _;
    }

    constructor() public ERC20("BCRToken", "BCR") {
        address msgSender = _msgSender();
        _owner = msgSender;
        _mint(msg.sender, 10000*10**6);
    }

    function mint(address to, uint256 amount) external onlyOwner virtual {
        _mint(to, amount);
    }

    function changeOwner(address _newOwner) external onlyOwner virtual {
        _owner = _newOwner;
    }

    function burn(uint256 amount) external virtual {
        _burn(_msgSender(), amount);
    }

    function decimals() public view override virtual returns (uint8) {
        return 6;
    }


}