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
    CREATE_LISTING_INITIAL,
    CREATE_LISTING_SUCCESS,
    CREATE_LISTING_FAILURE,
  } from './constant';


  const initialState = {
    itemData: [],
    itemDataLoading: true,
    itemDataError: false,
    placeBidModalLoading: false,
    placeBidError: null,
    bidData: [],
    bidLoading: false,
    listingLoading: true,
    listingError: null,
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
        return {
          ...state,
          placeBidModalLoading: true,
        };
      case CREATE_BID_SUCCESS:
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
      case CREATE_LISTING_INITIAL:
        return {
          ...state,
          listingLoading: true,
        }
      case CREATE_LISTING_SUCCESS:
        console.log(action.payload);
        return {
          ...state,
          listingLoading: false,
        }
      case CREATE_LISTING_FAILURE:
        return {
          ...state,
          listingLoading: false,
        }
    }
    return state;
  };
