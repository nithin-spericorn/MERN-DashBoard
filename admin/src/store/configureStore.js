import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import api from "./middleware/apiMiddleware";

export default function () {
  return configureStore({
    reducer: rootReducer,
    middleware:[
      ...getDefaultMiddleware({
        serializableCheck: false,
      }),
      api,
    ],
    // middleware:(getDefaultMiddleware) => [...getDefaultMiddleware({
    //   serializableCheck: false,
    // }), api],
    //devTools: process.env.NODE_ENV === "development" ,
  });
}
