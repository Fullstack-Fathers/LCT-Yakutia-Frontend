import { createApi } from '@reduxjs/toolkit/query/react';
import { attendanceBaseQuery } from '../../../utils/auth';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: attendanceBaseQuery,
  endpoints: (builder) => ({
    login: builder.mutation<any, any>({
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
