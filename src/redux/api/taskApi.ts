import { baseApi } from "./baseApi";

const taskApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTask: builder.mutation({
      query: (data) => ({ url: "/tasks", method: "POST", data }),
      invalidatesTags: ["Task"],
    }),
    getAllTasks: builder.query({
      query: () => ({ url: "/tasks", method: "GET" }),
      providesTags: ["Task"],
    }),
    getSingleTask: builder.query({
      query: (params) => ({ url: `/tasks/${params}`, method: "GET" }),
    }),
    updateTask: builder.mutation({
      query: ({ data, params }) => ({
        url: `/tasks/${params}`,
        method: "PUT",
        data: data,
      }),
      invalidatesTags: ["Task"],
    }),
    deleteSingleTask: builder.mutation({
      query: (params) => {
        console.log(params);
        return { url: `/tasks/${params}`, method: "DELETE" };
      },
      invalidatesTags: ["Task"],
    }),
  }),
});

export const {
  useCreateTaskMutation,
  useGetAllTasksQuery,
  useGetSingleTaskQuery,
  useUpdateTaskMutation,
  useDeleteSingleTaskMutation,
} = taskApi;
