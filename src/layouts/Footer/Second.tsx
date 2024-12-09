import React, { Component } from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { ImSkype } from "react-icons/im";

export class Second extends Component {
  render() {
    return (
      <div className=" w-full h-auto rounded-tr-[10px] rounded-br-[10px] border-[1px] px-[64px] py-[40px]">
        <div className="pb-[34px] text-white flex font-Sora font-semibold text-[16px] flex-col">
          <h4>Auctions</h4>
          <h4>Roadmap</h4>
          <h4>Discover</h4>
          <h4>Community </h4>
          
        </div>
        <button className="w-[145px] h-10 rounded-[12px] bg-[#2A27C9] text-white">My account</button>

        <span className="flex w-full h-[20px] mt-[90px] justify-evenly">
        <FaSquareFacebook className="fill-[#E2E2ED] w-7 h-7 pr-3"/>
        <FaLinkedin className="fill-[#E2E2ED] w-7 h-7 pr-3" />
        <FaGithubSquare className="fill-[#E2E2ED] w-7 h-7 pr-3" />
        <ImSkype  className="fill-[#E2E2ED] w-7 h-7 pr-3"/>
        <FaInstagramSquare className="fill-[#E2E2ED] w-7 h-7 pr-3"/>
        </span>
      </div>
    )
  }
}

export default Second
