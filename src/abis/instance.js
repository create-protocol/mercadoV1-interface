import { ethers } from 'ethers';
import Marketplace from './Marketplace.json';
import NFT from './NFT.json';
import MockERC20 from './MockERC20.json';

// window.provider = new ethers.providers.InfuraProvider("rinkeby", "b81341e3ab894360a84f3fa640ab985e")
window.provider = new ethers.providers.JsonRpcProvider(
  `https://polygon-mainnet.g.alchemy.com/v2/bv51--wKZGYGrXlqxnqJ_rRdz6cR5t-4`
);

window.marketInst = new ethers.Contract('0xCCa142335a0A7C30c757004A883ac74b7c5a4843', Marketplace.abi, window.provider);
window.nftInst = new ethers.Contract('0x639056d4b2fAdAce0aB8392775F5627C5387E7b2', NFT.abi, window.provider);
window.ercInst = new ethers.Contract('0xA8590470d7E7Cf0a1E860c2d30Fa299aE6bd864f', MockERC20.abi, window.provider);
