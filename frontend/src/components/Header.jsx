import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-stone-200 bg-white px-4 py-4 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-lg font-semibold tracking-tight text-stone-900">
          <Link to="/">
            repo<span className="text-blue-600">Mate</span>
          </Link>
        </div>
        <nav className="flex list-none items-center justify-between gap-5 text-sm font-medium text-stone-500 sm:gap-8 sm:text-base">
          <Link
            to="/"
            className="cursor-pointer transition-colors hover:text-blue-600"
          >
            Home
          </Link>
          <Link className="cursor-pointer transition-colors hover:text-blue-600">
            About
          </Link>
          <Link className="cursor-pointer transition-colors hover:text-blue-600">
            History
          </Link>
          <Link
            to="/signup"
            className="cursor-pointer transition-colors hover:text-blue-600"
          >
            SingUp/SingIn
          </Link>
          <Link className="cursor-pointer transition-colors hover:text-blue-600">
            Account
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
