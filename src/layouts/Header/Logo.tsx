import React, { Component } from "react";

export class Logo extends Component {
  render() {
    return (
      <div className="flex  sm:flex-col md:flex-row lg:flex-row w-full sm:w-full md:w-2/3 lg:w-full text-[#7780A1] items-center sm:text-center gap-3">
        <img src="/Assets/Logo.png" alt="for logo" className="sm:w-3/2 sm:h-[50px] md:w-3/2 md:h-[50px] pl-3  lg:pl-48 "/>
        <h3 className="w-full h-[20px] text-xl font-semibold">NFT MARKET</h3>
      </div>
    )
  }
}

export default Logo