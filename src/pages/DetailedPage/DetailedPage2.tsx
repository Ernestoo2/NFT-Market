import MediumCard from "../../components/MediumCard";
import React from "react";
import { cardData1 } from "../../utils/api";

function DetailedPage2() {
  return (
    <div className="bg-[#060714] w-full  mx-auto px-4">
      {/* Heading Section */}
      <div className="w-full flex flex-col items-center py-6">
        <p className="text-sm md:text-base font-Inter text-[#7780A1]">OVERLINE</p>
        <h2 className="text-lg md:text-2xl lg:text-3xl text-[#FFFFFF] font-Sora font-semibold text-center">
          More from this author
        </h2>
      </div>

      {/* Scrollable Card Section */}
      <div className="w-full overflow-x-auto flex gap-4 py-4 px-4 md:px-8">
        {cardData1.map((card) => (
          <MediumCard
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
            url={card.url}
            price={card.price}
            timeLeftHr={card.timeLeftHr}
            timeLeftMin={card.timeLeftMin}
            numberBidding={card.numberBidding}
            likes={card.likes}
          />
        ))}
      </div>

      {/* Button Section */}
      <div className="flex justify-center px-4 md:px-8">
        <button className="w-full md:w-auto px-6 py-3 rounded-lg border-2 border-[#7780A1] text-[#7780A1] shadow-md hover:bg-[#7780A1] hover:text-white transition">
          Show me more
        </button>
      </div>
    </div>
  );
}

export default DetailedPage2;
