import MediumCard, { cardData1 } from "../../components/MediumCard";
import React from "react";

function DetailedPage1() {
    return (
        <div className="flex w-[1392px] h-[906px] border-[#262840] border m-24 rounded-[20px] ">
            <img
                src="/Assets/DetailsPage.png"
                className="w-[684px] h-auto rounded-[20px] mx-[24px] my-[24px]"
                alt="details page"
            />
            <div className="my-[48px] ">
                <div className="w-[496px] h-[120px] gap-[8px]  ">
                    <h2 className="w-[496px] h-[70px] font-600  text-[#FFFFFF] text-[25px] ">Dui accumsan leo <br /> vestibulum ornare</h2>
                    <p className="w-full h-[48px] text-[#7780A1] pt-1">Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
                    <div className="flex my-4 w-[374px] h-[51px]  ">
                        <span className="flex text-[14px] font-Inter font-400">
                            <img
                                src="/Assets/Ellipse.png"
                                className="w-[40px] h-[40px]"
                                alt="" />
                            <span className="flex flex-col mx-3  w-[118px] h-[51px]">
                                <span className="text-[#FFFFFF]">Creator</span>

                                <span className="text-[#FFFFFF]">@brock_sim</span>
                            </span>
                            <span className="absolute w-[100px]  h-[200px] p-7 ml-[490px]  ">
                                <img className="mb-5" src="/Assets/heart.png" alt="heart" />
                                <img className="mb-5" src="/Assets/copy.png" alt="copy" />
                                <img className="mb-5" src="/Assets/share.png" alt="" />
                            </span>


                        </span>
                        <span className="flex ">
                            <img src="/Assets/Ellipse1.png" alt="" />
                            <span className="flex flex-col mx-3  w-[118px] h-[51px]">
                                <span className="text-[#FFFFFF]">Collection</span>

                                <span className="text-[#FFFFFF]">Afterlife</span>
                            </span>
                        </span>
                    </div>
                </div>
                <div className="w-[495px] h-[235px] my-[80px] bg-[#060714]">
                    <div className="p-6 flex justify-between">
                        <span>
                            <p className="text-[#7780A1]">Current Price</p>
                            <h3 className="text-[#FFFFFF]"><em className="font-600 text-[56px]">5.35</em> ETH</h3>
                        </span>
                        <span>
                            <p className="text-[#7780A1]">Time Left</p>
                            <h2 className="text-[#FFFFFF]"> 22:59 mins</h2>
                            <p className="text-[#7780A1]">(01.01.2022 - 01:40:47)</p>
                        </span>
                    </div>
                    <button className="mx-7 p-3 text-[16px] rounded-[12px] text-[#FFFFFF] w-full bg-[#4745D0]">Place a bid</button>
                </div>
                <div className="p-6">
                    <img 
                    className="w-[495px] h-[227px] mt-[20px]"
                    src="/Assets/Chart.png"
                     alt="cahrt" />
                </div>
            </div>
        </div>


    )
}

export default DetailedPage1;