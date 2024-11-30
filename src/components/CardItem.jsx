import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MarketContext } from "../context/MarketContext";

const CardItem = ({ market }) => {
  const { savedList, handleSave, handleRemove } = useContext(MarketContext);
  const navigate = useNavigate(); // Hook to navigate to the detail page

  const handleDetail = () => {
    navigate(`/details/${market.listing_id}`); // Navigate to the detail page
  };

  return (
    <div className="card-item">
      <div className="card-content">
        {/* Market Name */}
        <h2 className="card-title">{market.listing_name}</h2>

        {/* Market Location */}
        <p className="card-location">
          <strong>Location:</strong>{" "}
          {market.location_address || "Address not provided"}
        </p>

        {/* Products */}
        <p className="card-products">
          <strong>Products:</strong>{" "}
          {market.listing_desc || "No product information"}
        </p>

        {/* Year-round Status */}
        <p className="card-year-round">
          <strong>Open Year-Round:</strong>{" "}
          {market.open_year_round ? "Yes" : "No"}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="card-actions">
        <button
          className="btn btn-save"
          onClick={handleSave}
          aria-label="Save Market"
        >
          ❤️ Save
        </button>
        <button
          className="btn btn-detail"
          onClick={handleDetail}
          aria-label="View Details"
        >
          Detail
        </button>
      </div>
    </div>
  );
};

export default CardItem;
