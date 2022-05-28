import axios from 'axios';
import { BASE_URL } from './util.js';

let tokenAddr = 2;
let tokenId = 1;
// to get all current bids
export const _getBids = async (payload) => {
  // const { tokenId, tokenAddr } = payload;
  const res = await axios({
    method: 'get',
    url: `${BASE_URL}/api/offer/get-bids/${tokenAddr}/${tokenId}`,
  });
  return res;
}


// to create a bid
export const _createBid = async (payload) => {
   const {  ...data } = payload;
  const res = await axios({
    method: 'post',
    url: `${BASE_URL}/api/offer/create-bid/${tokenAddr}/${tokenId}`,
    data: data
  });
  return res;
}

// to list NFT for a sale
export const _listForSell = async (payload) => {
  const {  ...data } = payload;
  const res = await axios({
    method: 'post',
    url: `${BASE_URL}/api/offer/list-sale/${tokenAddr}/${tokenId}`,
    data: data
  });
  return res;
}
