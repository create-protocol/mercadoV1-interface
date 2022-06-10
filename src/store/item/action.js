import axios from 'axios';
import {
  FETCH_ITEM_METADATA_INITIAL, FETCH_ITEM_METADATA_SUCCESS, FETCH_ITEM_METADATA_FAILURE,
  FETCH_BID_INITIAL, FETCH_BID_SUCCESS, FETCH_BID_FAILURE, PLACE_BID_INITIAL, PLACE_BID_FAILURE, PLACE_BID_SUCCESS,
  FETCH_NFT_PRICE_INITIAL, FETCH_NFT_PRICE_SUCCESS, FETCH_NFT_PRICE_FAILURE,CREATE_BID_INITIAL, CREATE_BID_FAILURE,
  CREATE_BID_SUCCESS, CREATE_LISTING_INITIAL, CREATE_LISTING_SUCCESS, CREATE_LISTING_FAILURE,
}
  from './constant';
import { _getBids, _createBid, _listForSale } from '../../api/nft.api.js';



const apiKey = '2Zm5wkjGQ-C6p3FjMYs5f_SJuvgW7rdY';
const MORALIS_API_KEY = 'ElMD1BX3aHki68CAPToKw00tx6W6JdEDru1JAH0NMl2KXGPsEylGW1DetmpGpnip';
const CHAIN = 'eth';
const MARKET_PLACE = 'opensea';

// to get nft details of a particular NFT
export const fetchItemMetaData = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_ITEM_METADATA_INITIAL,
      });
      const { collection, id } = payload || null;
      const res = await axios.get('https://deep-index.moralis.io/api/v2/nft/' + collection + '/' + id + `?chain=${CHAIN}`,
        { 'headers': { "X-API-Key": MORALIS_API_KEY } });
      dispatch({
        type: FETCH_ITEM_METADATA_SUCCESS,
        payload: { ...res.data, ...JSON.parse(res.data.metadata) }
      })
      console.log('this is the collection id', collection, id)
      const priceUrl = 'https://deep-index.moralis.io/api/v2/nft/' + collection + '/lowestprice?chain=eth&marketplace=opensea';
      console.log(priceUrl, 'this is the price url');
      const price = await axios.get(priceUrl,
        { 'headers': { "X-API-Key": MORALIS_API_KEY } });
      console.log('price is dispatched', price);
    } catch (e) {
      dispatch({
        type: FETCH_ITEM_METADATA_FAILURE,
        payload: e,
      })
    }
  }
}


// to get total nfts of a wallet
export const getNftById = (payload) => {
  return async (dispatch) => {
    const ownerAddr = payload.ownerAddr || null;
    const tokenId = payload.tokenId || 1;
    try {
      dispatch({
        type: FETCH_ITEM_METADATA_INITIAL,
      });

      const res = await axios.get(`https://eth-kovan.alchemyapi.io/v2/${apiKey}/getNFTMetadata/?contractAddress=${ownerAddr}&tokenId=${tokenId}`);
      console.log(res);
      dispatch({
        type: FETCH_ITEM_METADATA_SUCCESS,
        payload: res.data
      });
    }
    catch (e) {
      dispatch({
        type: FETCH_ITEM_METADATA_FAILURE
      });
    }
  }
}


//
// export const fetchNftPrice = (payload) => {
//   return async (dispatch) => {
//     try {
//       dispatch({
//         type: FETCH_NFT_PRICE_INITIAL,
//       })
//     } catch (e) {
//
//     }
//   }
// }

export const fetchOngoingBids = (payload) => {
  return async (dispatch) => {
    try {
      const { tokenAddr, tokenId } = payload || null;
      dispatch({
        type: FETCH_BID_INITIAL,
      });
      const data = await _getBids({ tokenAddr: 2, tokenId: 1 });
      console.log('on going bids fetched', data);
      dispatch({
        type: FETCH_BID_SUCCESS,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: FETCH_BID_FAILURE,
        payload: e,
      });
    }
  }
}

export const createBid = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: CREATE_BID_INITIAL,
      })
      console.log(payload, 'this is the payload');
      const data = await _createBid(payload);
      console.log('create bid is successfull with response', data);
      dispatch({
        type: CREATE_BID_SUCCESS,
        payload: data,
      });
    } catch (e) {
      console.log('failed to create a bid');
      dispatch({
        type: CREATE_BID_FAILURE,
        payload: e,
      })
    }
  }
}

export const createListing = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: CREATE_LISTING_INITIAL,
      })
      console.log(payload, 'this is the payload');
      const data = await _listForSale(payload);
      console.log('create bid is successfull with response', data);
      dispatch({
        type: CREATE_LISTING_SUCCESS,
        payload: data,
      });
    } catch (e) {
      console.log('failed to create a bid');
      dispatch({
        type: CREATE_LISTING_FAILURE,
        payload: e,
      })
    }
  }
}
