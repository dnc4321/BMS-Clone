import React, { useState } from "react";
import logo from "../assets/logo.svg";
import SearchBar from "./SearchBar";
import LocationSelector from "./LocationSelector";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="fixed z-10 w-full border-b border-white/10">
      <div className="backdrop-blur-sm bg-black/10 text-white px-4 md:px-16 py-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl md:text-2xl flex items-center flex-wrap gap-2 cursor-pointer">
              <Link to={"/"} className="font-bold text-xl md:text-2xl flex items-center flex-wrap gap-2 cursor-pointer">
                <img src={logo} alt="" className="w-8 h-8 md:w-10 md:h-10" />
                <div>Show</div>
                <div className="bg-yellow-500 px-2 rounded-md text-black">Bees</div>
              </Link>

              <div className="hidden md:block">
                <SearchBar />
              </div>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          <div className={`${isMenuOpen ? "block" : "hidden"} md:block mt-4 md:mt-0`}>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="w-full md:hidden">
                <SearchBar />
              </div>
              <LocationSelector />
              <div
                className="text-yellow-300 hover:underline cursor-pointer"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
