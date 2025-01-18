import React from "react";

function DetailedPage1() {
    return (
      <div className="flex flex-col w-full md:flex-row my-10 md:my-20 h-full border-[#262840] border rounded-2xl">
        {/* Image Section */}
        <div className="flex w-full items-center justify-center h-auto border-[#262840] border rounded-2xl p-4">
          <img
            src="/Assets/DetailsPage.png"
            className="w-11/12 md:w-3/4 lg:w-2/3 h-auto rounded-2xl"
            alt="details page"
          />
        </div>
  
        {/* Content Section */}
        <div className="w-full my-6 md:my-12 px-4 md:px-8 lg:px-12">
          <div className="w-full h-auto gap-2">
            <h2 className="font-extrabold text-white text-lg md:text-2xl lg:text-3xl">
              Dui accumsan leo vestibulum ornare
            </h2>
            <p className="text-[#7780A1] pt-1 text-sm md:text-base lg:text-lg">
              Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
              pulvinar ultricies dolor feugiat aliquam commodo.
            </p>
  
            {/* Creator, Collection, and Copy Section */}
            <div className="flex flex-col md:flex-row justify-between my-4 py-2 w-full space-y-4 md:space-y-0 md:space-x-4">
              {/* Creator Section */}
              <span className="flex items-center w-full md:w-1/3 text-base md:text-lg">
                <img
                  src="/Assets/Ellipse.png"
                  className="w-12 h-12"
                  alt="creator"
                />
                <span className="flex flex-col mx-3">
                  <span className="text-white">Creator</span>
                  <span className="text-white">@brock_sim</span>
                </span>
              </span>
  
              {/* Collection Section */}
              <span className="flex items-center w-full md:w-1/3 text-base md:text-lg">
                <img
                  src="/Assets/Ellipse1.png"
                  className="w-12 h-12"
                  alt="collection"
                />
                <span className="flex flex-col mx-3">
                  <span className="text-white">Collection</span>
                  <span className="text-white">Afterlife</span>
                </span>
              </span>
  
              {/* Copy Section */}
              <span className="flex items-center justify-center md:justify-start w-full md:w-1/3 space-x-4 md:space-x-0 md:space-y-4">
                <img
                  className="w-10 h-10"
                  src="/Assets/heart.png"
                  alt="heart"
                />
                <img
                  className="w-10 h-10"
                  src="/Assets/copy.png"
                  alt="copy"
                />
                <img
                  className="w-10 h-10"
                  src="/Assets/share.png"
                  alt="share"
                />
              </span>
            </div>
          </div>
  
          {/* Price and Time Left Section */}
          <div className="w-full h-auto my-10 bg-[#060714] px-6 py-8 rounded-xl">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              {/* Current Price */}
              <div className="text-center md:text-left">
                <p className="text-[#7780A1]">Current Price</p>
                <h3 className="text-white">
                  <em className="font-bold text-3xl md:text-4xl">5.35</em> ETH
                </h3>
              </div>
  
              {/* Time Left */}
              <div className="text-center md:text-right">
                <p className="text-[#7780A1]">Time Left</p>
                <h2 className="text-white text-2xl">22:59 mins</h2>
                <p className="text-[#7780A1] text-sm">(01.01.2022 - 01:40:47)</p>
              </div>
            </div>
  
            {/* Place a Bid Button */}
            <button className="mx-auto block py-3 text-base rounded-xl text-white w-3/4 bg-[#4745D0] mt-6">
              Place a bid
            </button>
          </div>
  
          {/* Chart Section */}
          <div className="p-4">
            <img
              className="w-full h-auto mt-5 rounded-xl"
              src="/Assets/Chart.png"
              alt="chart"
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default DetailedPage1;
