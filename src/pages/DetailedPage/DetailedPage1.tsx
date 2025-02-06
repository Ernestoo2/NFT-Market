import React from "react";
import image1 from "../../Assets/DetailsPage.png";
import image2 from "../../Assets/Ellipse.png";
import image3 from "../../Assets/Ellipse1.png";
import image4 from "../../Assets/heart.png";
import image5 from "../../Assets/copy.png";
import image6 from "../../Assets/share.png";
import image7 from "../../Assets/Chart.png";

function DetailedPage1() {
  return (
    <div className="flex flex-col w-full px-5  mx-auto md:flex-row my-10 md:px-10 lg:px-16 md:my-20 h-full gap-10 rounded-2xl   ">

      {/* Image Section */}
      <div className="flex w-full items-center justify-center h-auto border-[#262840] border rounded-2xl p-4">
        <img
          src={image1}
          className="w-full md:w-3/4 lg:w-2/3 h-auto rounded-2xl"
          alt="details page"
        />
      </div>

      {/* Content Section */}
      <div className="w-full my-6 md:my-12   ">
        <div className="w-full h-auto gap-2 ">
          <h2 className="px-3 tracking-tighter font-extrabold text-white text-lg md:text-2xl lg:text-3xl">
            Dui accumsan leo vestibulum ornare
          </h2>
          <p className="px-3 tracking-tighter text-[#7780A1] pt-1 text-sm md:text-base lg:text-lg">
            Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
            pulvinar ultricies dolor feugiat aliquam commodo.
          </p>

          {/* Creator, Collection, and Copy Section */}
          <div className="flex justify-between ">
            <div className="ml-3">
              {/* Creator Section */}
              <span className="flex items-center w-full md:flex-row md:w-1/3 text-base md:text-lg">
                <img
                  src={image2}
                  className="w-12 h-12"
                  alt="creator"
                />
                <span className="flex flex-col mx-3">
                  <span className="text-white text-lg">Creator</span>
                  <span className="text-white text-base">@brock_sim</span>
                </span>
              </span>

              {/* Collection Section */}
              <span className="flex items-center w-full md:w-1/3 text-base md:text-lg">
                <img
                  src={image3}
                  className="w-12 h-12"
                  alt="collection"
                />
                <span className="flex flex-col mx-3">
                  <span className="text-white text-lg">Collection</span>
                  <span className="text-white text-base">Afterlife</span>
                </span>
              </span>
            </div>

            {/* Copy Section */}
            <div className="    ">
              <span className="flex flex-col mr-[-7px] md:mr-[-20px]">
                <img
                  className="w-10 h-10 "
                  src={image4}
                  alt="heart"
                />
                <img
                  className="w-10 h-10 "
                  src={image5}
                  alt="copy"
                />
                <img
                  className="w-10 h-10 "
                  src={image6}
                  alt="share"
                />
              </span>
            </div>
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
            src={image7}
            alt="chart"
          />
        </div>
      </div>
    </div>
  );
}

export default DetailedPage1;
