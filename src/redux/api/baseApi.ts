import axiosBaseQuery from "@/helper/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "http://localhost:8080/api/v1",
  }),
  tagTypes: ["User", "Task"],
  endpoints: () => ({}),
});
