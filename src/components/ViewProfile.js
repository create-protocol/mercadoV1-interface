
import "../assets/css/profile.css";
import bg from "../assets/images/bg.png";
import cir from "../assets/images/cir.jpg";
import Profileaudiolist from "./ProfileAudioList";


import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"

import {
  nftmarketaddress, nftaddress
} from '../config'

import Market from '../abis/Marketplace.json';
import NFT from '../abis/NFT.json';

const Viewprofile = () => {
  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')
  useEffect(() => {
    loadNFTs()
  }, [])
  async function loadNFTs() {
    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
    })
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()

    const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
    const data = await marketContract.fetchMyNFTs()

    const items = await Promise.all(data.map(async i => {
      const tokenUri = await tokenContract.tokenURI(i.tokenId)
      const meta = await axios.get(tokenUri)
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
      let item = {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
      }
      return item
    }))
    setNfts(items)
    setLoadingState('loaded')
  }
  if (loadingState === 'loaded' && !nfts.length) return (<h1 className="py-10 px-20 text-3xl">No assets owned</h1>)
  return (
    <div className="flex justify-center">
      <div className=" my-4 ml-4">
        <div className="m-card-content">
          {
            nfts.map((nft, i) => (
              <div key={i} className="nft-card-container m-2">
                <div className="nft-img-container">
                <img src={nft.image} className="nft-img" />
                </div>
                <div className="p-4 bg-black">
                  <p className="text-2xl font-bold text-white">Price - {nft.price} Eth</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

// const Viewprofile = (props) => {
//   const options = {
//     comPairL: [
//       {
//         key: "AUDIO",
//         component: Profileaudiolist,
//       },
//       {
//         key: "VIDEO",
//         component: Profileaudiolist,
//       },
//       {
//         key: "IMAGE",
//         component: Profileaudiolist,
//       },
//       {
//         key: "3D",
//         component: Profileaudiolist,
//       },
//     ],
//     comPairR: [
//       {
//         key: "RECENT",
//         component: Profileaudiolist,
//       },
//       {
//         key: "POPULAR",
//         component: Profileaudiolist,
//       },
//       {
//         key: "MOST LIKED",
//         component: Profileaudiolist,
//       },
//     ],
//   };
//   const [tabKey, setTabKey] = useState(0);
// //  const [optionKey, setOptionKey] = useState(0);
// //  const [optionComponent, setOptionComponent] = useState(
//   const [optionComponent] = useState(  
//     options.comPairL[0].component
//   );
//   return (
//     <div>
//       <div className="profile-banner" style={{ backgroundImage: `url(${bg})` }}>
//         <div className="profile-banner-mask"></div>
//         <div className="profile-container-circle">
//           <img src={cir} alt="pro" className="profile-img"></img>
//         </div>
//       </div>
//       <div className="profile-details-container">
//         <div className="pair-container">
//           <div>
//             <div className="pair-container">
//               <div className="key-value-pair">
//                 <div className="key">MINTED</div>
//                 <div className="value">21</div>
//               </div>
//               <div className="key-value-pair">
//                 <div className="key">SOLD</div>
//                 <div className="value">19</div>
//               </div>
//             </div>
//             <div className="stats-container">
//               <div className="view-stat">VIEW STATS</div>
//             </div>
//           </div>
//           <div className="key-value-pair">
//             <div className="follow-count" style={{ marginLeft: "10rem" }}>
//               693 FOLLOWERS
//             </div>
//             <div className="follow-btn" style={{ marginLeft: "10rem" }}>
//               FOLLOW
//             </div>
//           </div>
//         </div>
//         <div className="pair-container">
//           <div className="key-value-pair">
//             <div className="follow-count" style={{ marginRight: "10rem" }}>
//               123 FOLLOWING
//             </div>
//             <div className="follow-btn" style={{ marginRight: "10rem" }}>
//               TIP
//             </div>
//           </div>
//           <div>
//             <div className="pair-container">
//               <div className="key-value-pair">
//                 <div className="key">Total</div>
//                 <div className="value">21</div>
//               </div>
//               <div className="key-value-pair">
//                 <div className="key">HIGHEST</div>
//                 <div className="value">19</div>
//               </div>
//             </div>
//             <div className="stats-container">
//               <div className="view-stat">VIEW STATS</div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <div className="profile-details-container">
//         {Object.values(pairs).map((arr, i) => (
//           <div className="pair-container" key={i}>
//             {arr.map((pa, j) => (
//               <div className="key-value-pair" key={i * 10 + j + 1000}>
//                 {pa?.isDiv ? (
//                   <>
//                     {pa.key}
//                     {pa.value}
//                   </>
//                 ) : (
//                   <>
//                     <div className="key">{pa.key}</div>
//                     <div className="value">{pa.value}</div>
//                   </>
//                 )}
//               </div>
//             ))}
//           </div>
//         ))}
//         <div className="stats-container">
//           <div className="view-stat">VIEW STATS</div>
//         </div>
//       </div> */}
//       <div className="intro-contianer">
//         <div className="profile-name">LZY LAD</div>
//         <div className="profile-desc">
//           A TWO LINE SIMPLE BIO ABOUT THE ARTIST, AND THEIR STYLE AND
//           INSPIRATIONS & MOTIVATIONS
//         </div>
//       </div>
//       <div className="profile-tab-container">
//         <div
//           className={tabKey === 0 ? "tab-btn-active" : "tab-btn-inactive"}
//           onClick={() => setTabKey(0)}
//         >
//           CREATIONS
//         </div>
//         <div
//           className={tabKey === 1 ? "tab-btn-active" : "tab-btn-inactive"}
//           onClick={() => setTabKey(1)}
//         >
//           COLLECTIONS
//         </div>
//       </div>

//       {/* <div className="profile-options-container">
//         {Object.values(options).map((arr, i) => (
//           <div className="option-container" key={i}>
//             {arr.map((pa, j) => (
//               <div className="option-item mx-4" key={i * j + Math.random()}>
//                 <div
//                   className={
//                     optionKey === 10 * i + j
//                       ? "option-active"
//                       : "option-inactive"
//                   }
//                   onClick={() => {
//                     setOptionKey(10 * i + j);
//                     setOptionComponent(pa.component);
//                   }}
//                 >
//                   {pa.key}
//                 </div>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div> */}
//       <div className="option-comp-container">{optionComponent}</div>
//     </div>
//   );
// };

export default Viewprofile;
