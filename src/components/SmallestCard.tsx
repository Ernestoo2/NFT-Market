import React from "react";
import { CiHeart } from "react-icons/ci";
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

export const cardData2: CardProps[] = [
  {
    id: 1,
    title: "Vulputate velit viverra volutpat volutpat tristique",
    description: "Card property",
    url: "/Assets/Small/SmallCard1.png",
    price: 2.55,
    timeLeftHr: 57,
    timeLeftMin: 15,
    numberBidding: 101,
    likes: 54,
  },
  {
    id: 2,
    title: "Egestas blandit sit egestas non sed. Purus semper",
    description: "Card property",
    url: "/Assets/Small/Small1.png",
    price: 2.15,
    timeLeftHr: 22,
    timeLeftMin: 15,
    numberBidding: 101,
    likes: 54,
  },
  {
    id: 3,
    title: "Id ut consequat netus nec vel amet ut porta in augue",
    description: "Card property",
    url: "/Assets/Small/Small2.png",
    price: 2.55,
    timeLeftHr: 22,
    timeLeftMin: 15,
    numberBidding: 101,
    likes: 54,
  },

  {
    id: 4,
    title: "Sed et nibh felis integer tellus turpin",
    description: "Card property",
    url: "/Assets/Small/Small3.png",
    price: 2.55,
    timeLeftHr: 57,
    timeLeftMin: 15,
    numberBidding: 101,
    likes: 54,
  },
]


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
    <div className="w-[400px] h-[120px] mx-[25px] mb-5 rounded-[20px] items-center justify-center ">
      <div className="flex  items-center ">
        <div className=" w-full ">
          <img
            src={url}
            alt={description}
            className="w-[120px] h-[120px] mb-4 object-cover rounded-[15px]"
          />
        </div>
        <div className="flex flex-col  w-full px-2 bg-red">
          <h2 className="w-[256px] text-[#FFFFFF] h-[50px] text-lg font-semibold ">{title}</h2>
          <div className=" flex flex-row-reverse items-center justify-between">
            <span className="font-bold w-[78px] h-[38px] rounded bg-[#2A27C91A] pt-2 text-center text-[#514CFF]">{price} ETH</span>
            <span className="text-sm flex flex-row text-gray-500 px-2">
              <MdOutlineTimer className="w-4 h-4 mr-2" />  {timeLeftHr}:{timeLeftMin}
            </span>
          </div>
          <div className="w-full my-2 border-b border-gray-600 opacity-50"></div>
          <span className="text-[#7780A1] justify-between items-center flex w-full h-[21px] font-inter font-thin">
            {numberBidding} people are bidding
            <FaHeart className="fill-red-700 stroke-red-800 w-7 h-7 pr-3" />
            {likes}
          </span>
          </div>
      </div>
    </div>
  );
}

//  Usage:
// <Card title="My Awesome Card" description="This is a description of the card." /> 

