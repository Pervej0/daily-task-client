/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

"use server";

import { authKey } from "@/constant/authKey";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const setAuthCookieToken = async (token: string, option?: any) => {
  cookies().set(authKey, token, {});
  if (option) {
    redirect(option.redirect);
  }
};

export const removeAuthCookieToken = async (keys: string[]) => {
  keys.forEach((key) => {
    cookies().delete(key);
  });
};

export const getAuthCookieToken = async () => {
  return cookies().get(authKey)?.value;
};
