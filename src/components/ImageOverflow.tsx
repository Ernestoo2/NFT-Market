import React from "react";

interface ImageOverflowProps {
  id: number;
  title: string;
  url: string;
  price: number;
}

export default function ImageOverflow({
  id,
  title,
  price,
  url
}: ImageOverflowProps) {
  return (
    <div className="relative w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] h-auto text-center rounded-lg mx-auto">
      <img
        src={url}
        alt={title}
        className="w-full h-20 border object-cover rounded-[20%]"
        loading="lazy"
      />
      <p className="text-[#7780A1] text-[12px] font-normal font-Inter mt-2">
        {price} ETH
      </p>
    </div>
  );
}
