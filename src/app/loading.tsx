import React from "react";

const Loading = () => {
  return (
      <div className="flex items-center justify-center min-h-screen bg-[#1f1f1f]">
        <div className="h-12 w-12 border-4 border-neutral-800 border-t-transparent rounded-full animate-spin" />
      </div>
  );
};

export default Loading;
