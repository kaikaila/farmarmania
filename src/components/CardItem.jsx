import React, { useContext } from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5"; // Import heart icons
import { MarketContext } from "../context/MarketContext"; // Import MarketContext
import { useNavigate } from "react-router-dom";

const CardItem = ({ market }) => {
  const { savedList, handleSave, handleRemove } = useContext(MarketContext); // Use context
  const navigate = useNavigate();

  // Check if the market is in the saved list
  const isSaved = savedList.some(
    (item) => item.listing_id === market.listing_id
  );

  // Toggle save/remove
  const handleToggleSave = () => {
    if (isSaved) {
      handleRemove(market);
    } else {
      handleSave(market);
    }
  };

  // Navigate to detail page
  const handleDetail = () => {
    navigate(`/details/${market.listing_id}`);
  };

  return (
    <div className="card-item">
      <div className="card-content">
        {/* Market Name */}
        <h2 className="card-title">{market.listing_name}</h2>

        {/* Market Location */}
        <p className="card-location">
          <strong>Location:</strong> {market.location_address || "Not provided"}
        </p>

        {/* Products */}
        <p className="card-products">
          <strong>Products:</strong> {market.listing_desc || "Not available"}
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
          onClick={handleToggleSave}
          aria-label={isSaved ? "Unsave Market" : "Save Market"}
        >
          {isSaved ? (
            <IoHeart size={20} color="red" />
          ) : (
            <IoHeartOutline size={20} />
          )}
          {isSaved ? " Saved" : " Save"}
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
