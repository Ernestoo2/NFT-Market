import DetailedPage1 from "../pages/DetailedPage/DetailedPage1";
import DetailedPage2 from "../pages/DetailedPage/DetailedPage2";
import FooterUi from "./FooterUi";
import HeaderUi from "./HeaderUi";
import React from "react";

function DetailedPageUi() {
  return (
    <div className="w-[1800px]  bg-[#060714] overflow-auto">
      <HeaderUi/>
      <DetailedPage1/>
      <DetailedPage2/>
      <FooterUi/>
    </div>
  )
}

export default DetailedPageUi
