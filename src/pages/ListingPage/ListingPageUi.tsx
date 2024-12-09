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
    <div className="w-full  sm:w-full md:w-full lg:w-full xl:w-full h-auto rounded-[20px] bg-[#060714]  ">
      <HeaderUi />
      <BigCardUi />
      <UnderLine/>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:mx-[12%] md:mx-[12px]  my-auto px-[50px]  gap-[40px]">
        <MoreFirstUi/>
        <MainCard/>
        <SmallestCardUi />
      </div>
      
      <Overline/>

      <div className="border border-[#262840]"></div>
      <DivKees/>
      <img 
      className="mx-auto my-[100px]"
      src="/Assets/Folder-Section.png" alt="folder"/>
      <MediumCardUi />
      <OverflowUi />
      <FooterUi />
    </div>
  )
}

export default ListingPageUi
