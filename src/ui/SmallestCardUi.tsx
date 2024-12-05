import React, { Component } from "react";
import SmallestCard, { cardData2 } from "../components/SmallestCard";

export class SmallestCardUi extends Component {
  render() {
    return (
      <div className="w-[448px] h-[841px] text-center rounded-[20px] border border-[#262840]">
        <h2 className="font-Sora text-[#FFFFFF] font-600 text-[32px]  w-[314px] h-[80px] mx-[40px] my-[40px]">Top NFT at a lower price</h2>
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

        <button
          className="w-[368px] items-center justify-center text-[#FFFFFF1A] h-[52px] my-[40px] rounded border-[#262840] border-[2px]"
        >Show me more</button>
      </div>
    )
  }
}

export default SmallestCardUi