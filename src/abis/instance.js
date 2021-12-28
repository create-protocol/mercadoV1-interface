import { ethers } from 'ethers';
import Marketplace from './Marketplace.json';
import NFT from './NFT.json';
import MockERC20 from './MockERC20.json';

// window.provider = new ethers.providers.InfuraProvider("rinkeby", "b81341e3ab894360a84f3fa640ab985e")

// window.provider = new ethers.providers.JsonRpcProvider(
//   `https://polygon-mainnet.g.alchemy.com/v2/bv51--wKZGYGrXlqxnqJ_rRdz6cR5t-4`
// );
window.provider = new ethers.providers.JsonRpcProvider(
  `https://polygon-mumbai.g.alchemy.com/v2/T-sMRF2J8t9nSNy7dBwBFNijlNhhk1ij`
);

// window.marketInst = new ethers.Contract('0xed7ffF856756cd27fee101D486f23553e8e24EaA', Marketplace.abi, window.provider);
// window.nftInst = new ethers.Contract('0x5d10fD561A8Ff2fb1ad67dC209fFB49838EBD63B', NFT.abi, window.provider);
// window.ercInst = new ethers.Contract('0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619', MockERC20.abi, window.provider);


window.marketInst = new ethers.Contract('0x3198322363e49D3DB8143F49A27B1d2e1d50f5ec', Marketplace.abi, window.provider);
window.nftInst = new ethers.Contract('0xeDfdECC2caBD8cd21a6A945dF064fF39d29d27cA', NFT.abi, window.provider);
window.ercInst = new ethers.Contract('0xA8590470d7E7Cf0a1E860c2d30Fa299aE6bd864f', MockERC20.abi, window.provider);







