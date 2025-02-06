import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { tagTypesList } from "./tag-type";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/v1",
  }),
  endpoints: () => ({}),
  //   tagTypes: tagTypesList,
});
