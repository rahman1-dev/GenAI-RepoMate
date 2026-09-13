import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ExtraVerification from "../components/ExtraVerification";

const AccountPage = () => {
  const navigate = useNavigate();
  const [showExtraVerifPage, setShowExtrVerifPage] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    username: "",
    createdAt: "",
    updatedAt: "",
  });

  const logoutFuntion = () => {
    setShowExtrVerifPage(true);
  };

  try {
    // console.log(userData.email, userData.username);

    const token = localStorage.getItem("token");

    const getProfile = async () => {
      const response = await axios.get("http://localhost:8080/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response?.data?.userProfile);
      setUserData({
        email: response?.data?.userProfile?.email,
        username: response?.data?.userProfile?.username,
        createdAt: response?.data?.userProfile?.createdAt,
        updatedAt: response?.data?.userProfile?.updatedAt,
      });
    };

    useEffect(() => {
      getProfile();
    }, []);
  } catch (error) {
    console.log("something went wrong", error.message);
  }

  return (
    <div>
      {showExtraVerifPage ? (
        <ExtraVerification />
      ) : (
        <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4 py-10">
          <div className="w-full max-w-md">
            {/* Account Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden">
              {/* Header */}
              <div className="bg-blue-100 px-6 py-8 text-center">
                <div className="mx-auto w-24 h-24 rounded-full bg-white p-1 shadow-sm">
                  <img
                    src="https://i.pravatar.cc/150?img=12"
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>

                <h1 className="mt-4 text-xl font-semibold text-gray-800">
                  Your Account
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                  Manage your account details
                </p>
              </div>

              {/* Account Details */}
              <div className="px-6 py-7">
                <div className="space-y-5">
                  {/* Username */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                      Username
                    </label>

                    <div className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800">
                      {userData.username}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                      Email
                    </label>

                    <div className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800">
                      {userData.email}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-100 pt-5">
                    <button
                      onClick={() => {
                        logoutFuntion();
                      }}
                      type="button"
                      className="w-full rounded-lg bg-blue-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                      Log out
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Small footer text */}
            <p className="mt-5 text-center text-xs text-gray-400">
              Your account information
            </p>
          </div>
        </div>
      )}
    </div>

    // <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4 py-10">
    //   <div className="w-full max-w-md">
    //     {/* Account Card */}
    //     <div className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden">
    //       {/* Header */}
    //       <div className="bg-blue-100 px-6 py-8 text-center">
    //         <div className="mx-auto w-24 h-24 rounded-full bg-white p-1 shadow-sm">
    //           <img
    //             src="https://i.pravatar.cc/150?img=12"
    //             alt="Profile"
    //             className="w-full h-full rounded-full object-cover"
    //           />
    //         </div>

    //         <h1 className="mt-4 text-xl font-semibold text-gray-800">
    //           Your Account
    //         </h1>

    //         <p className="mt-1 text-sm text-gray-500">
    //           Manage your account details
    //         </p>
    //       </div>

    //       {/* Account Details */}
    //       <div className="px-6 py-7">
    //         <div className="space-y-5">
    //           {/* Username */}
    //           <div>
    //             <label className="block text-sm font-medium text-gray-600 mb-2">
    //               Username
    //             </label>

    //             <div className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800">
    //               {userData.username}
    //             </div>
    //           </div>

    //           {/* Email */}
    //           <div>
    //             <label className="block text-sm font-medium text-gray-600 mb-2">
    //               Email
    //             </label>

    //             <div className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800">
    //               {userData.email}
    //             </div>
    //           </div>

    //           {/* Divider */}
    //           <div className="border-t border-gray-100 pt-5">
    //             <button
    //               onClick={() => {
    //                 logoutFuntion();
    //               }}
    //               type="button"
    //               className="w-full rounded-lg bg-blue-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
    //             >
    //               Log out
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Small footer text */}
    //     <p className="mt-5 text-center text-xs text-gray-400">
    //       Your account information
    //     </p>
    //   </div>
    // </div>
  );
};

export default AccountPage;
