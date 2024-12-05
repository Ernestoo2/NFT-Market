import React from "react";

interface ImageOverflowProps {
  id: number;
  title: string;
  url: string;
  price: number;
}

export const ImageOverflowData: ImageOverflowProps[] = [
  {
    id: 1,
    title: "Card 1",
    url: "/Assets/Overflow/image1.png",
    price: 10.99,
  },
  {
    id: 2,
    title: "Card 2",
    url: "/Assets/Overflow/image2.png",
    price: 8.99,
  },
  {
    id: 3,
    title: "Card 3",
    url: "/Assets/Overflow/image3.png",
    price: 6.99,
  },
  {
    id: 4,
    title: "Card 4",
    url: "/Assets/Overflow/image4.png",
    price: 4.99,
  },
  {
    id: 5,
    title: "Card 5",
    url: "/Assets/Overflow/Image5.png",
    price: 2.99,
  },
  {
    id: 6,
    title: "Card 6",
    url: "/Assets/Overflow/Image6.png",
    price: 1.99,
  },
  {
    id: 7,
    title: "Card 7",
    url: "/Assets/Overflow/Image7.png",
    price: 0.99,
  },
  {
    id: 8,
    title: "Card 8",
    url: "/Assets/Overflow/Image8.png",
    price: 0.49,
  },
  {
    id: 9,
    title: "Card 9",
    url: "/Assets/Overflow/image9.png",
    price: 0.29,
  }, {
    id: 10,
    title: "Card 10",
    url: "/Assets/Overflow/image10.png",
    price: 4.19,
  }, {
    id: 11,
    title: "Card 11",
    url: "/Assets/Overflow/image11.png",
    price: 3.59,
  },
  {
    id: 12,
    title: "Card 12",
    url: "/Assets/Overflow/image12.png",
    price: 2.09,
  },
  {
    id: 13,
    title: "Card 13",
    url: "/Assets/Overflow/image13.png",
    price: 2.49,
  },
  {
    id: 14,
    title: "Card 14",
    url: "/Assets/Overflow/image14.png",
    price: 3.99,
  },
  {
    id: 15,
    title: "Card 15",
    url: "/Assets/Overflow/image15.png",
    price: 2.99,
  },
  {
    id: 16,
    title: "Card 16",
    url: "/Assets/Overflow/image16.png",
    price: 1.99,
  },
  {
    id: 17,
    title: "Card 17",
    url: "/Assets/Overflow/image17.png",
    price : 2.29
  },





]

export default function ImageOverflow({
  id,
  title,
  price,
  url
}: ImageOverflowProps) {
  return (
    <div className="relative w-[1\2] text-center rounded-lg ">
      <img src={url} alt={title}
        className="w-[89px] h-[89px] border object-cover rounded-[20%]"
      />
      <p className=" text-[#7780A1] text-[14px] font-400 font-Inter items-center">{price} ETH</p>
    </div>
  );
}


/* <div>
  {ImageOverflowData.map(card => (
    <ImageOverflow
      key={card.id}
      id={card.id}
      title={card.title}
      url={card.url}
    />
  ))}
</div> */