"use client";

import Loading from "@/components/Loading";
import { useGetMyProfileQuery } from "@/redux/api/auth.api";
import React from "react";

const Profile = () => {
  const { data: proflieData, isLoading } = useGetMyProfileQuery(undefined);
  const user = {
    fullName: "Md Pervej Hossain",
    email: "pervej@example.com",
    role: "Web Developer",
    bio: "Passionate full-stack developer with expertise in Next.js, React, and backend technologies.",
  };

  console.log(proflieData);
  return (
    <div>
      {!isLoading ? (
        <Loading />
      ) : (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 sm:p-10 md:p-16 lg:p-20 xl:p-24">
          <div className="bg-white shadow-lg rounded-2xl p-6 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl w-full">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mb-4 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36"></div>
              <h2 className="text-2xl font-semibold text-gray-800 text-center md:text-3xl lg:text-4xl">
                {user.fullName}
              </h2>
              <p className="text-gray-600 text-center text-sm sm:text-base md:text-lg lg:text-xl">
                {user.email}
              </p>
              <span className="text-sm sm:text-base md:text-lg text-blue-500 bg-blue-100 px-3 py-1 rounded-full mt-2">
                {user.role}
              </span>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl">
                {user.bio}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
