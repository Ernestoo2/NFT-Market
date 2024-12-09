import React, { Component } from "react";

export class Nav extends Component {
  render() {
    return (
      <div className="w-full max-w-full  py-3 mx-auto  text-[#7780A1] ">
        <nav className="w-full flex justify-evenly gap-[20px]   md:text-sm h-auto   ">
            <a className="hover:text-white transition-colors text-lg" href="/src/ui/MoreFirstUi.tsx">Aucion</a>
            <a className="hover:text-white transition-colors text-lg" href="/src/ui/MoreFirstUi.tsx">Roadmap</a>
            <a className="hover:text-white transition-colors text-lg" href="/src/ui/MoreFirstUi.tsx">Discover</a>
            <a className="hover:text-white transition-colors text-lg" href="/src/ui/MoreFirstUi.tsx">Community</a>
        </nav>
      </div>
    )
  }
}

export default Nav