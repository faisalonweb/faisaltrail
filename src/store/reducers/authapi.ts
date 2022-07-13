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
        firstname,
        lastname,
        email,
        password,
      }: {
        firstname: string;
        lastname: string;
        email: string;
        password: string;
      }) => {
        return {
          url: '/signup/',
          method: 'post',
          body: { firstname, lastname, email, password },
        };
      },
    }),
  }),
});
export const { useSignupUserMutation } = authApi;
