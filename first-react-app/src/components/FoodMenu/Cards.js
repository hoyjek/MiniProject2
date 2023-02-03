import React from "react";
import "./Card.css";

const Cards = ({ item, handleClick }) => {
  const { MenuName, DesCribeDish, price, img } = item;
  return (
    <div className="cards" id="menu">
      <div className="image_box">
        <img src={img} alt="Image" />
      </div>
      <div className="details">
        <p>{MenuName}</p>
        <p>{DesCribeDish}</p>
        <p>Price - P{price}</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;
