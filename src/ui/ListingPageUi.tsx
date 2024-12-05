import BigCardUi from "./BigCardUi";
import DivKees from "../components/DivKees";
import FooterUi from "./FooterUi";
import HeaderUi from "./HeaderUi";
import ImageOverflow from "../components/ImageOverflow";
import MainCard from "../components/MainCard";
import MediumCard, { cardData1 } from "../components/MediumCard";
import MediumCardUi from "./MediumCardUi";
import MoreFirstUi from "./MoreFirstUi";
import OverflowUi from "./OverflowUi";
import Overline from "../components/Overline";
import React from "react";
import SmallestCardUi from "./SmallestCardUi";
import UnderLine from "../components/UnderLine";

function ListingPageUi() {
  return (
    <div className="w-[1920px] h-[5900px] rounded-[20px] bg-[#060714]  ">
      <HeaderUi />
      <BigCardUi />
      <UnderLine/>
      <div className="flex my-[70px] mx-[200px] gap-[40px]">
        <MoreFirstUi/>
        <MainCard/>
        <SmallestCardUi />
      </div>
      
      <Overline/>

      <div className="border border-[#262840]"></div>
      <DivKees/>
      <img 
      className="mx-[200px] my-[100px]"
      src="/Assets/Folder-Section.png" alt="folder"/>
      <MediumCardUi />
      <OverflowUi />
      <FooterUi />
    </div>
  )
}

export default ListingPageUi
