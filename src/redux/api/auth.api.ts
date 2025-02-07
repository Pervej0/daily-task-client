import { baseApi } from "./baseApi";

const taskApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMyProfile: build.query({
      query: () => ({ url: "/auth/profile", method: "GET" }),
    }),
    updateMyProfile: build.mutation({
      query: (data) => ({ url: "/auth/profile", method: "GET", data }),
    }),
    forgotPassword: build.mutation({
      query: (data) => ({
        url: "/auth/forgot-password",
        method: "PUT",
        data,
      }),
    }),
    resetPassword: build.mutation({
      query: (data) => ({
        url: "/auth/reset-password",
        method: "PUT",
        data,
      }),
    }),
  }),
});

export const {
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useGetMyProfileQuery,
  useUpdateMyProfileMutation,
} = taskApi;
