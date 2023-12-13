import { createApi } from '@reduxjs/toolkit/query/react';
import { SignInData, SignResponse, SignUpData } from 'src/types/auth';
import { attendanceBaseQuery } from '../../../utils/auth';
import { useAuth } from '../../../hooks/auth/';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: attendanceBaseQuery,
  endpoints: (builder) => ({
    signIn: builder.mutation<SignResponse, SignInData>({
      query: (signInData) => ({
        url: '/auth/login',
        method: 'POST',
        body: {
          email: signInData.email,
          password: signInData.password,
        },
      }),
      transformResponse: (response: SignResponse): SignResponse => {
        const { initSetup } = useAuth();
        initSetup(response.accessToken);
        return response;
      },
    }),
    signUp: builder.mutation<SignResponse, SignUpData>({
      query: (signUpData) => ({
        url: '/auth/registration',
        method: 'POST',
        body: {
          email: signUpData.email,
          name: signUpData.name,
          password: signUpData.password,
        },
      }),
      transformResponse: (response: SignResponse): SignResponse => {
        const { initSetup } = useAuth();
        initSetup(response.accessToken);
        return response;
      },
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = authApi;
