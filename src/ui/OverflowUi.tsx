import ImageOverflow from "../components/ImageOverflow";
import React, { Component } from "react";
import { ImageOverflowData } from "../utils/api";

export class OverflowUi extends Component {
  render() {
    return (
      <div className="flex overflow-x-auto h-auto w-full justify-start my-[48px] gap-[20px] px-4">
        {ImageOverflowData.map((card) => (
          <ImageOverflow
            key={card.id}
            id={card.id}
            title={card.title}
            url={card.url}
            price={card.price}
          />
        ))}
      </div>
    );
  }
}

export default OverflowUi;
