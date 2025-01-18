import BigCard from "../components/BigCard";
import React, { useEffect, useState } from "react";
import { cardData } from "../utils/api";
import { CardProps } from "../utils/type";

const BigCardUi: React.FC = () => {
  const [cards, setCards] = useState<CardProps[]>([]);

  useEffect(() => {
    // Simulate fetching card data
    setCards(cardData);
  }, []);

  return (
    
      <div className=" w-full flex overflow-x-auto gap-6 justify-center px-6">
      {cards.map((card) => (
        <BigCard
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
          url={card.url}
          price={card.price}
          timeLeftHr={card.timeLeftHr}
          timeLeftMin={card.timeLeftMin}
          numberBidding={card.numberBidding}
          likes={card.likes}
        />
      ))}
    
    </div>
  );
};

export default BigCardUi;
