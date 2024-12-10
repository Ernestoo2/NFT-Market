import React, { Component } from "react";

export class UnderLine extends Component {
  render() {
    return (
      <div className=" grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:mx-2 w-full h-auto my-16 px-[25px]">
        <div className="w-full h-auto ">
          <p className="text-[#7780A1] text-[15px] font-500  ">OVERLINE</p>
          <h2 className="text-[#FFFFFF] font-600 text-[42px] w-full   ">Sapien ipsum scelerisque convallis fusce</h2>
          <p className="text-[#7780A1] break- w-full">Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
          <div className="flex w-full h-[108px] py-4 gap-[24px]">
            <span>
              <img src="/Assets/Vector.png" alt="" />
              <p className="text-[#FFFFFF]">Sollicitudin sapien</p>
              <p className="text-[#7780A1]">Cursus fermentum</p>
            </span>
            <span>
              <img src="/Assets/icon.png" alt="" />
              <p className="text-[#FFFFFF]">Pulvinar metus</p>
              <p className="text-[#7780A1]">Nunc sed</p>
            </span>
          </div>
          <div className="flex gap-[16px]">
            <button className="bg-[#4745D0] text-[#FFFFFF] rounded-[12px] w-[114px] h-[52px] p-[15px]">Get started</button>
            <button className="text-[#7780A1] border-[#262840] border-[2px] w-[142px] h-[52px] rounded-[12px] ">Learn more</button>
          </div>
        </div>
        <img
          className="w-2/3 h-auto rounded-[20px]"
          src="/Assets/RightImage.png" alt="" />
      </div>
    )
  }
}

export default UnderLine