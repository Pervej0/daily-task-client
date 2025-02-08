import { FieldValues } from "react-hook-form";

export const registerUser = async (data: FieldValues) => {
  console.log(data, "xpxpxc");
  const response = await fetch(`${process.env.BACK_END_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
    cache: "no-store",
  });

  const result = await response.json();
  return result;
};
