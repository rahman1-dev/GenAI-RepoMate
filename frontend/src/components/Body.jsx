import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";
import LoadingAnimation from "./LoadingAnimation";

const Body = () => {
  const [gitHubUrl, setGitHubUrl] = useState("");
  const [responseOfIndex, setResponseOfIndex] = useState("");
  const [loading, setLoading] = useState(false);

  //  indexing the repo
  const indexRepo = async () => {
    console.log("Indexing the rep...");
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8080/add-repo", {
        gitHubUrl,
      });
      setLoading(false);
      console.log(response?.data);
      setResponseOfIndex(response?.data);
      // console.log(response.data.msg) Repo indexed successfully
    } catch (error) {
      console.log("Something went wrong!", error.message);
    }
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-sm font-medium text-blue-600">
          Repository workspace
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
          Your repositories, in one place.
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-stone-500 sm:text-base">
          Add a GitHub repository to get started.
        </p>
      </div>

      <div className="mt-8 flex justify-center sm:mt-10">
        <div className="flex w-full max-w-2xl flex-col gap-3 sm:flex-row">
          <input
            value={gitHubUrl}
            onChange={(e) => {
              setGitHubUrl(e.target.value);
            }}
            className="h-12 min-w-0 flex-1 rounded-lg border border-stone-300 bg-white px-4 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            type="text"
            placeholder="https://github.com/owner/repo"
          />
          <button
            onClick={() => {
              indexRepo();
            }}
            className="h-12 rounded-lg bg-blue-600 px-7 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-stone-50 sm:shrink-0"
          >
            Add
          </button>
        </div>
      </div>

      {/* Cards */}
      {/* <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div> */}

      {loading ? (
        <LoadingAnimation />
      ) : (
        <div className="mt-12 bg-blue-200 rounded-2xl h-[30vh] w-full flex flex-col items-center justify-center">
          <h1 className="text-2xl font-semibold">{responseOfIndex?.msg}</h1>
          <h2>Now you can ask any questions related to this repository</h2>
        </div>
      )}
    </main>
  );
};

export default Body;
