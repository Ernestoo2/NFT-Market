import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img
        src="/Assets/Logo.png"
        alt="NFT Market Logo"
        className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"
      />
      <h3 className="text-lg font-semibold text-[#7780A1]">NFT MARKET</h3>
    </div>
  );
}
