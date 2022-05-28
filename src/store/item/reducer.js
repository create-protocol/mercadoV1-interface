import {
    FETCH_ITEM_METADATA_INITIAL,
    FETCH_ITEM_METADATA_SUCCESS,
    FETCH_ITEM_METADATA_FAILURE,
    CREATE_BID_INITIAL,
    CREATE_BID_SUCCESS,
    CREATE_BID_FAILURE,
    FETCH_BID_INITIAL,
    FETCH_BID_SUCCESS,
    FETCH_BID_FAILURE,
  } from './constant';


  const initialState = {
    itemData: [],
    itemDataLoading: true,
    itemDataError: false,
    placeBidModalLoading: false,
    placeBidError: null,
    bidData: [],
    bidLoading: false,
  };

  export const itemReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case FETCH_ITEM_METADATA_INITIAL:
        return {
          ...state,
          itemDataLoading: true,
        };
      case FETCH_ITEM_METADATA_SUCCESS:
        return {
          ...state,
          itemData: action.payload,
          itemDataLoading: false,
        };
      case FETCH_ITEM_METADATA_FAILURE:
        return {
          ...state,
          itemDataLoading: false,
          itemDataError: true,
        };
      case FETCH_BID_INITIAL:
       return {
         ...state,
         bidLoading: true,
       };
      case FETCH_BID_SUCCESS:
        return {
          ...state,
          bidLoading: false,
          bidData: action.payload,
        };
      case FETCH_BID_FAILURE:
        return {
          ...state,
          bidLoading: false,
        };
      case CREATE_BID_INITIAL:
        console.log('create bid initial', action.payload);
        return {
          ...state,
          placeBidModalLoading: true,
        };
      case CREATE_BID_SUCCESS:
        console.log('create bid success', action.payload);
        return {
          ...state,
          placeBidModalLoading: false,
        }
      case CREATE_BID_FAILURE:
        return {
          ...state,
          placeBidModalLoading: false,
          placeBidError: action.payload,
        }
    }
    return state;
  };
