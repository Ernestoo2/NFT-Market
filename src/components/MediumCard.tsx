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

export const cardData1: CardProps[] = [
  {
    id: 1,
    title: "Fames habitasse risus ultricies tortor sit",
    description: "Card property",
    url: "/Assets/Medium/MediumCard1.png",
    price: 2.55,
    timeLeftHr: 57,
    timeLeftMin: 15,
    numberBidding: 100,
    likes: 100,
  },
  {
    id: 2,
    title: "Faucibus habitasse at et platea massa mauris",
    description: "Card property",
    url: "/Assets/Medium/MediumCard2.png",
    price: 2.55,
    timeLeftHr: 22,
    timeLeftMin: 59,
    numberBidding: 101,
    likes: 100,
  },
  {
    id: 3,
    title: "Fames habitasse risus ultricies tortor sit",
    description: "Card property",
    url: "/Assets/Medium/MediumCard3.png",
    price: 2.55,
    timeLeftHr: 57,
    timeLeftMin: 15,
    numberBidding: 100,
    likes: 100,
  },
  {
    id: 4,
    title: "Fames habitasse risus ultricies tortor sit",
    description: "Card property",
    url: "/Assets/Medium/MediumCard4.png",
    price: 2.55,
    timeLeftHr: 57,
    timeLeftMin: 15,
    numberBidding: 100,
    likes: 100,
  },
  {
    id: 5,
    title: "Fames habitasse risus ultricies tortor sit",
    description: "Card property",
    url: "/Assets/Medium/MediumCard5.png",
    price: 2.55,
    timeLeftHr: 57,
    timeLeftMin: 15,
    numberBidding: 100,
    likes: 100,
  },
  {
    id: 6,
    title: "Fames habitasse risus ultricies tortor sit",
    description: "Card property",
    url: "/Assets/Medium/MediumCard6.png",
    price: 2.55,
    timeLeftHr: 57,
    timeLeftMin: 15,
    numberBidding: 100,
    likes: 100,
  },
  {
    id: 7,
    title: "Fames habitasse risus ultricies tortor sit",
    description: "Card property",
    url: "/Assets/Medium/MediumCard7.png",
    price: 2.55,
    timeLeftHr: 57,
    timeLeftMin: 15,
    numberBidding: 100,
    likes: 100,
  }
]


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
    <div className=" w-full max-w-full  bg-[#060714] rounded-[20px] my-3 ">
      <div className=" w-full px-2 ">
        <img
          src={url}
          alt={description}
          className="w-full  h-full sm:h-1/2 md:h-2/3 lg:h-3/4 mb-4 object-cover rounded-[15px]"
        />
        <div className="flex items-center justify-between w-[212px] ">
          <h2 className="w-[300px] h-[50px] text-lg font-semibold text-white">{title}</h2>
        </div>

        <div className="flex justify-between  items-center  w-full px-1">

          <span className="text-sm flex text-gray-500 items-center pr-6">
            <MdOutlineTimer className="w-6 h-6 pr-2" />
            {timeLeftHr}:{timeLeftMin}
          </span>

          <span className="font-bold w-[78px] h-[38px] rounded bg-[#2A27C91A] text-[#7780A1]  pt-2 text-center ">
            {price} ETH
          </span>
        </div>
        <div className="w-full my-2 border-b border-gray-600 opacity-50"></div>
        <span className="justify-between items-center flex w-full h-[21px] font-inter text-[14px] text-[#7780A1] font-thin">
          {numberBidding} people are bidding
          <FaHeart className="fill-red-700 stroke-red-800 w-7 h-7 pr-1 pl-1" />
          {likes}
        </span>
      </div>
    </div>
  );
}

//  Usage:
// <Card title="My Awesome Card" description="This is a description of the card." /> 

