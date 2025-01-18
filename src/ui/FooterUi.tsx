import First from "../layouts/Footer/First";
import React from "react";
import Second from "../layouts/Footer/Second";
import Third from "../layouts/Footer/Third";

function FooterUi() {
  return (
    <footer className="w-full bg-[#060714] text-white py-6 px-4 md:px-8">
      <div className="flex flex-col md:flex-row gap-6">
        <First />
        <Second />
        <Third />
      </div>
    </footer>
  );
}

export default FooterUi;
