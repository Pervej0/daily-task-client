/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { authKey } from "@/constant/authKey";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const setAuthCookieToken = (token: string, option?: any) => {
  cookies().set(authKey, token, {});
  if (option) {
    redirect("/tasks");
  }
};

export const removeAuthCookieToken = (keys: string[]) => {
  keys.forEach((key) => {
    cookies().delete(key);
  });
};

export const getAuthCookieToken = () => {
  return cookies().get(authKey)?.value;
};
