import React from "react";
import { useState, useContext } from "react";
import { FaTimes } from "react-icons/fa";
import MarketContext from "../context/MarketContext";

export default MarketItem;

function MarketItem({ item }) {
  const { deleteMarket, editMarket } = useContext(MarketContext);
  // const [rating, setRating] = useState(7);
  // const [text, setText] = useState("this is an example of a Market item.");
  // const handleClick = () => {
  //   setRating((prev) => {
  //     return prev + 1;
  //   });
  //   };

  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <button
        onClick={() => {
          deleteMarket(item.id);
        }}
        className="close"
      >
        <FaTimes color="purple" />
      </button>

      <div className="text-display">{item.text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </div>
  );
}
