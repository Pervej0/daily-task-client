"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { loginBanner } from "@/assets";
import { Toaster, toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { loginUser } from "@/services/actions/login";
import { redirect, useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/auth.service";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(4, "Password must be at least 6 characters")
    .max(20, "Password cannot exceed 20 characters"),
});
type FormData = z.infer<typeof formSchema>;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const form = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    const response: FieldValues = await loginUser(data);

    if (response.success) {
      toast.success("Logged in successfully.");
      router.refresh();
      storeUserInfo(response.data.accessToken);
      redirect("/tasks");
    } else {
      toast.error((response?.message as string) || "something went wrong");
      reset();
    }
  };

  const handleForgot = () => {};

  return (
    <>
      <Toaster />
      <section
        className="w-full bg-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .9)), url(${loginBanner})`,
        }}
      >
        <div className="container min-h-screen flex justify-center flex-col items-center">
          <h1 className="text-center text-white md:text-3xl sm:text-2xl text-xl mb-10 font-bold font-serif">
            Log in To See Your Task
          </h1>
          <div className="w-full md:w-6/12 sm:8/12 h-full mx-auto border p-10 text-white">
            <form
              ref={form}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-3"
            >
              <div>
                <label htmlFor="email">Email</label>
                <Input
                  placeholder="Enter your email"
                  id="email"
                  type="email"
                  {...register("email")}
                />
                <span className="text-red-500 text-sm pt-1 min-h-[20px] whitespace-nowrap">
                  {errors.email?.message}
                </span>
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
                </div>
                <span className="text-red-500 text-sm pt-1 min-h-[20px] whitespace-nowrap">
                  {errors.password?.message}
                </span>
              </div>

              <div className="text-end">
                <button
                  onClick={handleForgot}
                  type="button"
                  className="text-sm"
                >
                  Forgot Password
                </button>
              </div>
              <Button type="submit" className="uppercase px-6 border-2 rounded">
                Login
              </Button>
            </form>
            <div className="pt-4">
              <h4 className="text-md">
                New today?{" "}
                <Link href="/register" className="font-bold underline">
                  create your account
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
