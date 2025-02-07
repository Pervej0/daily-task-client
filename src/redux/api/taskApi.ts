import { baseApi } from "./baseApi";

const taskApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTask: builder.mutation({
      query: (data) => ({ url: "/tasks", method: "POST", data }),
    }),
    getAllTasks: builder.query({
      query: () => ({ url: "/tasks", method: "GET" }),
    }),
    getSingleTask: builder.query({
      query: (params) => ({ url: "/task", method: "GET", params }),
    }),
    updateTask: builder.mutation({
      query: ({ data, params }) => ({
        url: "/tasks",
        method: "PUT",
        body: data,
        params,
      }),
    }),
    deleteSingleTask: builder.query({
      query: (params) => ({ url: "/tasks", method: "DELETE", params }),
    }),
  }),
});

export const {} = taskApi;
