import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    console.log("Signin Function ran::");
    event.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signin",
        formData,
      );

      localStorage.setItem("token", response.data.token);

      console.log("SignIn successfull");
      navigate("/");
    } catch (requestError) {
      setError(requestError.response?.data?.msg || "Unable to sign in");
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
            Welcome back
          </h1>
          <p className="mt-3 text-sm leading-6 text-stone-500">
            Sign in to continue to your workspace.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label
              className="mb-2 block text-sm font-medium text-stone-700"
              htmlFor="signin-email"
            >
              Email
            </label>
            <input
              id="signin-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="h-12 w-full rounded-lg border border-stone-300 bg-white px-4 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div>
            <label
              className="mb-2 block text-sm font-medium text-stone-700"
              htmlFor="signin-password"
            >
              Password
            </label>
            <input
              id="signin-password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="h-12 w-full rounded-lg border border-stone-300 bg-white px-4 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            className="h-12 w-full rounded-lg bg-blue-600 px-7 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-stone-50"
          >
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default SignIn;
