import React, { Component } from "react";

export class Endside extends Component {
  render() {
    return (
      <div className="w-278px h-52px gap-[26px]">
        <button 
        className="w-[117px] mr-3 h-[52px] text-[#7780A1] rounded-[12px] bg-white  border-[2px] border-[#7780A1]">
          Contact
        </button>
        <button
          className="w-[145px] h-[52px] rounded-[12px] text-white bg-[#2A27C9] font-Sora font-[600] text-[16px]">
          My account
        </button>
      </div>
    )
  }
}

export default Endside