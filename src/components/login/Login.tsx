"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
// import { toast } from "sonner";
import { z } from "zod";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Please, enter valid message"),
});
type FormData = z.infer<typeof formSchema>;

const Login = () => {
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
    <section>
      <div className="container">
        <h1 className="text-center text-2xl">Login</h1>
        <div className="md:w-6/12 sm:8/12 w-full mx-auto border p-10">
          <form>
            <form
              ref={form}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-3"
            >
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" {...register("fullName")} />
                {errors.fullName && (
                  <p className="text-red-500 text-sm pt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="name">Email</label>
                <Input id="email" type="email" {...register("email")} />
                {errors.email && (
                  <p className="text-red-500 text-sm pt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <Button type="submit" className="uppercase px-6 border-2 rounded">
                Send Message
              </Button>
            </form>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
