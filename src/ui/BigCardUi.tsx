import BigCard, { cardData } from "../components/BigCard";
import React, { Component } from "react";

export class BigCardUi extends Component {
    render() {
        return (
            <div className="flex w-full h-[600px] my-[117px]  gap-[24px]  overflow-x-scroll ">
                {cardData.map(card => (
                    <BigCard
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
        )
    }
}

export default BigCardUi
