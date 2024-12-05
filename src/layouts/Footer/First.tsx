import React, { Component } from "react";

export class First extends Component {
  render() {
    return (
      <div className="w-[465px] ml-[50px] p-14 h-[397px] rounded-tr-[20px] border-[1px] rounded-bl-[20px] ">
       <div className="flex gap-3">
       <img src="/Assets/Logo.png" alt="for logo" className="fill-white"/>
       <h3 className="w-[160px] h-[20px] text-white font-semibold">NFT MARKET</h3>
       </div>
       <div className="w-[294px] flex justify-evenly mt-[190px] mt-[40px] text-white">
       <a href="#">Support</a>
       <a href="#">Terms of service </a>
       <a href="#">Licence</a>
       </div>
      </div>
    )
  }
}

export default First