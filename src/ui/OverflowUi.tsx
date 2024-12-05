import ImageOverflow, { ImageOverflowData } from "../components/ImageOverflow";
import React, { Component } from "react";

export class OverflowUi extends Component {
  render() {
    return (
        <div className="flex mx-[117px] my-[48px] gap-1">
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
    )
  }
}

export default OverflowUi
