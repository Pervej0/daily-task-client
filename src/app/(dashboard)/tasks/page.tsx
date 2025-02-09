/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import {
  useDeleteSingleTaskMutation,
  useGetAllTasksQuery,
} from "@/redux/api/taskApi";
import { PaginationWithLinks } from "@/components/ui/pagination-with-links";
import Link from "next/link";
import { toast, Toaster } from "sonner";

const TasksPage = () => {
  // const [page, setPage] = React.useState(1);
  // const [status, setStatus] = React.useState(null);
  // const [size, setSize] = React.useState<string | null>(null);
  const query: Record<string, string> = {};
  const [deleteSingleTask] = useDeleteSingleTaskMutation();
  const { data: tasksData } = useGetAllTasksQuery({
    ...query,
    limits: 2,
  });

  const handleDelete = async (id: string) => {
    const confirmDelete = window.prompt(
      "Are you sure you want to delete? Type 'yes' to confirm."
    );

    if (confirmDelete?.toLowerCase() === "yes") {
      const result = await deleteSingleTask(id);
      if (result.data.success) {
        toast.success(result.data.message);
      } else {
        toast.error(result.data?.error);
      }
    } else {
      alert("Action canceled!");
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="px-6 w-full">
        <div className="text-center">
          <h1 className="text-2xl py-4">All Tasks</h1>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Titles</TableHead>
              <TableHead>Descriptions</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasksData?.data?.map((item: any, index: number) => (
              <TableRow key={index}>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.dueDate}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>
                  <div className="flex gap-x-1">
                    <Link href={`/tasks/${item.id}`}>
                      <button className="border px-2 py-1 text-xs">Edit</button>
                    </Link>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="border px-2 py-1 text-xs"
                    >
                      Delete
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-8">
          <PaginationWithLinks
            page={1}
            pageSize={tasksData?.meta?.limit || 2}
            totalCount={tasksData?.meta?.total}
            pageSizeSelectOptions={{
              pageSizeOptions: [5, 10, 25, 50],
            }}
          />
        </div>
      </div>
    </>
  );
};

export default TasksPage;
