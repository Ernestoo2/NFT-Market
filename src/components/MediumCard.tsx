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




export default function MediumCard({
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
    <div className=" w-full h-auto flex    rounded-[20px] my-3 ">
      <div className="w-full px-2 ">
        <img
          src={url}
          className="w-full h-[450px] rounded-[20px]"
          alt={description}
        />
        <div className="flex items-center justify-between w-[212px] ">
          <h2 className="w-full h-[50px] text-lg font-semibold text-white">{title}</h2>
        </div>

        <div className="flex items-center justify-between w-full px-1">

          <span className="flex items-center pr-6 text-sm text-gray-500">
            <MdOutlineTimer className="w-6 h-6 pr-2" />
            {timeLeftHr}:{timeLeftMin}
          </span>

          <span className="font-bold w-[78px] h-[38px] rounded bg-[#2A27C91A] text-[#7780A1]  pt-2 text-center ">
            {price} ETH
          </span>
        </div>
        <div className="w-full my-2 border-b border-gray-600 opacity-50"></div>
        <span className="jitems-center flex w-full h-[21px] font-inter text-[14px] text-[#7780A1] font-thin">
          {numberBidding} people are bidding
          <div className="flex ml-auto gap-3">
          <FaHeart className="pl-1 pr-1 fill-red-700 stroke-red-800 w-7 h-7" />
          {likes}
          </div>
        </span>
      </div>
    </div>
  );
}

//  Usage:
// <Card title="My Awesome Card" description="This is a description of the card." /> 

