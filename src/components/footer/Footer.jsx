import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-[#1C448E] text-white py-8 select-none">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
          <div class="flex gap-14">
            <Link to="/">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <img
                  src="https://e7.pngegg.com/pngimages/980/304/png-clipart-computer-icons-user-profile-avatar-heroes-silhouette.png"
                  className="h-8 w-8 rounded-full"
                  alt="Profilebook logo"
                />
                <span className="text-lg font-bold whitespace-nowrap  ">
                  Profilebook
                </span>
              </div>
            </Link>
            <nav className="mt-4 md:mt-0">
              <ul className="flex flex-col md:flex-row md:space-x-6 rtl:space-x-reverse text-sm font-medium">
                <li>
                  <Link
                    to="/"
                    className="hover:text-blue-400 transition-colors duration-300  "
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="hover:text-blue-400 transition-colors duration-300  "
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="hover:text-blue-400 transition-colors duration-300  "
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="hover:text-blue-400 transition-colors duration-300  "
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="mt-6 text-center text-sm  ">
          <p>© {new Date().getFullYear()} Profilebook. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
