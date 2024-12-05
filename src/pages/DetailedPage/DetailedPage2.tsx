import MediumCard, { cardData1 } from "../../components/MediumCard";
import React from "react";

function DetailedPage2() {
  return (
    <div className="bg-[#060714] w-full" >

      <div className="w-full  " >
        <div className="w-[494px] h-[79px] ml-[450px]   items-center justify-center flex flex-col">
          <p className="text-[15px] font-Inter text-[#7780A1] items-center">OVERLINE</p>
          <h2 className="w-[360px] h-[40px] text-[#FFFFFF] font-Sora text-[32px] font-600 text-center">More from this author</h2>
        </div>


        <div className="flex py-5 ">
          {cardData1.map(card => (
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

        <button className="w-[172px] ml-[550px] rounded-[10px]  h-[52px]  p-3 my-6 border-[2px] gap-10 text-[#7780A1] shadow-[#FFFFFF1A] border-[#7780A1]">Show me more</button>
      </div>
    </div>
  )
}

export default DetailedPage2;