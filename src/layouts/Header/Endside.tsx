import React from "react";

export default function Endside() {
  return (
    <div className="flex flex-col md:flex-row gap-2">
      <button
        className="w-full md:w-auto px-4 py-2 text-sm md:text-base text-[#7780A1] rounded-md bg-white border border-[#7780A1] hover:bg-[#7780A1] hover:text-white transition"
      >
        Contact
      </button>
      <button
        className="w-full md:w-auto px-4 py-2 text-sm md:text-base text-white rounded-md bg-[#2A27C9] hover:bg-[#1D1AA8] transition"
      >
        My Account
      </button>
    </div>
  );
}
