import First from "../layouts/Footer/First";
import React from "react";
import Second from "../layouts/Footer/Second";
import Third from "../layouts/Footer/Third";

function FooterUi() {
  return (
    <div className="w-full  max-w-full  sm:max-w-3/4   h-auto grid gap-3 md:grid-cols-2 sm:grid-cols-1  lg:grid-cols-3 pb-7">
      <First/>
      <Second/>
      <Third/>
    </div>
  )
}

export default FooterUi;
