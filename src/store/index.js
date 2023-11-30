import { configureStore } from "@reduxjs/toolkit";
import { authReducer, productOrderReducer } from "./reducers";
// import storage from "redux-persist/lib/storage";
// import { persistReducer } from "redux-persist";
// import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

// create root reducer
const rootReducer = {
  productOrder: productOrderReducer,
  auth: authReducer,
};

// const persistConfig = {
//   key: "root",
//   stateReconciler: autoMergeLevel2,
//   version: 1,
//   storage,
// };
// const persistedState = persistReducer(persistConfig, rootReducer);

// setup store
const Store = configureStore({
  reducer: rootReducer,
  // reducer: persistedState
});

export default Store;
