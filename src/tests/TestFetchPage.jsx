import React, { useContext, useEffect, useState } from "react";
import { MarketContext, MarketProvider } from "../context/MarketContext"; // Import the context and provider
import DetailPage from "../pages/DetailPage"; // Import your DetailPage component

const TestFetchPage = () => {
  const { markets, loading, error, fetchMarkets } = useContext(MarketContext);
  const [selectedMarket, setSelectedMarket] = useState(null);

  // Fetch the markets when the component loads
  useEffect(() => {
    fetchMarkets(-122.27, 37.85, 30); // Example coordinates for testing
  }, [fetchMarkets]);

  useEffect(() => {
    // Set the first market as the selected one for testing
    if (markets.length > 0) {
      setSelectedMarket(markets[0]);
    }
  }, [markets]);

  if (loading) {
    return <p>Loading markets...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!selectedMarket) {
    return <p>No market available for testing.</p>;
  }

  // Render DetailPage for the first market in the list
  return <DetailPage listingId={selectedMarket.listing_id} />;
};

// Wrap TestFetchPage with MarketProvider to provide context
const WrappedTestFetchPage = () => (
  <MarketProvider>
    <TestFetchPage />
  </MarketProvider>
);

export default WrappedTestFetchPage;
