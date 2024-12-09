import React, { Component } from "react";

export class Endside extends Component {
  render() {
    return (
      <div className="flex w-full sm:w-full md:w-full lg:w-full h-52px gap-2 mx-1 ">
        <button 
        className="w-1/2 h-[52px] text-lg text-[#7780A1] rounded-[12px] bg-white  border-[2px] border-[#7780A1]">
          Contact
        </button>
        <button
          className="w-2/3 h-[52px] rounded-[12px] text-white bg-[#2A27C9] font-Sora font-[600] text-lg">
          My account
        </button>
      </div>
    )
  }
}

export default Endside