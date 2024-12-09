import React, { Component } from "react";

export class MainCard extends Component {
    render() {
        return (
            <div className="bg-[#060714] text-center w-full border rounded-br-[20px] rounded-tr-[20px] rounded-bl-[20px] gap-[20px]">
                <img
                    className="w-full h-auto  rounded-[20px] "
                    src="/Assets/MainImage.png"
                    alt="Main-image" />
                
                <div className="w-full h-auto px-[41px]  gap-[8px]">
                    <h3 className="w-full h-[60px] text-[24px] font-[Inter] text-[#FFFFFF] font-600">Get started creating & selling your NFTs</h3>
                    <p className="w-full h-[51px] font-400 text-[14px] my-2 font-[Inter] text-[#7780A1]">Nunc gravida faucibus netus feugiat tellus, viverra massa feugiat. Mi est sit.</p>
                
                <button className="w-full h-[52px] my-2  gap-[10px] text-[#FFFFFF] bg-[#4745D0] rounded-[12px] ">Get started</button>
                </div>
        
      </div>
    )
  }
}

export default MainCard
