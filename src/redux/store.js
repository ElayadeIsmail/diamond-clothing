import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"; // <- needed if using firestore
import { createStore } from "redux";
import { createFirestoreInstance } from "redux-firestore"; // <- needed if using firestore
import rootReducer from "./rootReducer";

import { persistStore } from "redux-persist";

const fbConfig = {
  apiKey: "AIzaSyCH2UjDtsu6prQpmSeGKAus8GxmSuLlVi8",
  authDomain: "diamond-clothing-6e591.firebaseapp.com",
  databaseURL: "https://diamond-clothing-6e591.firebaseio.com",
  projectId: "diamond-clothing-6e591",
  storageBucket: "diamond-clothing-6e591.appspot.com",
  messagingSenderId: "1087794633907",
  appId: "1:1087794633907:web:68a0f228d69ebb8efb64c6",
  measurementId: "G-4X09Z5CE3X",
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(fbConfig);

// Initialize other services on firebase instance
firebase.firestore(); // <- needed if using firestore

// Create store with reducers and initial state
const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};

export const persistor = persistStore(store);

export default store;
