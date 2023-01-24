import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import tokenReducer from "../features/token/tokenSlice";
import queryReducer from "../features/query/querySlice";
import filterReducer from "../features/filter/filterSlice";
import viewReducer from "../features/view/viewSlice";
export const store = configureStore({
  reducer: {
    token: tokenReducer,
    query: queryReducer,
    filter: filterReducer,
    view: viewReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
