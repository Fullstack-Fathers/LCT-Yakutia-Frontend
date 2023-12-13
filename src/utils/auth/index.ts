import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const attendanceBaseQuery = fetchBaseQuery({
  baseUrl: `http://${import.meta.env.VITE_API_HOST}:${
    import.meta.env.VITE_API_PORT
  }`,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('accessToken');

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});
