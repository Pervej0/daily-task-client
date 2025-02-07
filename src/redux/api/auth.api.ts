import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyProfile: builder.query({
      query: () => ({ url: "/auth/profile", method: "GET" }),
    }),
    updateMyProfile: builder.mutation({
      query: (data) => ({ url: "/auth/profile", method: "PUT", data }),
    }),
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/forgot-password",
        method: "PUT",
        data,
      }),
    }),
    resetPassword: builder.mutation({
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
} = authApi;
