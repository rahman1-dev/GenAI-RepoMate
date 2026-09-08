import React from "react";

const AskQuestionPage = () => {
  return (
    <div className="bg-blue-200 h-auto">
      <div className="flex gap-5 h-10 items-center justify-center mt-10">
        <input
          className="w-[40vw] h-full outline-none bg-gray-200 rounded-sm px-3"
          type="text"
          placeholder="Ask any queries related to your repository"
        />
        <button className="bg-blue-600 px-5 py-2 text-white rounded-sm">
          Ask
        </button>
      </div>
    </div>
  );
};

export default AskQuestionPage;
