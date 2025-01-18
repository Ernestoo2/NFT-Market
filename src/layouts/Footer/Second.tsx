import React, { Component } from "react";
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { ImSkype } from "react-icons/im";

export class Second extends Component {
  render() {
    return (
      <div className="w-full md:w-1/3 flex flex-col items-start gap-6 p-6 bg-[#111] rounded-lg">
        {/* Navigation Links */}
        <div className="flex flex-col space-y-2 text-sm">
          <h4 className="font-semibold">Auctions</h4>
          <h4 className="font-semibold">Roadmap</h4>
          <h4 className="font-semibold">Discover</h4>
          <h4 className="font-semibold">Community</h4>
        </div>

        {/* Button */}
        <button className="px-4 py-2 text-sm bg-[#2A27C9] rounded-md hover:bg-[#1D1AA8] transition">
          My Account
        </button>

        {/* Social Icons */}
        <div className="flex space-x-3 mt-4">
          <FaFacebookSquare className="w-6 h-6 fill-[#E2E2ED] hover:fill-white transition" />
          <FaLinkedin className="w-6 h-6 fill-[#E2E2ED] hover:fill-white transition" />
          <FaGithubSquare className="w-6 h-6 fill-[#E2E2ED] hover:fill-white transition" />
          <ImSkype className="w-6 h-6 fill-[#E2E2ED] hover:fill-white transition" />
          <FaInstagramSquare className="w-6 h-6 fill-[#E2E2ED] hover:fill-white transition" />
        </div>
      </div>
    );
  }
}

export default Second;
