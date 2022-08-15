import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const privateApi = createApi({
  reducerPath: 'privateApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_LOCAL_URL}`,
    prepareHeaders: (headers) => {
      headers.append('Content-Type', 'application/json');
      headers.set('Authorization', `Token ${process.env.REACT_APP_MASTER_KEY}`);
      return headers;
    },
  }),
  /* eslint-disable */
  endpoints: (builder) => ({
    requestResetEmail: builder.mutation({
      query: (user) => {
        return {
          url: '/request-reset-email/',
          method: 'post',
          body: user,
        };
      },
    }),
    forgotPasswordRequest: builder.mutation({
      query: (payload) => {
        return {
          url: '/password-reset-complete/',
          method: 'patch',
          body: payload,
        };
      },
    }),
  }),
  /* eslint-enable */
});
export const { useRequestResetEmailMutation, useForgotPasswordRequestMutation } = privateApi;
