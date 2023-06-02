// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

contract callIt {
    address private owner;
    constructor() {
        owner = msg.sender;
    }

    function callfn(address _fn) external {
        (bool success, ) = _fn.call(abi.encodeWithSignature("attempt()"));

        require(success);
    }
}