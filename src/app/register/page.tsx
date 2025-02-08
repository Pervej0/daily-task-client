"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
// import { toast } from "sonner";
import { z } from "zod";
import { loginBanner } from "@/assets";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password cannot exceed 20 characters"),
});
type FormData = z.infer<typeof formSchema>;

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    if (typeof window !== "undefined" && form.current) {
      console.log("Element:", form.current);
    }
  }, []);

  const onSubmit = (data: FormData) => {
    console.log(data, "xxx");
    // reset();
  };

  return (
    <section
      className="w-full bg-center bg-cover"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .9)), url(${loginBanner})`,
      }}
    >
      <div className="container min-h-screen flex justify-center flex-col items-center">
        <h1 className="text-center text-white md:text-3xl sm:text-2xl text-xl mb-10 font-bold font-serif">
          Register To Create Your Today&apos;s Task
        </h1>
        <div className="md:w-6/12 sm:8/12 w-full mx-auto border p-10 text-white">
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
              {errors.fullName && (
                <p className="text-red-500 text-sm pt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="name">Email</label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm pt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="relative mb-4">
              <Label>Password</Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  {...register("password", { required: true })}
                  placeholder="Enter your password"
                />
                {/* Eye Icon for Show/Hide Password */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
                {errors.password && (
                  <p className="text-red-500 text-sm pt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
            <Button type="submit" className="uppercase px-6 border-2 rounded">
              Login
            </Button>
          </form>
          <div className="pt-4">
            <h4 className="text-md">
              Already have an account?{" "}
              <Link href="/login" className="font-bold underline">
                log in
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
