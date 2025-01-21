import { configureStore } from "@reduxjs/toolkit";
import { GeniusApi } from "./api/genius.api";
import { ExampleApi } from "./api/example.api";

export const store = configureStore({
  reducer: {
    [ExampleApi.reducerPath]: ExampleApi.reducer,
    [GeniusApi.reducerPath]: GeniusApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(GeniusApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
