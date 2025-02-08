/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { DatePickerDemo } from "@/components/shared/datePicker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCreateTaskMutation } from "@/redux/api/taskApi";
import formattedDate from "@/utils/dateFormatter";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters long"),
  description: z.string().min(5, "Minimum 5 characters long"),
});
type FormData = z.infer<typeof formSchema>;

const AddTask = () => {
  const [date, setDate] = React.useState<Date>();
  const [createTask] = useCreateTaskMutation();
  const form = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: any) => {
    values.dueDate = formattedDate(date);

    const result = await createTask(values);
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
          <h1 className="text-2xl text-center">Add a New Task</h1>
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
              {errors.title && (
                <p className="text-red-500 text-sm pt-1">
                  {errors.title.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <textarea
                id="description"
                placeholder="Enter description"
                className="w-full border px-2 min-h-16"
                {...register("description")}
              />
              {errors.description && (
                <p className="text-red-500 text-sm pt-1">
                  {errors.description.message}
                </p>
              )}
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
              {isSubmitting ? "Sending..." : "Create Task"}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTask;
