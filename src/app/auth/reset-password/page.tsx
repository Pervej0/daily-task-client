/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useResetPasswordMutation } from "@/redux/api/auth.api";
import { toast, Toaster } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import {
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/utils/localStorage";
import { authKey } from "@/constant/authKey";
import { removeAuthCookieToken } from "@/utils/validateCookieToken";

const schema = z.object({
  newPassword: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password cannot exceed 20 characters"),
});

type FormData = z.infer<typeof schema>;

const ResetPassword = () => {
  const [resetPassword] = useResetPasswordMutation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("userId");
  const token = searchParams.get("token");

  useEffect(() => {
    if (!token) return;
    setToLocalStorage(authKey, token);
  }, [token]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (values: FormData) => {
    try {
      const res = (await resetPassword({ ...values, id })) as any;
      console.log(res, "xxxxx");
      if (res?.data.success) {
        toast.success(res?.data.message || "Successfully reset has been done!");
        removeFromLocalStorage(authKey);
        removeAuthCookieToken([authKey, "accessToken"]);
        router.push("/login");
      } else {
        toast.error(
          res.error.data.message || "Something Went Wrong, Try Again"
        );
        throw new Error("Something Went Wrong, Try Again");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong, Try Again");
    }
  };

  return (
    <>
      <Toaster />
      <section className="container">
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold text-center mb-4">
              Reset Password
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Enter a secure new password.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Label htmlFor="email">New Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  {...register("newPassword")}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.newPassword
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                />
                {errors.newPassword && (
                  <p className="text-red-500 text-sm pt-1">
                    {errors.newPassword?.message as string}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Reset"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
