import { configureStore } from "@reduxjs/toolkit";
import { SongsApi } from "./api/songs.api";

export const store = configureStore({
  reducer: {
    [SongsApi.reducerPath]: SongsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(SongsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
