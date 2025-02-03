import React, { Component } from "react";
import image1 from "../Assets/Spans/UserIcon.png";
import image2 from "../Assets/Spans/ArtworksIcon.png";
import image3 from "../Assets/Spans/ArtistsIcon.png";
import image4 from "../Assets/Spans/WalletIcon.png";

export class DivKees extends Component {
  render() {
    return (
      <div className=" flex gap-[36px] justify-center items-center  w-full h-auto mx-auto my-[50px]">
        <span className="w-[212px] text-center h-auto  ">
          <img
            className="ml-20"
            src={image1} alt="" />
          <em className="text-[#FFFFFF] font-600px text-[48px]">300K</em>
          <p className="text-[#FFFFFF1A]">User Active</p>
        </span>
        <span className="w-[212px] h-[131px] ">
          <img
            className="ml-10"
            src={image2} alt="" />
          <em className="text-[#FFFFFF] font-600px text-[48px]">52,5k</em>
          <p className="ml-10 text-[#FFFFFF1A]" >Artworks</p>
        </span>
        <span className="w-[212px] h-[131px] ">
          <img
            className="ml-10"
            src={image3} alt="" />
          <em className="text-[#FFFFFF] font-600px text-[48px] ">17,5K</em>
          <p className="ml-10 text-[#FFFFFF1A]">Artist</p>
        </span>
        <span className="w-[212px] h-[131px] ">
          <img
            className="ml-10"
            src={image4} alt="" />
          <em className="text-[#FFFFFF] font-600px text-[48px]">35.56</em>
          <p className="ml-10 text-[#FFFFFF1A]">ETH Ppent</p>
        </span>

      </div>
    )
  }
}

export default DivKees
