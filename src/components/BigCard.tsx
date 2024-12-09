import React from "react";
import SmallCard from "./VerySmallCard";
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

interface SmallcardProps {
  smallid: number;
  smalltitle: string;
  smallurl: string;
}

export const smallcardData : SmallcardProps[] =[
  {
    smallid: 1,
    smalltitle: "Card 1",
    smallurl: "/Assets/SmallCards/01.png",
  },
  {
    smallid: 2,
    smalltitle: "Card 2",
    smallurl: "/Assets/SmallCards/02.png",
  },
  {
    smallid: 3,
    smalltitle: "Card 3",
    smallurl: "/Assets/SmallCards/03.png",
  },
  {
    smallid: 4,
    smalltitle: "Card 4",
    smallurl: "/Assets/SmallCards/04.png",
  },
 

]

export const cardData: CardProps[] = [
  {
    id: 1,
    title: "Tristique diam a, enim, eros tellus. Viverra etiam",
    description: "Card property",
    url: "/Assets/Large/BigCard1.png",
    price: 2.55,
    timeLeftHr: 57,
    timeLeftMin: 15,
    numberBidding: 102,
    likes:58,
  },
  {
    id: 2,
    title: "Vulputate felis purus viverra morbi facilisi eget",
    description: "Card property",
    url: "/Assets/Large/MediumCard2.png",
    price: 3.19,
    timeLeftHr: 2,
    timeLeftMin: 41,
    numberBidding: 35,
    likes:120,
  },
  {
    id: 3,
    title: "Dui accumsan leo vestibulum ornare eu",
    description: "Card property",
    url: "/Assets/Large/BigCard3.png",
    price: 1.11,
    timeLeftHr: 22,
    timeLeftMin: 59,
    numberBidding: 102,
    likes:570,
  },
  {
    id: 4,
    title: "Tristique diam a, enim, eros tellus. Viverra etiam",
    description: "Card property",
    url: "/Assets/Large/BigCard4.png",
    price: 2.55,
    timeLeftHr: 57,
    timeLeftMin: 15,
    numberBidding: 102,
    likes:58,
  },
  {
    id: 5,
    title: "Senectus adipiscing nascetur accumsan etiam",
    description: "Card property",
    url: "/Assets/Large/BigCard5.png",
    price: 1.63,
    timeLeftHr: 37,
    timeLeftMin: 1,
    numberBidding: 12,
    likes:98,
  },
  {
    id: 6,
    title: "Mattis at diam lorem nisl nam sed sociis",
    description: "Card property",
    url: "/Assets/Large/BigCard6.png",
    price: 2.55,
    timeLeftHr: 12,
    timeLeftMin: 15,
    numberBidding: 19,
    likes:58,
  },

]



export default function BigCard(
  {
    id,
    title,
    description,
    url,
    price,
    timeLeftHr,
    timeLeftMin,
    numberBidding,
    likes
  }: CardProps,

) {
  return (
    <div className="  w-full  rounded-[20px] flex flex-col  mx-auto">
      
        {/* Responsive Image */}
        <img
          src={url}
          alt={description}
          className="w-full  h-full sm:h-2/3 md:h-2/2 lg:h-3/4  object-cover rounded-[15px]"
        />
        {/* Title and Price */}
        <div className="flex items-center justify-between w-full px-2 py-2">
          <h6 className="w-[276px] text-[#FFFFFF] h-[50px] font-Sora text-lg font-semibold text-center sm:text-left">{title}</h6>
          <span className="font-bold w-[78px] h-[38px] rounded bg-[#2A27C91A] text-center text-[#514CFF] sm:text-base  pt-2">{price} ETH</span>
        </div>

        <div className="flex text-[#FFFFFF]  items-center  w-full px-2">
          <span className="text-sm flexitems-center px-2"> <MdOutlineTimer />   </span>
          <span className="text-sm flex flex-row ">
            {timeLeftHr}:{timeLeftMin}  left
          </span>
        </div>
        <div className="w-full my-2 border-b border-gray-300"></div>
        <div className="w-full flex px-3 items-center py-4">
          <div className="flex space-x-[-8px] hover:space-x-2 transition-all duration-300 ease-in-out group">
            {smallcardData.map((card) => (
              <SmallCard
                key={card.smallid}
                smallid={card.smallid}
                smalltitle={card.smalltitle}
                smallurl={card.smallurl}
              />
            ))}
          </div>
          <span className="justify-between items-center text-[#7780A1] flex w-full h-[21px] font-inter font-thin">
          {numberBidding} people are bidding
          <FaHeart className="fill-red-700 stroke-red-800 w-7 h-7 " />
          {likes}
        </span>
        </div>

      
    </div>
  );
}

//  Usage:
// <Card title="My Awesome Card" description="This is a description of the card." /> 

