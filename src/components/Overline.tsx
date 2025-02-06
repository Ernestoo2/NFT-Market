import React from "react";
import image1 from "../Assets/Vector.png";
import image2 from "../Assets/LeftImage.png";
import image3 from "../Assets/Icon.png";

function Overline() {
  return (
    <div className="flex flex-col w-full h-auto lg:flex-row lg:my-16 lg:mx-15">
      <div className="w-full">
        <img
          className="w-2/3  h-auto rounded-[20px] mx-auto md:mx-0"
          src={image2}
          alt=""
        />
      </div>
      <div className="w-full  h-auto my-[19px] mx-[24px] py-12 px-6 md:px-12 lg:px-16">
        <p className="text-[#7780A1] text-[15px] font-500">OVERLINE</p>
        <h2 className="text-[#FFFFFF] font-600 text-[32px] sm:text-[36px] lg:text-[42px] w-full">
          Habitant tristique aliquam in vel scelerisque
        </h2>
        <p className="text-[#7780A1] w-full break-normal">
          Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.
        </p>
        <div className="flex  w-full h-auto py-4 gap-[24px]">
          <span className="w-full sm:w-1/2">
            <img src={image1} alt="" />
            <p className="text-[#FFFFFF]">Sollicitudin sapien</p>
            <p className="text-[#7780A1]">Cursus fermentum</p>
          </span>
          <span className="w-full sm:w-1/2">
            <img src={image3} alt="" />
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
