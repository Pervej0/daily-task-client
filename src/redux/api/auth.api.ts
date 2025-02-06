import { baseApi } from "./baseApi";

const taskApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    generateForgotPassword: build.mutation({
      query: (data) => ({
        url: "/auth/forgot-password",
        method: "PUT",
        data,
      }),
    }),
  }),
});

export const { useGenerateForgotPasswordMutation } = taskApi;
