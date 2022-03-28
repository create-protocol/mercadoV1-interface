import axios from 'axios';
import {
  GET_PROFILE_NFT_INITIAL, GET_PROFILE_NFT_SUCCESS, GET_PROFILE_NFT_FAILURE
} from './constant';
const apiKey = 'sUFA8R6qs3OkJxrY9riiWlH_s7GJvfbH';
export const getWalletNfts = (payload) => {
    
    return async (dispatch) => {
        const {ownerAddr } = payload || null;
        try {
          dispatch({
            type: GET_PROFILE_NFT_INITIAL
          });

          const res = await axios.get(`https://eth-mainnet.alchemyapi.io/v2/${apiKey}/getNFTs/?owner=${ownerAddr}`);
            
          dispatch({
            type: GET_PROFILE_NFT_SUCCESS,
            data: res.data,
          });
        } catch (e) {
          dispatch({
            type: GET_PROFILE_NFT_FAILURE
          });
        }
    }
};