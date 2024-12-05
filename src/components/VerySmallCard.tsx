import React from "react";

interface SmallcardProps {
    smallid: number;
    smalltitle: string;
    smallurl: string;
  }


  export default function SmallCard({
    smallid,
    smalltitle,
    smallurl
  }: SmallcardProps) {
    return(
        <div className="relative w-[1/2] rounded-lg ">
            <img
            src={smallurl}
            alt={smalltitle}
            className="w-[32px] h-[32px] border-[2px] object-cover rounded-[50%]"
            />
        </div>
    );
}

