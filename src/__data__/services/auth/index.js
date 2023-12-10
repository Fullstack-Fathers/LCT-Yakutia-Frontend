import { createApi } from '@reduxjs/toolkit/query';
import { attendanceBaseQuery } from 'src/utils/auth/index.js';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: attendanceBaseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: () => ({
        url: '/auth/login',
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
