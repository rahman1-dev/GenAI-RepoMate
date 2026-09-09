import React, { useState } from "react";
import axios from "axios";
import LoadingAnimation from "../components/LoadingAnimation";
import { useNavigate } from "react-router-dom";
import AnalysisPage from "./AnalysisPage";

const AskQuestionPage = () => {
  const navigate = useNavigate();

  const [userQuery, setUserQuery] = useState("");
  const [queryResp, setQueryResp] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log("This is query response from server::", queryResp);

  const askQuestionFunc = async () => {
    setLoading(true);
    console.log("Analyzing your repo....");
    try {
      const response = await axios.post("http://localhost:8080/askQuery", {
        userQuery,
      });

      navigate("/analysis");
      // console.log(response);
      setQueryResp(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Something went wrong!", error.message);
    }
  };

  return (
    <div className="min-h-[calc(100vh-73px)] bg-stone-50 px-4 py-10 sm:px-8 sm:py-14 lg:px-12">
      <div className="mx-auto flex min-h-[calc(100vh-169px)] max-w-5xl flex-col items-center justify-center rounded-2xl border border-stone-200 bg-white px-5 py-16 text-center shadow-sm sm:px-10">
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-sm font-medium text-blue-600">
            Repository intelligence
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            Ask your codebase anything.
          </h1>
          <p className="mt-3 text-sm leading-6 text-stone-500 sm:text-base">
            Search your repository and get answers grounded in the files that
            matter.
          </p>
        </div>

        <div className="flex w-full max-w-3xl flex-col gap-3 sm:flex-row">
          <input
            value={userQuery}
            onChange={(e) => {
              setUserQuery(e.target.value);
            }}
            className=" h-12 min-w-0 flex-1 rounded-lg border border-stone-300 bg-gray-300 px-4 text-sm text-stone-900 outline-none transition placeholder:text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            type="text"
            placeholder="Ask any queries related to your repository"
          />
          <button
            onClick={() => {
              askQuestionFunc();
            }}
            className="h-12 rounded-lg bg-blue-600 px-7 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-stone-50 active:scale-[0.98] sm:shrink-0"
          >
            Ask
          </button>
        </div>

        {loading ? (
          <div>
            <LoadingAnimation />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default AskQuestionPage;
