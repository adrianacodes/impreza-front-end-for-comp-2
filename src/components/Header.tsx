import React from "react";
import { Link, useLocation } from "react-router-dom";


const Header = () => {
  const location = useLocation();

  return (
    <header
      className="flex flex-wrap items-center justify-between pt-3 pb-3 mb-3 border-b max-h-75 mx-auto"
      style={{ maxWidth: "calc(100% - 85px)" }}
    >
      <div className="md:w-1/4 w-full ml-5 md:mb-0 flex justify-center md:justify-start">
        <Link to="/" className="inline-flex items-center h-8">
          <img
            src="/images/impreza logo.png"
            alt="Impreza Logo"
            className="h-full mx-auto pt-[5px]"
          />
        </Link>
      </div>

      <ul className="flex items-center justify-between pt-2 w-[278.54px] md:w-auto md:flex md:justify-center md:items-center sm:justify-between">
        <li>
          <Link
            to="/"
             className={`items-center px-2 py-2 text-blue-600 hover:text-blue-800 ${location.pathname === "/" ? "underline-black" : ""}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/shop"
            className={`items-center px-2 py-2 text-blue-600 hover:text-blue-800 ${location.pathname === "/shop" ? "underline-black" : ""}`}
          
          >
            Shop
          </Link>
        </li>
        <li>
          <Link
            to="/how-to-buy"
            target="_blank"
            rel="noopener noreferrer"
            className={`items-center px-2 py-2 text-blue-600 hover:text-blue-800 ${location.pathname === "/how-to-buy" ? "underline-black" : ""}`}
            >
            How to buy?
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className={`items-center px-2 py-2 text-blue-600 hover:text-blue-800 ${location.pathname === "/about" ? "underline-black" : ""}`}
            >
            About us
          </Link>
        </li>
      </ul>

      <div className="flex justify-center sm:justify-end sm:items-center sm:w-1/4 w-full text-center mr-5">
        <Link to="/signup" className="btn btn-primary">
          My Store
        </Link>
      </div>
    </header>
  );
};

export default Header;
