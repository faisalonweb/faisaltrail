import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const privateApis = createApi({
  reducerPath: 'privateApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_LOCAL_URL}`,
    prepareHeaders: (headers) => {
      headers.append('Content-Type', 'application/json');
      headers.set('Authorization', `Token ${localStorage.getItem('token')}`);
      return headers;
    },
  }),
  /* eslint-disable */
  endpoints: (builder) => ({
    changePasswordRequest: builder.mutation({
      query: (payload) => {
        return {
          url: '/change-password/',
          method: 'patch',
          body: payload,
        };
      },
    }),
  }),
  /* eslint-enable */
});
export const { useChangePasswordRequestMutation } = privateApis;
