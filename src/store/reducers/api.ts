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
    getTrailById: builder.query({
      query: (id) => {
        return {
          url: `/api/trails/${id}`,
          method: 'get',
        };
      },
    }),
    /* eslint-disable */
    getTrailsByCategoryId: builder.query({
      query: (category_id) => {
        return {
          url: '/api/trails/',
          method: 'get',
          params: { category_id },
        };
      },
    }),
    /* eslint-enable */
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
export const {
  useGetAllTrailsQuery,
  useSearchTrailQuery,
  useGetAllCategoriesQuery,
  useGetTrailByIdQuery,
  useGetTrailsByCategoryIdQuery,
} = appApi;
