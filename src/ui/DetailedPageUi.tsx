import DetailedPage1 from "../pages/DetailedPage/DetailedPage1";
import DetailedPage2 from "../pages/DetailedPage/DetailedPage2";
import FooterUi from "./FooterUi";
import HeaderUi from "./HeaderUi";
import React from "react";

function DetailedPageUi() {
  return (
    <div className="w-full  bg-[#060714]">
      <div className="">
      <HeaderUi/>
      <DetailedPage1/>
      <DetailedPage2/>
      <FooterUi/>
      </div>
    </div>
  )
}

export default DetailedPageUi
