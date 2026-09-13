import React, { useState } from "react";
import AccountPage from "../pages/AccountPage";
import { useNavigate } from "react-router-dom";

const ExtraVerification = () => {
  const navigate = useNavigate();
  const [showAccoutPage, setShowAccoutPage] = useState(false);
  const cancelLogoutFunc = () => {
    setShowAccoutPage(true);
  };
  const mainLogoutFunc = () => {
    localStorage.clear();
    navigate("/signin");
  };
  return (
    <div>
      {showAccoutPage ? (
        <AccountPage />
      ) : (
        <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-stone-50 px-4 py-10 sm:px-6">
          <section className="w-full max-w-md rounded-2xl border border-stone-200 bg-white p-6 shadow-xl shadow-stone-200/60 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m0 3.75h.008v.008H12v-.008ZM10.34 3.94 2.93 17a1.5 1.5 0 0 0 1.3 2.25h15.54a1.5 1.5 0 0 0 1.3-2.25L13.66 3.94a1.9 1.9 0 0 0-3.32 0Z"
                />
              </svg>
            </div>

            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-stone-900">
              Are you sure you want to logout?
            </h1>

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                onClick={() => {
                  cancelLogoutFunc();
                }}
                className="h-11 rounded-lg border border-stone-300 px-5 text-sm font-semibold text-stone-700 transition hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2"
                type="button"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  mainLogoutFunc();
                }}
                className="h-11 rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                type="button"
              >
                log out
              </button>
            </div>
          </section>
        </main>
      )}
    </div>
    // <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-stone-50 px-4 py-10 sm:px-6">
    //   <section className="w-full max-w-md rounded-2xl border border-stone-200 bg-white p-6 shadow-xl shadow-stone-200/60 sm:p-8">
    //     <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
    //       <svg
    //         aria-hidden="true"
    //         className="h-6 w-6"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //         strokeWidth="1.8"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="M12 9v3.75m0 3.75h.008v.008H12v-.008ZM10.34 3.94 2.93 17a1.5 1.5 0 0 0 1.3 2.25h15.54a1.5 1.5 0 0 0 1.3-2.25L13.66 3.94a1.9 1.9 0 0 0-3.32 0Z"
    //         />
    //       </svg>
    //     </div>

    //     <h1 className="mt-2 text-2xl font-semibold tracking-tight text-stone-900">
    //       Are you sure you want to logout?
    //     </h1>

    //     <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
    //       <button
    //         onClick={() => {
    //           cancelLogoutFunc();
    //         }}
    //         className="h-11 rounded-lg border border-stone-300 px-5 text-sm font-semibold text-stone-700 transition hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2"
    //         type="button"
    //       >
    //         Cancel
    //       </button>
    //       <button
    //         className="h-11 rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    //         type="button"
    //       >
    //         Verify &amp; log out
    //       </button>
    //     </div>
    //   </section>
    // </main>
  );
};

export default ExtraVerification;
