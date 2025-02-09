import axiosBaseQuery from "@/helper/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.BACK_END_URL as string,
  }),
  tagTypes: ["User", "Task"],
  endpoints: () => ({}),
});
