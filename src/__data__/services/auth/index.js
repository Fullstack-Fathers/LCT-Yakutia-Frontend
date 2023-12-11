import { createApi } from '@reduxjs/toolkit/query';
import { attendanceBaseQuery } from '../../../utils/auth/index.js';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: attendanceBaseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginData) => ({
        url: '/auth/login',
        method: 'POST',
        body: {
          login: loginData.login,
          password: 'my password',
        },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
