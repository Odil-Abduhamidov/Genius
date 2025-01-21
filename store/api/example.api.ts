import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";


export const ExampleApi = createApi({
  reducerPath: "ExampleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "fc36131597msh630baeb327394a2p1f7e00jsn4ca0a8d9f1a4"
      );
      headers.set("X-RapidAPI-Host", "genius-song-lyrics1.p.rapidapi.com");

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllSongs: builder.query<any, any>({
      query: () => `/chart/songs/`,
    }),
  }),
});

export const { useGetAllSongsQuery } = ExampleApi;
