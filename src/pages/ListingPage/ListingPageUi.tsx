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
    <div className="w-full max-w-screen flex justify-center bg-[#060714]">
      {/* Outer container with max-widths for each media breakpoint */}
      <div className="w-full h-auto rounded-[20px] px-4">
        <HeaderUi />
        <BigCardUi />
        <UnderLine />

        {/* Grid layout for cards */}
        <div className="flex flex-wrap gap-8 justify-center">
          <MoreFirstUi />
          <MainCard />
          <SmallestCardUi />
        </div>

        <Overline />

        {/* Divider */}
        <div className="border border-[#262840] mt-6"></div>
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