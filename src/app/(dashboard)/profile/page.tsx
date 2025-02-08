"use client";

import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { useGetMyProfileQuery } from "@/redux/api/auth.api";
import Link from "next/link";
import React from "react";

const Profile = () => {
  const { data: profileData, isLoading } = useGetMyProfileQuery(undefined);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="min-h-screen flex items-center justify-center p-6 sm:p-10 md:p-16 lg:p-20 xl:p-24">
          <div className="bg-white shadow-lg rounded-2xl p-6 w-full">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mb-4 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36"></div>
              <h2 className="text-2xl font-semibold text-gray-800 text-center md:text-3xl lg:text-4xl">
                {profileData.data.fullName}
              </h2>
              <p className="text-gray-600 text-center text-sm sm:text-base md:text-lg lg:text-xl">
                {profileData.data.email}
              </p>
              <span className="text-sm sm:text-base md:text-lg text-blue-500 bg-blue-100 px-3 py-1 rounded-full mt-2">
                {profileData.data.role}
              </span>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl mb-4">
                {profileData.data.bio}
              </p>
              <Button className="border bg-black hover:bg-gray-600 text-white">
                <Link href="/update-profile">Update Profile</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
