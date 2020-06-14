import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import directoryReducer from "./directory/directoryRedeucer";
import shopReducer from "./shop/shopReducer";
import cartReducer from "./cart/cartReducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  directory: directoryReducer,
  shop: shopReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
