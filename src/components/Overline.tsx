import React from "react";

function Overline() {
  return (
    <div className="flex flex-wrap w-full h-auto my-16 mx-15">
      <img
        className="w-full md:w-2/3 h-auto rounded-[20px] mx-auto md:mx-0"
        src="/Assets/LeftImage.png"
        alt=""
      />
      <div className="w-full md:w-2/3 lg:w-1/2 h-auto my-[19px] mx-[24px] py-12 px-6 md:px-12 lg:px-16">
        <p className="text-[#7780A1] text-[15px] font-500">OVERLINE</p>
        <h2 className="text-[#FFFFFF] font-600 text-[32px] sm:text-[36px] lg:text-[42px] w-full">
          Habitant tristique aliquam in vel scelerisque
        </h2>
        <p className="text-[#7780A1] w-full break-normal">
          Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.
        </p>
        <div className="flex flex-wrap w-full h-auto py-4 gap-[24px]">
          <span className="w-full sm:w-1/2">
            <img src="/Assets/Vector.png" alt="" />
            <p className="text-[#FFFFFF]">Sollicitudin sapien</p>
            <p className="text-[#7780A1]">Cursus fermentum</p>
          </span>
          <span className="w-full sm:w-1/2">
            <img src="/Assets/icon.png" alt="" />
            <p className="text-[#FFFFFF]">Pulvinar metus</p>
            <p className="text-[#7780A1]">Nunc sed</p>
          </span>
        </div>
        <div className="flex gap-[16px] justify-center sm:justify-start">
          <button className="bg-[#4745D0] text-[#FFFFFF] rounded-[12px] w-[114px] h-[52px] p-[15px]">
            Get started
          </button>
          <button className="text-[#7780A1] border-[#262840] border-[2px] w-[142px] h-[52px] rounded-[12px]">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Overline;
