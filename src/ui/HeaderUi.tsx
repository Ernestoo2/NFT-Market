import Endside from "../layouts/Header/Endside";
import Logo from "../layouts/Header/Logo";
import Nav from "../layouts/Header/Nav";
import React from "react";

function HeaderUi() {
  return (
    <div className="w-full max-w-full shadow bg-[#2a32a3] flex justify-between items-center px-4 py-2 mx-auto">
      <div className="text-sm sm:text-base md:text-lg lg:text-xl">
        <Logo />
        <Nav />
        <Endside />
      </div>
    </div>
  );
}

export default HeaderUi;