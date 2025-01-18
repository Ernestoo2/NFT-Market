import React, { Component } from "react";

export class First extends Component {
  render() {
    return (
      <div className="w-full md:w-1/3 flex flex-col items-start gap-6 p-6 bg-[#111] rounded-lg">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img src="/Assets/Logo.png" alt="NFT Market Logo" className="w-10 h-10" />
          <h3 className="text-lg font-semibold">NFT MARKET</h3>
        </div>

        {/* Links Section */}
        <div className="flex flex-col space-y-2 text-sm">
          <a href="/src/ui/MoreFirstUi.tsx" className="hover:text-[#2A27C9] transition">
            Support
          </a>
          <a href="/src/ui/MoreFirstUi.tsx" className="hover:text-[#2A27C9] transition">
            Terms of Service
          </a>
          <a href="/src/ui/MoreFirstUi.tsx" className="hover:text-[#2A27C9] transition">
            Licence
          </a>
        </div>
      </div>
    );
  }
}

export default First;
