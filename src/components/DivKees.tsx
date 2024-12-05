import React, { Component } from "react";

export class DivKees
 extends Component {
  render() {
    return (
      <div className=" flex gap-[36px] justify-center items-center  w-[920px] h-[135px] mx-[400px] my-[100px]">
        <span className="w-[212px] text-center h-[131px]  ">
            <img 
            className="ml-20"
            src="/Assets/Spans/UserIcon.png" alt="" />
            <em className="text-[#FFFFFF] font-600px text-[48px]">300K</em>
            <p className="text-[#FFFFFF1A]">User Active</p>
        </span>
        <span className="w-[212px] h-[131px] ">
            <img 
             className="ml-10"
            src="/Assets/Spans/ArtworksIcon.png" alt="" />
            <em className="text-[#FFFFFF] font-600px text-[48px]">52,5k</em>
            <p className="ml-10 text-[#FFFFFF1A]" >Artworks</p>
        </span>
        <span className="w-[212px] h-[131px] ">
            <img 
             className="ml-10"
            src="/Assets/Spans/ArtistsIcon.png" alt="" />
            <em className="text-[#FFFFFF] font-600px text-[48px] ">17,5K</em>
            <p className="ml-10 text-[#FFFFFF1A]">Artist</p>
        </span>
        <span className="w-[212px] h-[131px] ">
            <img
             className="ml-10"
            src="/Assets/Spans/WalletIcon.png" alt="" />
            <em className="text-[#FFFFFF] font-600px text-[48px]">35.56</em>
            <p className="ml-10 text-[#FFFFFF1A]">ETH Ppent</p>
        </span>

      </div>
    )
  }
}

export default DivKees
