import Endside from "../layouts/Header/Endside";
import Logo from "../layouts/Header/Logo";
import Nav from "../layouts/Header/Nav";
import React, { useState } from "react";

function HeaderUi() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#060714] shadow-md">
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        {/* Logo */}
        <Logo />

        {/* Hamburger Menu for Small Screens */}
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation and Endside Buttons */}
        <div className="hidden md:flex items-center space-x-6">
          <Nav />
          <Endside />
        </div>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#060714] px-4 py-3">
          <Nav />
          <Endside />
        </div>
      )}
    </header>
  );
}

export default HeaderUi;
