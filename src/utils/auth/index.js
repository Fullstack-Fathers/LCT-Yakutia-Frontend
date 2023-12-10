import { fetchBaseQuery } from '@reduxjs/toolkit/query';

export const attendanceBaseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8080',
});
