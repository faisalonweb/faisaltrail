import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_SERVER_URL}`,
  }),
  endpoints: (builder) => ({
    signupUser: builder.mutation({
      query: (user) => {
        return {
          url: '',
          method: 'POST',
          body: user,
        };
      },
    }),
    signinUser: builder.mutation({
      query: ({ username, password }: { username: string; password: string }) => {
        return {
          url: '/api/token/',
          method: 'POST',
          body: { username, password },
        };
      },
    }),
    requestResetEmail: builder.mutation({
      query: (user) => {
        return {
          url: '/request-reset-email/',
          method: 'POST',
          body: user,
        };
      },
    }),
    forgotPasswordRequest: builder.mutation({
      query: (payload) => {
        return {
          url: '/password-reset-complete/',
          method: 'PATCH',
          body: payload,
        };
      },
    }),
  }),
});
export const {
  useSignupUserMutation,
  useSigninUserMutation,
  useRequestResetEmailMutation,
  useForgotPasswordRequestMutation,
} = authApi;
