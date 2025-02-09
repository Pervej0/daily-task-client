/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { DatePickerDemo } from "@/components/shared/datePicker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  useGetSingleTaskQuery,
  useUpdateTaskMutation,
} from "@/redux/api/taskApi";
import formattedDate from "@/utils/dateFormatter";
import React, { use, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";

const UpdateTask = ({ params }: { params: Promise<{ id: string }> }) => {
  const [date, setDate] = React.useState<Date>();
  const [updateTask] = useUpdateTaskMutation();
  const { id } = use(params);
  const { data: task } = useGetSingleTaskQuery(id);
  const form = useRef<HTMLFormElement>(null);

  const defaultValues = React.useMemo(
    () => ({
      title: task?.data?.title,
      description: task?.data?.description,
    }),
    [task?.data?.title, task?.data?.description]
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({ defaultValues });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  const onSubmit = async (values: any) => {
    values.title = values.title || task.data.title;
    values.description = values.description || task.data.description;
    values.dueDate = values.dueDate ? formattedDate(date) : task.data.dueDate;
    console.log(values);
    const result = await updateTask({ data: { ...values }, params: id });
    if (result.data.success) {
      toast.success(result.data.message);
    } else {
      toast.error(result.data?.error);
    }
  };

  return (
    <>
      <Toaster />
      <div className="w-full">
        <div className="py-6">
          <h1 className="text-2xl text-center">Update The Task</h1>
        </div>
        <div className="md:w-6/12 sm:8/12 w-full mx-auto border p-10">
          <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-3"
          >
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="Enter title"
                {...register("title")}
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <textarea
                id="description"
                placeholder="Enter description"
                className="w-full border px-2 min-h-16"
                {...register("description")}
              />
            </div>
            <div>
              <Label>Select Date (YYYY-MM-DD)</Label>
              <DatePickerDemo date={date} setDate={setDate} />
            </div>
            <Button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Update Task"}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateTask;
