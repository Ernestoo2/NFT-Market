import MediumCard from "../components/MediumCard";
import React, { Component } from "react";
import { cardData1 } from "../utils/api";

export class MoreFirstUi extends Component {
    render() {
        return (
            <div className="w-full   text-center h-auto rounded-[20px] border">
                <h2 className="w-full break-normal text-[#FFFFFF] h-[80px] mx-auto my-[40px] font-600 text-[32px]">
                    Check out the hottest Sale offers
                </h2>

                <div className="flex w-full h-auto overflow-x-scroll mx-auto gap-4">
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
                <button className="w-3/4 items-center text-xl justify-center text-[#FFFFFF1A] h-[52px] my-[40px] mx-auto rounded border-[#262840] border-[2px]">
                    Show me more
                </button>
            </div>
        )
    }
}

export default MoreFirstUi
