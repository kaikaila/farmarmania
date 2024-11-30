import React from "react";
import CardItem from "../components/CardItem"; // Import the CardItem component
import testDB from "../data/testDB.json"; // Import testDB.json for mock data

const TestCardItem = () => {
  return (
    <div className="test-card-item">
      <h1>Test CardItem</h1>
      <div className="card-list">
        {testDB.data.map((market) => (
          <CardItem
            key={market.listing_id} // Use listing_id as a unique key
            market={market} // Pass the market data to CardItem
            onSave={() => {}} // Provide an empty onSave function
          />
        ))}
      </div>
    </div>
  );
};

export default TestCardItem;
