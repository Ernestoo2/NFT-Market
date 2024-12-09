import Endside from "../layouts/Header/Endside";
import Logo from "../layouts/Header/Logo";
import Nav from "../layouts/Header/Nav";
import React from "react";

function HeaderUi() {
  return (
    <div className="w-full max-w-full sm:max-w-3/4  lg:max-w-full  flex justify-between items-center px-4 py-2 mx-auto">
      <Logo />
      <Nav />
      <Endside />
    </div>
  );
}

export default HeaderUi;