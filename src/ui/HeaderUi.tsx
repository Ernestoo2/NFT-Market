import Endside from "../layouts/Header/Endside";
import Logo from "../layouts/Header/Logo";
import Nav from "../layouts/Header/Nav";
import React from "react";

function HeaderUi() {
  return (
    <div className="w-[1920px] flex justify-evenly items-center py-6 ">
        <Logo/>
        <Nav/>
        <Endside/>
    </div>
  )
}

export default HeaderUi