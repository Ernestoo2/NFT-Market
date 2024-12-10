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
    <div className="w-full flex justify-center bg-[#060714]">
      {/* Outer container with max-widths for each media breakpoint */}
      <div className="w-full sm:max-w-[480px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] h-auto rounded-[20px] px-4">
        <HeaderUi />
        <BigCardUi />
        <UnderLine />

        {/* Grid layout for cards */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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