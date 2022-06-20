import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import ITrailData from 'src/utils/interfaces/Trail';

export const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_BASE_URL}` }),
  endpoints: (builder) => ({
    getAllTrails: builder.query<ITrailData[], Record<string, never>>({
      query: () => ({ url: '/trails' }),
    }),
  }),
});
export const { useGetAllTrailsQuery } = appApi;
