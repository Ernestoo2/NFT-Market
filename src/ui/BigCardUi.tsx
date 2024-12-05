import BigCard, { cardData } from "../components/BigCard";
import React, { Component } from "react";

export class BigCardUi extends Component {
    render() {
        return (
            <div className="flex w-[1700px] h-[767px] my-[117px] ml-[100px] gap-[24px] overflow-x-scroll scroll-my-18">
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
