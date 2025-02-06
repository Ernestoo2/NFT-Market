import React, { Component } from "react";
import image from "../Assets/MainImage.png";

export class MainCard extends Component {
    render() {
        return (
            <div className="bg-[#060714]  text-center w-full h-auto  border rounded-br-[20px] rounded-tr-[20px] rounded-bl-[20px] ">
               <div>
               <img 
               className="w-2/3 h-2/3 mx-auto rounded-[20px]" 
               src={image} alt="Main-image" />

               </div>
                <div className="w-full h-auto px-6 ">
                    <h3 className="w-full h-auto text-2xl font-[Inter] text-[#FFFFFF] font-600">
                        Get started creating & selling your NFTs
                    </h3>
                    <p className="w-full h-auto font-400 text-lg my-auto font-[Inter] text-[#7780A1]">
                        Nunc gravida faucibus netus feugiat tellus, viverra massa feugiat. Mi est sit.
                    </p>

                    <button className="w-full h-[52px] my-2  text-xl text-[#FFFFFF] bg-[#4745D0] rounded-[12px]">
                        Get started
                    </button>
                </div>
            </div>

        )
    }
}

export default MainCard
