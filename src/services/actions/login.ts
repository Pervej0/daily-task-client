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
  if (userInfo.success === false) {
    return userInfo;
  }

  return userInfo;
};
