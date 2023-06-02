const {ethers} = require('ethers');
const  {expect} = require('chai');


describe("multisig DAO", function () {
  beforeEach(async function () {
                
    // await minter.deployed();
    [owner, user, user1, user2] = await hre.ethers.getSigners();
    const token = await hre.ethers.getContractFactory("Contract");
    const caller = await hre.ethers.getContractFactory("callIt");
        Tokens = await token.deploy();
        Caller = await caller.deploy();
    
})
it("Should be able to transfer", async function(){
   

    console.log("CA: ", Tokens.address)
})
it("Should be able to call fn from target", async function(){
    Caller.callfn(Tokens.address)

    expect(await Tokens.switcher()).to.equal(1)
})


  })
