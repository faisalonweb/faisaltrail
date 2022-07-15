import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_SERVER_URL}`,
    prepareHeaders: (headers) => {
      headers.append('Content-Type', 'application/json');
      headers.set('Authorization', `Token ${process.env.REACT_APP_MASTER_KEY}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    signupUser: builder.mutation({
      query: ({
        first_name,
        last_name,
        email,
        password,
      }: {
        first_name: string;
        last_name: string;
        email: string;
        password: string;
      }) => {
        return {
          url: '/signup/',
          method: 'post',
          body: { first_name, last_name, email, password },
        };
      },
    }),
  }),
});
export const { useSignupUserMutation } = authApi;
