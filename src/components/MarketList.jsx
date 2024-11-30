import React, { useState } from "react";
import CardItem from "./CardItem"; // Import the CardItem component
import testDB from "../data/testDB.json"; // Import mock data from testDB.json

const MarketList = () => {
  const [savedList, setSavedList] = useState([]); // State to track saved markets

  // Handle saving a market
  const handleSave = (market) => {
    // Add the market to the saved list only if it's not already there
    setSavedList((prev) => {
      if (!prev.some((item) => item.listing_id === market.listing_id)) {
        return [...prev, market];
      }
      return prev;
    });
  };

  return (
    <div className="market-list">
      <h1>Farmers Markets</h1>

      {/* Render the list of CardItem components */}
      <div className="card-list">
        {testDB.data.map((market) => (
          <CardItem
            key={market.listing_id} // Use the unique listing_id as the key
            market={market} // Pass the market data to the CardItem
            onSave={handleSave} // Pass the save function to CardItem
          />
        ))}
      </div>

      {/* Display Saved List */}
      <div className="saved-list" style={{ marginTop: "20px" }}>
        <h2>Saved List ({savedList.length})</h2>
        <ul>
          {savedList.map((item) => (
            <li key={item.listing_id}>
              {item.listing_name} - {item.location_address}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MarketList;
