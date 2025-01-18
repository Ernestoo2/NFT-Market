import React, { Component } from "react";
import SmallestCard from "../components/SmallestCard";
import { cardData2 } from "../utils/api";

export class SmallestCardUi extends Component {
  render() {
    return (
      <div className="w-full md:w-1/3 lg:w-1/4 h-auto text-center rounded-[20px] border border-[#262840]">
        <h2 className="font-Sora text-[#FFFFFF] font-600 text-[28px] w-full h-[80px] mx-auto my-3">
          Top NFT at a lower price
        </h2>
        {cardData2.map(card => (
          <SmallestCard
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

        <button className="w-3/4 text-xl items-center justify-center text-[#FFFFFF1A] h-[52px] my-[40px] rounded border-[#262840] border-[2px]">
          Show me more
        </button>
      </div>

    )
  }
}

export default SmallestCardUi