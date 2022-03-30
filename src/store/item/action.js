import axios from 'axios';
import {
  FETCH_ITEM_METADATA_INITIAL, FETCH_ITEM_METADATA_SUCCESS, FETCH_ITEM_METADATA_FAILURE,
  FETCH_BID_INITIAL, FETCH_BID_SUCCESS, FETCH_BID_FAILURE, PLACE_BID_INITIAL, PLACE_BID_FAILURE, PLACE_BID_SUCCESS
}
 from './constant';

const MORALIS_API_KEY = 'ElMD1BX3aHki68CAPToKw00tx6W6JdEDru1JAH0NMl2KXGPsEylGW1DetmpGpnip';
const CHAIN = 'eth';

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
        payload: {...res.data, ...JSON.parse(res.data.metadata)}
      })
    } catch(e){
      dispatch({
        type: FETCH_ITEM_METADATA_FAILURE,
        payload: e,
      })
    }
  }
}

export const fetchOngoingBids = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_BID_INITIAL,
      });
    } catch (e) {
      dispatch({
        type: FETCH_BID_FAILURE,
        payload: e,
      });
    }
  }
}

export const placeBid = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: PLACE_BID_INITIAL,
      })
    } catch (e) {
      dispatch({
        type: PLACE_BID_FAILURE,
      })
    }
  }
}
