import React from "react";

const LoadingAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-10 mt-10">
      {/* Spinner */}
      <div className="relative h-14 w-14">
        <div className="absolute inset-0 rounded-full border-4 border-gray-200" />
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-indigo-500" />
      </div>
      {/* Loading text */}
      <div className="text-center">
        <p className="text-sm font-semibold text-gray-800">Please wait</p>
        {/* Animated dots */}
        <div className="mt-1 flex justify-center gap-1">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-indigo-500 [animation-delay:-0.3s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-indigo-500 [animation-delay:-0.15s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-indigo-500" />
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
