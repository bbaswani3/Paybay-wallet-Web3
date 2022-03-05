//https://eth-ropsten.alchemyapi.io/v2/BCZl1v4HiCwKMLWq9L9VRnpAxDo7hpit


require('@nomiclabs/hardhat-waffle');


module.exports={
  solidity:"0.8.0",
  networks:{
    ropsten:{
      url:'https://eth-ropsten.alchemyapi.io/v2/BCZl1v4HiCwKMLWq9L9VRnpAxDo7hpit',
      accounts:['099a683dcf624752535a5e000dcf58712b903e925740bda2928541ee3dffeb65']
    }
  }
}