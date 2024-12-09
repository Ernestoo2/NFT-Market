import React from "react";

function DetailedPage1() {
    return (
      <div className="flex  w-full md:flex-col lg:flex-row my-[100px] h-full border-[#262840] border rounded-[20px]">
        {/* Image Section */}
        <div className="w-full  items-center justify-items-center  h-auto border-[#262840] border rounded-[20px]">
          <img
            src="/Assets/DetailsPage.png"
            className="w-3/4 h-4/5 rounded-[25px] px-[24px] my-[24px]"
            alt="details page"
          />
        </div>
  
        {/* Content Section */}
        <div className="w-full my-[48px] px-6">
          <div className="w-full h-auto gap-[8px]">
            <h2 className="w-full h-[70px] font-extrabold text-[#FFFFFF] text-[30px] break-normal">
              Dui accumsan leo vestibulum ornare
            </h2>
            <p className="w-full h-auto text-[#7780A1] pt-1 text-[18px] break-normal">
              Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
              pulvinar ultricies dolor feugiat aliquam commodo.
            </p>
  
            {/* Creator, Collection, and Copy Section */}
            <div className="flex flex-col md:flex-row justify-between my-4 py-2 w-full h-auto space-y-4 md:space-y-0 md:space-x-4">
              {/* Creator Section */}
              <span className="flex items-center w-full md:w-1/3 text-[20px] font-semibold">
                <img
                  src="/Assets/Ellipse.png"
                  className="w-[60px] h-[60px]"
                  alt="creator"
                />
                <span className="flex flex-col mx-3">
                  <span className="text-[#FFFFFF]">Creator</span>
                  <span className="text-[#FFFFFF]">@brock_sim</span>
                </span>
              </span>
  
              {/* Collection Section */}
              <span className="flex items-center w-full md:w-1/3 text-[20px] font-semibold">
                <img
                  src="/Assets/Ellipse1.png"
                  className="w-[60px] h-[60px]"
                  alt="collection"
                />
                <span className="flex flex-col mx-3">
                  <span className="text-[#FFFFFF]">Collection</span>
                  <span className="text-[#FFFFFF]">Afterlife</span>
                </span>
              </span>
  
              {/* Copy Section */}
              <span className="flex flex-row md:flex-col items-center md:items-end w-full md:w-1/3 justify-center md:justify-start space-x-4 md:space-x-0 md:space-y-5">
                <img
                  className="w-[50px] h-auto"
                  src="/Assets/heart.png"
                  alt="heart"
                />
                <img
                  className="w-[50px] h-auto"
                  src="/Assets/copy.png"
                  alt="copy"
                />
                <img
                  className="w-[50px] h-auto"
                  src="/Assets/share.png"
                  alt="share"
                />
              </span>
            </div>
          </div>
  
          {/* Price and Time Left Section */}
          <div className="w-full h-auto md:h-[235px] my-[80px] bg-[#060714] px-6 rounded-[12px]">
            <div className="p-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Current Price */}
              <div className="text-center md:text-left">
                <p className="text-[#7780A1]">Current Price</p>
                <h3 className="text-[#FFFFFF]">
                  <em className="font-bold text-[56px]">5.35</em> ETH
                </h3>
              </div>
  
              {/* Time Left */}
              <div className="text-center md:text-right">
                <p className="text-[#7780A1]">Time Left</p>
                <h2 className="text-[#FFFFFF]">22:59 mins</h2>
                <p className="text-[#7780A1]">(01.01.2022 - 01:40:47)</p>
              </div>
            </div>
  
            {/* Place a Bid Button */}
            <button className="mx-auto block p-3 text-[16px] rounded-[12px] text-[#FFFFFF] w-3/4 bg-[#4745D0] mb-4">
              Place a bid
            </button>
          </div>
  
          {/* Chart Section */}
          <div className="p-6">
            <img
              className="w-full h-[427px] mt-[20px] rounded-[12px]"
              src="/Assets/Chart.png"
              alt="chart"
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default DetailedPage1;