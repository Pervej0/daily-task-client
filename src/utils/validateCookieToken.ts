"use server";

import { authKey } from "@/constant/authKey";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const setAuthCookieToken = async (token: string, option?: any) => {
  (await cookies()).set(authKey, token, {});
  if (option) {
    redirect(option.redirect);
  }
};

export const removeAuthCookieToken = async (keys: string[]) => {
  await Promise.all(
    keys.map(async (key) => {
      await (await cookies()).delete(key);
    })
  );
};

export const getAuthCookieToken = async () => {
  return (await cookies()).get(authKey)?.value;
};
