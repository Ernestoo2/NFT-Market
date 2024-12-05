import React, { Component } from "react";

export class Logo extends Component {
  render() {
    return (
      <div className="flex text-[#7780A1] gap-3">
        <img src="/Assets/Logo.png" alt="for logo" className="fill-white"/>
        <h3 className="w-[160px] h-[20px]">NFT MARKET</h3>
      </div>
    )
  }
}

export default Logo