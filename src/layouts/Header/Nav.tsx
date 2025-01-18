import React from "react";

export default function Nav() {
  return (
    <nav className="flex flex-col md:flex-row md:items-center md:gap-8">
      <a
        className="text-[#7780A1] text-sm md:text-base hover:text-white transition-colors"
        href="/src/ui/MoreFirstUi.tsx"
      >
        Auction
      </a>
      <a
        className="text-[#7780A1] text-sm md:text-base hover:text-white transition-colors"
        href="/src/ui/MoreFirstUi.tsx"
      >
        Roadmap
      </a>
      <a
        className="text-[#7780A1] text-sm md:text-base hover:text-white transition-colors"
        href="/src/ui/MoreFirstUi.tsx"
      >
        Discover
      </a>
      <a
        className="text-[#7780A1] text-sm md:text-base hover:text-white transition-colors"
        href="/src/ui/MoreFirstUi.tsx"
      >
        Community
      </a>
    </nav>
  );
}
