import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyProfile: builder.query({
      query: () => ({ url: "/auth/profile", method: "GET" }),
      providesTags: ["User"],
    }),
    updateMyProfile: builder.mutation({
      query: (data) => ({ url: "/auth/profile", method: "PUT", data }),
      invalidatesTags: ["User"],
    }),
    forgotPassword: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/forgot-password",
          method: "PUT",
          contentType: "application/json",
          data: data,
        };
      },
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
