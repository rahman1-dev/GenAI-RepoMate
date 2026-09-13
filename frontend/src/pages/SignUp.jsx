import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpHandler = async (e) => {
    e.preventDefault();
    console.log("SigningUp....");

    try {
      await axios.post("http://localhost:8080/api/auth/signup", {
        username,
        email,
        password,
      });
      console.log("Registration successfull");

      navigate("/signin");
    } catch (error) {
      console.log("Something went wrong:", error.error.message);
    }
  };

  return (
    <main className="min-h-[calc(100vh-73px)] bg-stone-50 px-4 py-10 sm:px-8 sm:py-14">
      <section className="mx-auto w-full max-w-md rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-8">
          <p className="mb-3 text-sm font-medium text-blue-600">
            Repository workspace
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-stone-900">
            Create your account
          </h1>
          <p className="mt-3 text-sm leading-6 text-stone-500">
            Set up your repoMate workspace.
          </p>
        </div>

        <form onSubmit={signUpHandler} className="space-y-5">
          <div>
            <label
              className="mb-2 block text-sm font-medium text-stone-700"
              htmlFor="signup-username"
            >
              Username
            </label>
            <input
              value={username}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              id="signup-username"
              name="username"
              type="text"
              placeholder="your username"
              className="h-12 w-full rounded-lg border border-stone-300 bg-white px-4 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div>
            <label
              className="mb-2 block text-sm font-medium text-stone-700"
              htmlFor="signup-email"
            >
              Email
            </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="signup-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="h-12 w-full rounded-lg border border-stone-300 bg-white px-4 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div>
            <label
              className="mb-2 block text-sm font-medium text-stone-700"
              htmlFor="signup-password"
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              id="signup-password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="h-12 w-full rounded-lg border border-stone-300 bg-white px-4 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <button
            // onClick={() => {
            //   signUpHandler();
            // }}
            type="submit"
            className="h-12 w-full rounded-lg bg-blue-600 px-7 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-stone-50"
          >
            Sign Up
          </button>
        </form>
      </section>
    </main>
  );
};

export default SignUp;
