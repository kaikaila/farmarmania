import React from "react";
import { useContext } from "react";
import MarketItem from "./MarketItem";
import MarketContext from "../context/MarketContext";

function MarketList() {
  const { Market, deleteMarket } = useContext(MarketContext);
  if (!Market || Market.length === 0) {
    return <p>No Market Meets Your Requirements.</p>;
  }

  return (
    <div className="Market-list">
      {Market.map((item) => (
        // <div>{item.rating}</div>
        <MarketItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default MarketList;
