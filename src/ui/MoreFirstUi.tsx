import MediumCard, { cardData1 } from "../components/MediumCard";
import React, { Component } from "react";

export class MoreFirstUi extends Component {
    render() {
        return (
            <div className="w-[35%]    text-center h-auto rounded-[20px] border">
                <h2
                    className="w-full break-normal text-[#FFFFFF] h-[80px] mx-auto my-[40px] font-600 text-[32px]"
                >Check out the hottest Sale offers</h2>

                <div className=" flex w-4/5 h-auto  overflow-x-scroll  mx-auto gap-[20px] ">

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
                <button
                    className="w-3/4 items-center text-3xl justify-center text-[#FFFFFF1A] h-[52px] my-[40px]  mx-auto rounded border-[#262840] border-[2px]"
                >Show me more</button>
            </div>
        )
    }
}

export default MoreFirstUi
