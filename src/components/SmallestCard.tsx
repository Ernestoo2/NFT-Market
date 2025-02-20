import React from "react";
import { FaHeart } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";

interface CardProps {
  id: number;
  title: string;
  description: string;
  url: string;
  price: number;
  timeLeftHr: number;
  timeLeftMin: number;
  numberBidding: number;
  likes: number;
}




export default function SmallestCard({
  id,
  title,
  description,
  url,
  price,
  timeLeftHr,
  timeLeftMin,
  numberBidding,
  likes
}: CardProps) {
  return (
    <div className="w-full h-auto mx-auto mb-5 rounded-[20px] px-auto items-center justify-center ">
      <div className="flex  items-center ">
        <div className=" w-2/3 ">
          <img
            src={url}
            alt={description}
            className="w-full h-[130px] mb-4 object-cover rounded-[15px]"
          />
        </div>
        <div className="flex flex-col  w-full px-2 bg-red">
          <h2 className="w-full text-[#FFFFFF] h-auto tracking-tight  text-base font-semibold ">{title}</h2>
          <div className=" flex flex-row-reverse items-center mt-3 text-base justify-between">
            <span className="font-bold w-1/2 h-auto rounded bg-[#2A27C91A] pt-2 text-center shrink-0 text-[#514CFF]">{price} ETH</span>
            <span className="text-sm flex flex-row text-gray-500 px-2">
              <MdOutlineTimer className=" mr-2 w-5 h-5" />  {timeLeftHr}:{timeLeftMin}
            </span>
          </div>
          <div className="w-full my-2 border-b border-gray-600 opacity-50"></div>
          <span className="text-xs text-[#7780A1] tracking-tighter items-center flex w-full h-[21px] font-inter font-thin">
            {numberBidding} people are bidding
            <span className="flex ml-auto gap-3">
            <FaHeart className="fill-red-700 stroke-red-800 w-4 h-4 " />
            {likes}
            </span>
          </span>
          </div>
      </div>
    </div>
  );
}
