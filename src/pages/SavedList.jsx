import React from "react";
import { useContext } from "react";
import CardItem from "../components/CardItem"; // Import the CardItem component
import { MarketContext } from "../context/MarketContext";

const SavedList = () => {
  const { savedList, handleSave, handleRemove } = useContext(MarketContext);

  return (
    <div className="saved-list-page">
      <h1>Saved List</h1>
      {savedList.length === 0 ? (
        <p className="error-message" id="no-saved-items">
          No items saved yet. Start adding your favorite markets!
        </p>
      ) : (
        <div className="saved-list">
          {savedList.map((market) => (
            <CardItem
              key={market.listing_id}
              market={market} // Pass the market data to CardItem
              onSave={handleRemove} // Pass a function to remove from saved list
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedList;
