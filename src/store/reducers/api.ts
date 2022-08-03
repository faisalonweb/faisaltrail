import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_LOCAL_URL}`,
  }),
  endpoints: (builder) => ({
    getAllTrails: builder.query({
      query: () => ({ url: '/api/trails/' }),
    }),
    getAllCategories: builder.query({
      query: () => ({ url: '/api/categories/' }),
    }),
    searchTrail: builder.query({
      query: (title) => {
        return {
          url: '/api/trails/',
          method: 'get',
          params: { title },
        };
      },
    }),
  }),
  
  
});
export const { useGetAllTrailsQuery, useSearchTrailQuery, useGetAllCategoriesQuery } = appApi;
