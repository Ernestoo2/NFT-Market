import React, { Component } from "react";

export class Third extends Component {
  render() {
    return (
      <div className="w-full md:w-1/3 flex flex-col items-start gap-6 p-6 bg-[#111] rounded-lg">
        {/* Description */}
        <p className="text-sm text-[#7780A1]">
          Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis.
        </p>

        {/* Newsletter Section */}
        <div className="flex items-center w-full bg-white shadow-md rounded-md p-3 justify-between">
          <span className="text-sm text-[#7780A1]">Newsletter</span>
          <button className="text-sm font-semibold text-[#2A27C9] hover:underline">
            Sign In
          </button>
        </div>
      </div>
    );
  }
}

export default Third;
