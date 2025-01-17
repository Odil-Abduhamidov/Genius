import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";
import type {
  GetUserByIdResponse,
  LoginUserPayload,
  LoginUserResponse,
  RegisterUserPayload,
  RegisterUserResponse,
} from "./type";

export const AuthApi = createApi({
  reducerPath: "AuthApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getUserById: builder.query<GetUserByIdResponse, number>({
      query: (user_id) => `/user?user_id_${user_id}`,
    }),
    loginUser: builder.mutation<LoginUserPayload, LoginUserResponse>({
      query: (payload) => ({
        url: "/login",
        method: "POST",
        body: payload,
      }),
    }),
    registration: builder.mutation<RegisterUserPayload, RegisterUserResponse>({
      query: (payload) => ({
        url: "/registration",
        method: "POST",
        body: payload,
      }),
    }),
    // updatePost: builder.mutation<>({
    //   query: ({ id, ...patch }) => ({
    //     url: `post/${id}`,
    //     method: 'PATCH',
    //     body: patch,
    //   }),
  }),
});

export const {
  useGetUserByIdQuery,
  useLoginUserMutation,
  useRegistrationMutation,
} = AuthApi;
