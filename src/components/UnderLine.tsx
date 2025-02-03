import React, { Component } from "react";
import image3 from "../Assets/RightImage.png";

export class UnderLine extends Component {
  render() {
    return (
      <div className="flex flex-wrap w-full h-auto justify-center my-16 ">
        <div className="w-full  md:w-2/3 lg:w-1/2 h-auto py-6 px-6 md:px-12 lg:px-16 gap-4">
          <p className="text-[#7780A1] text-[13px] font-500">OVERLINE</p>
          <h2 className="text-[#FFFFFF] font-600 text-[24px] sm:text-[36px] lg:text-[42px] w-full">
            Sapien ipsum scelerisque convallis fusce
          </h2>
          <p className="text-[#7780A1] break-normal w-full">
            Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.
          </p>
          
          <div className="flex gap-[16px] justify-center sm:justify-start">
            <button className="bg-[#4745D0] text-[#FFFFFF] rounded-[12px] w-full h-[52px] px-auto">
              Get started
            </button>
            <button className="text-[#7780A1] border-[#262840] border-[2px] w-full h-[52px] rounded-[12px]">
              Learn more
            </button>
          </div>
        </div>
        <img
          className="w-full md:w-2/3 lg:w-1/2 h-auto rounded-[20px] md:mt-0"
          src={image3}
          alt=""
        />
      </div>
    );
  }
}

export default UnderLine;
