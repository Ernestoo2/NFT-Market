import MediumCard, { cardData1 } from "../components/MediumCard";
import React from "react";

const MediumCardUi = () => {
    return (

        <div className="w-[1500px] h-[855px]">
            <div className="w-[494px] h-[150px] ml-[600px]  items-center justify-center flex flex-col">
                <p className="text-[15px] font-Inter text-[#7780A1] items-center">OVERLINE</p>
                <h2 className="w-full h-[40px] text-[#FFFFFF] font-Sora text-[32px] font-600 text-center">Most popular live auctions</h2>
                <div className="flex w-[437px] h-[36px] items-center justify-center py-[70px] gap-[16px]   ">
                    <button className="text-[#7780A1] border p-1 border-[#7780A1] rounded">Architecture</button>
                    <button className="text-[#7780A1] border-[2px] p-1 border-[#7780A1] rounded">Photography</button>
                    <button className="text-[#7780A1] border p-1 border-[#7780A1] rounded">Games</button>
                    <button className="text-[#7780A1] border p-1 border-[#7780A1] rounded">Music</button>
                </div>
            </div>

            <div className="flex w-[1500px]  my-[117px] mx-[170px] py-5 ">
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
        </div>
    )
}

export default MediumCardUi
