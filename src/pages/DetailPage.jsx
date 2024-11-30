import React from "react";
import { useParams } from "react-router-dom";
import testDB from "../data/testDB.json"; // Import mock data from testDB.json

const DetailPage = () => {
  const { listing_id } = useParams(); // Extract listing_id from the URL
  const listing = testDB.data.find((item) => item.listing_id === listing_id); // Find the market by ID

  if (!listing) {
    return <div>Listing not found.</div>;
  }

  return (
    <main id="detail-page">
      <header id="detail-header">
        <h1 className="detail-title">{listing.listing_name}</h1>
      </header>
      {listing.listing_image && (
        <section id="image-section">
          <img
            className="detail-image"
            src={listing.listing_image}
            alt={listing.listing_name || "Listing Image"}
          />
        </section>
      )}
      <section id="details-section">
        {listing.listing_desc && (
          <p className="detail-description">
            <strong>Description:</strong> {listing.listing_desc}
          </p>
        )}
        {listing.contact_name && (
          <p className="detail-contact-name">
            <strong>Contact Name:</strong> {listing.contact_name}
          </p>
        )}
        {listing.contact_phone && (
          <p className="detail-contact-phone">
            <strong>Contact Phone:</strong> {listing.contact_phone}
          </p>
        )}
        {listing.contact_email && (
          <p className="detail-contact-email">
            <strong>Contact Email:</strong> {listing.contact_email}
          </p>
        )}
        {listing.media_website && (
          <p className="detail-website">
            <strong>Website:</strong>{" "}
            <a
              id="website-link"
              href={listing.media_website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
          </p>
        )}
        {listing.location_address && (
          <p className="detail-address">
            <strong>Address:</strong> {listing.location_address}
          </p>
        )}
        {listing.location_city && (
          <p className="detail-city">
            <strong>City:</strong> {listing.location_city}
          </p>
        )}
        {listing.location_state && (
          <p className="detail-state">
            <strong>State:</strong> {listing.location_state}
          </p>
        )}
        {listing.distance && (
          <p className="detail-distance">
            <strong>Distance:</strong> {parseFloat(listing.distance).toFixed(2)}{" "}
            km
          </p>
        )}
        {listing.updatetime && (
          <p className="detail-updatetime">
            <strong>Last Updated:</strong> {listing.updatetime}
          </p>
        )}
      </section>
    </main>
  );
};

export default DetailPage;
