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
    <div className=" w-[180px] sm:w-[200px] lg:w-[300px] xl:w-[250px] rounded-[20px]   mx-auto bg-[#121212] shadow-lg ">

      <img
        src={url}
        className="w-full h-[200px] rounded-[20px]"
        alt={description}
      />
      <div className="flex items-center justify-between  w-full ">
        <h2 className="w-full h-auto text-base text-balance font-medium text-white">{title}</h2>
      </div>

      <div className="flex items-center justify-between w-full px-1">

        <span className="flex items-center pr-6 text-xs text-gray-500">
          <MdOutlineTimer className="w-6 h-6 pr-2" />
          {timeLeftHr}:{timeLeftMin}
        </span>

        <span className="font-semibold w-[78px] h-[38px] rounded bg-[#2A27C91A] text-[#7780A1]  pt-2 text-center ">
          {price} ETH
        </span>
      </div>
      <div className="w-full my-2 mx-auto border-b border-gray-600 opacity-50"></div>
      <span className="justify-between items-center  flex w-full px-2 h-[21px] font-inter text-[10px] text-[#7780A1] font-thin">
        {numberBidding} people are bidding
        <div className="flex gap-1 ">
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            stroke="gray"
            strokeWidth="1"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          {likes}
        </div>
      </span>
    </div>

  );
}
