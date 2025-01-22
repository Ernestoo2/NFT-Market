import React from "react";
import SmallCard from "./VerySmallCard";
import { FaHeart } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { smallcardData } from "../utils/api";
import { CardProps } from "../utils/type";

const BigCard: React.FC<CardProps> = ({
  id,
  title,
  description,
  url,
  
  price,
  timeLeftHr,
  timeLeftMin,
  numberBidding,
  likes,
}) => {
  return (
    <div className="flex-shrink-0 flex flex-col w-[250px] sm:w-[300px] lg:w-[350px] xl:w-[400px] rounded-[20px]   mx-auto bg-[#121212] shadow-lg">
      {/* Responsive Image */}
      <img
        src={url}
        loading="lazy"
        onError={(e) => (e.currentTarget.src = "/public/Assets/Large/Bigcard1.png")}
        alt={description}
        className="w-full h-[200px] sm:h-[250px] lg:h-[300px] rounded-t-[20px] object-cover"
      />
      {/* Title and Price */}
      <div className="flex items-center justify-between w-full px-4 py-2">
        <h6 className="w-[200px] sm:w-[276px] text-[#FFFFFF] font-Sora text-base font-semibold text-balance  sm:text-left">
          {title}
        </h6>
        <span className="font-bold px-3 py-1 text-center text-sm bg-[#2A27C91A] text-[#514CFF] rounded">
          {price} ETH
        </span>
      </div>

      {/* Timer */}
      <div className="flex text-[#FFFFFF] items-center px-4 text-sm">
        <MdOutlineTimer className="mr-2" />
        <span>
          {timeLeftHr}h {timeLeftMin}m left
        </span>
      </div>

      <div className="w-full my-2 border-b border-gray-300"></div>

      {/* SmallCards and Likes */}
      <div className="flex items-center justify-between px-4 ">
        <div className="flex space-x-[-3px] group">
          {smallcardData.map((card) => (
            <SmallCard
              key={card.smallid}
              smallid={card.smallid}
              smalltitle={card.smalltitle}
              smallurl={card.smallurl}
            />
          ))}
        </div>
        <span className="justify-between items-center  flex w-full px-2 h-auto font-inter text-[10px] text-[#7780A1] font-thin">
          {numberBidding} People are bidding
         <div className=" flex gap-1">
         <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="red"
            stroke="gray"
            strokeWidth="1"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span className="ml-1">{likes}</span>
         </div>
        </span>
        
      </div>
    </div>
  );
};

export default BigCard;
