import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 text-center">
      <div className="animate-spin rounded-full h-16 mx-auto w-16 border-t-4 border-blue-500 border-solid"></div>
    </div>
  );
};

export default Loading;
