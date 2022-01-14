import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/store";
import { LoginRequest, User, UserResponse } from "../types";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
      baseUrl: "https://k8s.bricks.co/customers",
      prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
          headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
      },
    }),
    endpoints: (builder) => ({
      login: builder.mutation<UserResponse, LoginRequest>({
        query: (body) => {
          return { url: `/email/sign-in`, method: "POST", body };
        },
      }),
  
      user: builder.mutation<User, void>({
        query: () => `/me`,
      }),
    }),
  });
  
  export const { useLoginMutation, useUserMutation } = authApi;
  