import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const authToken = localStorage.getItem('token')

export const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_LOCAL_URL}`,
  prepareHeaders: (headers) => {
    headers.append('Content-Type', 'application/json');
    headers.set('Authorization', `Token ${authToken}`);
    return headers;
  },
}),
  
  endpoints: (builder) => ({
    getAllTrails: builder.query({
      query: () => ({ url: '/api/trails/' }),
    }),
  }),
});
export const { useGetAllTrailsQuery } = appApi;
