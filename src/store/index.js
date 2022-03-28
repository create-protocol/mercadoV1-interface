import { createStore, combineReducers, applyMiddleware } from "redux";
import { walletReducer } from "./wallet/walletReducer";
import { profileReducer } from "./profile/reducer";
import thunk from "redux-thunk"

export * from './wallet';

const reducers = combineReducers({
  wallet : walletReducer,
  profile: profileReducer,
})

export const store = createStore(reducers,{},applyMiddleware(thunk));


// npm i redux react-redux redux-thunk