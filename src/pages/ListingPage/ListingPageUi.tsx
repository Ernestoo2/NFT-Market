import BigCardUi from "../../ui/BigCardUi";
import DivKees from "../../components/DivKees";
import FooterUi from "../../ui/FooterUi";
import HeaderUi from "../../ui/HeaderUi";
import MainCard from "../../components/MainCard";
import MediumCardUi from "../../ui/MediumCardUi";
import MoreFirstUi from "../../ui/MoreFirstUi";
import OverflowUi from "../../ui/OverflowUi";
import Overline from "../../components/Overline";
import React from "react";
import SmallestCardUi from "../../ui/SmallestCardUi";
import UnderLine from "../../components/UnderLine";

function ListingPageUi() {
  return (
    <div className="w-full sm:w-screen md:w-[100%] lg:w-[100%] bg-[#060714] flex justify-center">
      {/* Container with responsive widths for sm, md, and lg */}
      <div className="w-full   h-auto rounded-[20px]">
        <HeaderUi />
        <BigCardUi />
        <UnderLine />

        {/* Grid layout for cards */}
        <div className="">
          <MoreFirstUi />
          <MainCard />
          <SmallestCardUi />
        </div>

        <Overline />

        {/* Divider */}
        <div className="border border-[#262840]"></div>
        <DivKees />

        {/* Image */}
        <img
          className="mx-auto my-[100px]"
          src="/Assets/Folder-Section.png"
          alt="folder"
        />

        <MediumCardUi />
        <OverflowUi />
        <FooterUi />
      </div>
    </div>
  );
}

export default ListingPageUi;