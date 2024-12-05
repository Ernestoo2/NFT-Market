import React, { Component } from "react";

export class UnderLine extends Component {
  render() {
    return (
        <div className=" flex flex-row-reverse w-[1392px] h-[616px] my-16 mx-[200px]">
        <img 
        className="w-[684px] h-[616px] rounded-[20px]"
        src="/Assets/RightImage.png" alt="" />
      <div className="w-[590px]  h-[578px] my-[19px] mx-[24px]">
        <p className="text-[#7780A1] text-[15px] font-500  ">OVERLINE</p>
        <h2 className="text-[#FFFFFF] font-600 text-[42px] w-[590px]   ">Sapien ipsum scelerisque convallis fusce</h2>
        <p className="text-[#7780A1]">Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
        <div className="flex w-[464px] h-[108px] py-4 gap-[24px]">
            <span>
                <img src="/Assets/Vector.png"  alt="" />
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
      
    </div>
    )
  }
}

export default UnderLine