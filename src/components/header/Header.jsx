import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className=" text-white bg-[#1C448E] shadow-sm select-none">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://e7.pngegg.com/pngimages/980/304/png-clipart-computer-icons-user-profile-avatar-heroes-silhouette.png"
            className="h-8 w-8 rounded-full"
            alt="Profilebook logo"
          />
          <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white  ">
            Profilebook
          </span>
        </Link>
        <div className="flex items-center space-x-2 rtl:space-x-reverse mt-4 md:mt-0">
          <div class="flex items-center justify-center gap-2 ">
            <Link
              to="/"
              className=" flex items-center justify-center py-1 px-2 text-sm md:text-sm lg:text-base bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105    h-10"
            >
              Home
            </Link>
            <Link
              to="/profile"
              className=" flex items-center justify-center py-1 px-2 text-sm md:text-sm lg:text-base bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105    h-10"
            >
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
