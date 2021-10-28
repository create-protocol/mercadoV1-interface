import React from "react";
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal";
import "../assets/css/nft.css";
import Market from '../abis/Marketplace.json';
import NFT from '../abis/NFT.json';
import { nftmarketaddress, nftaddress } from '../config'
import HorizontalScroller from 'react-horizontal-scroll-container';


function Nftslist() {
  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')
  useEffect(() => {
    loadNFTs()
  }, [])
  async function loadNFTs() {
    const provider = new ethers.providers.JsonRpcProvider(`https://polygon-mumbai.g.alchemy.com/v2/klOlNm_rQCabx94IjAdS_ZBHzNCkRXFX`)
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
    const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, provider)
    const data = await marketContract.fetchMyNFTs()
    const items = await Promise.all(data.map(async i => {
      const tokenUri = await tokenContract.tokenURI(i.tokenId)
      const meta = await axios.get(tokenUri)
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
      let item = {
        price,
        itemId: i.itemId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        name: meta.data.name,
        description: meta.data.description,
      }
      return item
    }))
    console.log(items)
    setNfts(items)
    setLoadingState('loaded')
  }
  async function buyNft(nft) {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)

    const price = ethers.utils.parseUnits(nft.price.toString(), 'ether')
    const transaction = await contract.createMarketSale(nftaddress, nft.itemId, {
      value: price
    })
    await transaction.wait()
    loadNFTs()
  }
  if (loadingState === 'loaded' && !nfts.length) return (<h1 className="px-20 py-10 text-3xl">No items in marketplace</h1>)
  return (
    <div className="flex justify-center">
      <div className="px-4" style={{ maxWidth: '1600px' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {
            nfts.map((nft, i) => (
              <HorizontalScroller>
                <div key={i} className="border shadow rounded-xl overflow-hidden">
                  <img src={nft.image} alt="file" />
                  <div className="p-4">
                    <p style={{ height: '64px' }} className="text-2xl font-semibold">{nft.name}</p>
                    <div style={{ height: '70px', overflow: 'hidden' }}>
                      <p className="text-gray-400">{nft.description}</p>
                    </div>
                  </div>
                  <div className="p-4 bg-black">
                    <p className="text-2xl mb-4 font-bold text-white">{nft.price} ETH</p>
                    <button className="w-full bg-pink-500 text-white font-bold py-2 px-12 rounded" onClick={() => buyNft(nft)}>Buy</button>
                  </div>
                </div>
              </HorizontalScroller>
            ))
          }
        </div>
      </div>
    </div>
  )
}








// const Nftslist = (props) => {

//   const [nfts, setNfts] = useState([])
//   const [sold, setSold] = useState([])
//   const [loadingState, setLoadingState] = useState('not-loaded')
//   useEffect(() => {
//     loadNFTs()
//   }, [])
//   async function loadNFTs() {
//     const web3Modal = new Web3Modal({
//       network: "mainnet",
//       cacheProvider: true,
//     })
//     const connection = await web3Modal.connect()
//     const provider = new ethers.providers.Web3Provider(connection)
//     const signer = provider.getSigner()

//     const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
//     const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)

//     const data = await marketContract.fetchMarketItems()

//     const items = await Promise.all(data.map(async i => {
//       const tokenUri = await tokenContract.tokenURI(i.tokenId)
//       const meta = await axios.get(tokenUri)
//       let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
//       let item = {
//         price,
//         tokenId: i.tokenId.toNumber(),
//         seller: i.seller,
//         owner: i.owner,
//         sold: i.sold,
//         image: meta.data.image,
//       }
//       return item

//     }
//     ))
//     console.log("Token listed for sale.");
//     /* create a filtered array of items that have been sold */
//     const soldItems = items.filter(i => i.sold)
//     setSold(soldItems)
//     setNfts(items)
//     setLoadingState('loaded')
//   }



//   if (loadingState === 'loaded' && !nfts.length) return (<h1 className="py-10 px-20 text-3xl">No assets created</h1>)
//   return (
//     <div>
//       <div className="p-4">
//         <h2 className="text-2xl py-2">Items Created</h2>
//           {/* {
//             nfts.map((nft, i) => (
//               <div key={i} className="border shadow rounded-xl overflow-hidden">
//                 <img src={nft.image} className="rounded" alt="" style={{width: 500, height: 70}} />
//                 <div className="p-4 bg-black">
//                   <p className="text-2xl font-bold text-white">Price - {nft.price} Eth</p>
//                 </div>
//               </div>
//             ))
//           } */}
//           <div className=" my-4 ml-4 ">
//           <div className="m-card-content ">
//           {
//             nfts.map((nft, i) => (                
//                   <div key={i} className=" nft-card-container m-2">
//                     <div className="nft-img-container">
//                       <img className="nft-img" src={nft.image} alt="logo"></img>
//                     </div>
//                   </div>              
//               ))
//           }
//           </div>
//         </div>
//       </div>
//       <div className="px-4">
//         {
//           Boolean(sold.length) && (
//             <div>
//               <h2 className="text-2xl py-2">Items sold</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
//                 {
//                   sold.map((nft, i) => (
//                     <div key={i} className="border shadow rounded-xl overflow-hidden">
//                       <img src={nft.image} className="rounded" alt="" />
//                       <div className="p-4 bg-black">
//                         <p className="text-2xl font-bold text-white">Price - {nft.price} Eth</p>
//                       </div>
//                     </div>
//                   ))
//                 }
//               </div>
//             </div>
//           )
//         }
//       </div>
//     </div>
//   )

// const { sqr, cir } = props;
// const list = [
//   {
//     title: "GREEN MANDALA",
//     logo: sqr,
//     rating: "3.33Ξ",
//     author: "LZY.LAD",
//     authorImg: cir,
//   },
//   {
//     title: "JOSH WEIDE",
//     logo: amaz,
//     rating: "1.27Ξ",
//     author: "SMRPN",
//     authorImg: pretty5,
//   },
//   {
//     title: "ROBERT CARRY",
//     logo: battle4,
//     rating: "0.25Ξ",
//     author: "GITE",
//     authorImg: pretty1,
//   },
// ];
// return list.map((nft, i) => (
//   <div key={i} className=" m-4">
//     <Nftcontainer {...nft}></Nftcontainer>
//   </div>
// ));
// };

export default Nftslist;
