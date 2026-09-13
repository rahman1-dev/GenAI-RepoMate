import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-blue-50 px-4 py-12">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">
            About Us
          </h1>

          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            We're building simple and useful experiences that make everyday
            tasks a little easier.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl border border-blue-100 shadow-sm overflow-hidden">

          {/* Intro Section */}
          <div className="p-8 md:p-10">
            <h2 className="text-xl font-semibold text-gray-800">
              Our Story
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              This project started with a simple idea — create an application
              that is easy to understand, comfortable to use, and helpful in
              everyday life.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              We believe good software doesn't need to be complicated. Our
              focus is on keeping things clean, simple, and useful while
              continuously improving the experience for our users.
            </p>
          </div>

          {/* Features */}
          <div className="bg-blue-50 border-t border-blue-100 px-8 py-8 md:px-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              What We Care About
            </h2>

            <div className="grid gap-5 md:grid-cols-3">

              {/* Card 1 */}
              <div className="bg-white rounded-xl p-5 border border-blue-100">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  ✓
                </div>

                <h3 className="font-semibold text-gray-800">
                  Simplicity
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Keeping the experience simple and easy to understand.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl p-5 border border-blue-100">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  ♥
                </div>

                <h3 className="font-semibold text-gray-800">
                  People First
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Designing features around real people and their needs.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl p-5 border border-blue-100">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  ★
                </div>

                <h3 className="font-semibold text-gray-800">
                  Quality
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Paying attention to the small details that make a difference.
                </p>
              </div>

            </div>
          </div>

          {/* Bottom Section */}
          <div className="px-8 py-8 md:px-10 text-center">
            <h2 className="text-lg font-semibold text-gray-800">
              Thanks for being here.
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              We're glad to have you as part of the journey.
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-6">
          © 2026 Your App. All rights reserved.
        </p>

      </div>
    </div>
  );
};

export default About;
