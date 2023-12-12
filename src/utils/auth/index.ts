import { fetchBaseQuery } from '@reduxjs/toolkit/query';

export const attendanceBaseQuery = fetchBaseQuery({
  baseUrl: `http://${import.meta.env.API_HOST}:${import.meta.env.API_PORT}`,
});
