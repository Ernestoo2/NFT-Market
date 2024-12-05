import React, { Component } from "react";

export class Nav extends Component {
  render() {
    return (
      <div className=" text-[#7780A1] ">
        <nav className="w-full lg:w-[523px] lg:h-[20px] lg:gap-[64px] sm:w-full md:w-[400px] md:text-sm sm:pr-2 h-[20px]  flex justify-evenly ">
            <a className="" href="/src/ui/MoreFirstUi.tsx">Aucion</a>
            <a className="" href="/src/ui/MoreFirstUi.tsx">Roadmap</a>
            <a className="" href="/src/ui/MoreFirstUi.tsx">Discover</a>
            <a className="" href="/src/ui/MoreFirstUi.tsx">Community</a>
        </nav>
      </div>
    )
  }
}

export default Nav