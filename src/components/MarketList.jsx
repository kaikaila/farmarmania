import React from "react";
import { useContext } from "react";
import CardItem from "./CardItem";
import { MarketProvider } from "../context/MarketContext";

function MarketList() {
  const { Market, deleteMarket } = useContext(MarketProvider);
  if (!Market || Market.length === 0) {
    return <p>No Market Meets Your Requirements.</p>;
  }

  return (
    <div className="Market-list">
      {/* {Market.map((item) => (
        <div>{item.listing_name}</div>
        <CardItem key={item.id} item={item} />
      ))} */}
    </div>
  );
}

export default MarketList;
