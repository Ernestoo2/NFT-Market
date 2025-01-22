import React from "react";
import SmallCard from "./VerySmallCard";
import { FaHeart } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { smallcardData } from "../utils/api";

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
    <div className="flex-shrink-0 flex flex-col w-[350px] sm:w-[400px] lg:w-[500px] rounded-[20px]   mx-auto bg-[#121212] shadow-lg">
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
        <h6 className="w-[200px] sm:w-[276px] text-[#FFFFFF] font-Sora text-lg font-semibold text-center sm:text-left">
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
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex space-x-[-8px] group">
          {smallcardData.map((card) => (
            <SmallCard
              key={card.smallid}
              smallid={card.smallid}
              smalltitle={card.smalltitle}
              smallurl={card.smallurl}
            />
          ))}
        </div>
        <span className="flex items-center text-[#7780A1]">
          {numberBidding} bids
          <FaHeart className="ml-3 text-red-600 w-5 h-5" />
          <span className="ml-1">{likes}</span>
        </span>
      </div>
    </div>
  );
};

export default BigCard;
