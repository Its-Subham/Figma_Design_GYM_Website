import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { HiOutlinePlus, HiMinus } from "react-icons/hi2";

const Navbar = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  return (
    <div>
      <nav className="nav p-5 bg-primaryBg md:h-20 h-16 w-full border-b">
        <div className="mx-auto flex items-center justify-between">
          {/* Logo  */}
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className="w-11 h-6" />
            <p className="text-primaryBlack font-bold ">PrimalTraining</p>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex gap-6 items-center ">
            <a href="/">HOME</a>
            <a href="about">ABOUT</a>
            <a
              href="/reserve"
              className="bg-primaryPurple text-primaryBlack px-4 py-2 rounded hover:bg-primaryBlack hover:text-primaryWhite transition-all duration-400"
            >
              RESERVE YOUR SPORT
            </a>
          </div>

          <button
            className="text-primaryBlack md:hidden"
            onClick={() => {
              setOpenSideMenu(!openSideMenu);
            }}
          >
            {openSideMenu ? (
              <HiMinus className="text-2xl" />
            ) : (
              <HiOutlinePlus className="text-2xl" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Side Menu */}
      {openSideMenu && (
        <div className="md:hidden bg-primaryWhite ">
          <div className="flex flex-col ">
            <div className="border-b h-16 p-5 flex items-center">
              <a
                href="/"
                className="text-primaryBlack text-2xl font-medium"
                onClick={() => setOpenSideMenu(false)}
              >
                HOME
              </a>
            </div>
            <div className="border-b h-16 p-5 flex items-center">
              <a
                href="/about"
                className="text-primaryBlack text-2xl font-medium"
                onClick={() => setOpenSideMenu(false)}
              >
                ABOUT
              </a>
            </div>
            <div
              className="border-b h-16 p-5 bg-primaryPurple text-primaryBlack
                         hover:bg-primaryBlack hover:text-primaryWhite
                         transition-all duration-300 flex items-center"
            >
              <a
                href="/reserve"
                className="text-primaryWhite text-2xl font-medium"
                onClick={() => setOpenSideMenu(false)}
              >
                RESERVE YOUR SPORT
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
