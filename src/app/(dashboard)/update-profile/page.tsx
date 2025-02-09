"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  useGetMyProfileQuery,
  useUpdateMyProfileMutation,
} from "@/redux/api/auth.api";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .optional(),
  email: z.string().email("Invalid email address").optional(),
  bio: z.string().min(6, "Enter your bio"),
});
type FormData = z.infer<typeof formSchema>;

const UpdateProfile = () => {
  const [updateProfile] = useUpdateMyProfileMutation();
  const { data: myProfile } = useGetMyProfileQuery(undefined);
  const form = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (values: any) => {
    const data = {
      fullName: values.fullName || myProfile?.data?.fullName,
      email: values.email || myProfile?.data?.email,
      bio: values.bio || myProfile?.data?.bio,
    };

    const result = await updateProfile(data);
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
          <h1 className="text-2xl text-center">Update Your Profile</h1>
        </div>
        <div className="md:w-6/12 mx-auto">
          <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-3"
          >
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                {...register("fullName")}
              />
            </div>
            <div>
              <label htmlFor="name">Email</label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                {...register("email")}
              />
            </div>
            <div>
              <label htmlFor="name">Bio</label>
              <textarea
                id="bio"
                placeholder="Enter your bio"
                className="w-full border px-2"
                {...register("bio")}
              />
              <span className="text-red-500 text-sm pt-1 min-h-[20px] whitespace-nowrap">
                {errors?.bio?.message}
              </span>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Update Profile"}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
