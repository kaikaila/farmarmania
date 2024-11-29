import React from "react";
import { useParams } from "react-router-dom";
import mockData from "../testDB.json"; // Import the data from the JSON file

const DetailPage = () => {
  const { listingId } = useParams(); // Retrieve the dynamic parameter from the URL
  const listing = mockData.data.find((item) => item.listing_id === listingId); // Find the record based on listing_id

  if (!listing) {
    return <div>Listing not found.</div>;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>{listing.listing_name}</h1>
      {listing.listing_image && (
        <img
          src={listing.listing_image}
          alt={listing.listing_name || "Listing Image"}
          style={{ width: "100%", maxWidth: "600px", borderRadius: "10px" }}
        />
      )}
      {listing.listing_desc && (
        <p>
          <strong>Description:</strong> {listing.listing_desc}
        </p>
      )}
      {listing.contact_name && (
        <p>
          <strong>Contact Name:</strong> {listing.contact_name}
        </p>
      )}
      {listing.contact_phone && (
        <p>
          <strong>Contact Phone:</strong> {listing.contact_phone}
        </p>
      )}
      {listing.contact_email && (
        <p>
          <strong>Contact Email:</strong> {listing.contact_email}
        </p>
      )}
      {listing.media_website && (
        <p>
          <strong>Website:</strong>{" "}
          <a
            href={listing.media_website}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
        </p>
      )}
      {listing.location_address && (
        <p>
          <strong>Address:</strong> {listing.location_address}
        </p>
      )}
      {listing.location_city && (
        <p>
          <strong>City:</strong> {listing.location_city}
        </p>
      )}
      {listing.location_state && (
        <p>
          <strong>State:</strong> {listing.location_state}
        </p>
      )}
      {listing.distance && (
        <p>
          <strong>Distance:</strong> {parseFloat(listing.distance).toFixed(2)}{" "}
          km
        </p>
      )}
      {listing.updatetime && (
        <p>
          <strong>Last Updated:</strong> {listing.updatetime}
        </p>
      )}
    </div>
  );
};

export default DetailPage;
