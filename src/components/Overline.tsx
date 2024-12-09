import React from "react";

function Overline() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:mx-2  w-full h-auto my-16 mx-[25px]">
        <img 
        className="w-full h-auto rounded-[20px]"
        src="/Assets/LeftImage.png" alt="" />
      <div className="w-full  h-auto my-[19px] mx-[24px]">
        <p className="text-[#7780A1] text-[15px] font-500  ">OVERLINE</p>
        <h2 className="text-[#FFFFFF] font-600 text-[42px] w-full   ">Habitant tristique aliquam in vel scelerisque</h2>
        <p className="text-[#7780A1] break-normal">Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
        <div className="flex w-full h-auto py-4 gap-[24px]">
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

export default Overline
