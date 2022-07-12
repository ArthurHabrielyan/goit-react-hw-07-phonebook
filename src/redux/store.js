import { configureStore } from "@reduxjs/toolkit";

import filterReducer from "../redux/contact-reducer/filterSlice";
import { contactApi } from "./contact-reducer/contacts";

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactApi.middleware),
});
