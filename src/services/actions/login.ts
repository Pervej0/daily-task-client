import { redirect } from "next/navigation";
import { FieldValues } from "react-hook-form";

export const loginUser = async (data: FieldValues) => {
  const response = await fetch(`${process.env.BACK_END_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
    cache: "no-store",
  });
  const userInfo = await response.json();
  console.log(userInfo, "pxpxxpxp");
  if (userInfo.success === false) {
    return userInfo;
  }
  if (userInfo.data.accessToken) {
    redirect("/tasks");
  }
  return userInfo;
};
