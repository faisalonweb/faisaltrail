import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_LOCAL_URL}`,
  }),
  endpoints: (builder) => ({
    signupUser: builder.mutation({
      query: ({
        first_name,
        last_name,
        email,
        password,
        password2
      }: {
        first_name: string;
        last_name: string;
        email: string;
        password: string;
        password2: string;
      }) => {
        return {
          url:'',
          method: 'post',
          body: { first_name, last_name, email, password,password2 },
        };
      },
    }),
  }),
});
export const { useSignupUserMutation } = authApi;
