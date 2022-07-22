import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_LOCAL_URL}`,
  }),
  endpoints: (builder) => ({
    signupUser: builder.mutation({
      query:user => {
        return {
          url: '',
          method: 'post',
          body: user,
        };
      },
    }),
    signinUser: builder.mutation({
      query: ({ username, password }: { username: string; password: string }) => {
        return {
          url: '/api/token/',
          method: 'post',
          body: { username, password },
        };
      },
    }),
  }),
});
export const { useSignupUserMutation, useSigninUserMutation } = authApi;
