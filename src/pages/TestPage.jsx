import React, { useContext, useEffect, useState } from "react";
import { MarketContext, MarketProvider } from "./MarketContext"; // Import the context and provider
import DetailPage from "./DetailPage"; // Import your DetailPage component

const TestPage = () => {
  const { markets, loading, error, fetchMarkets } = useContext(MarketContext);
  const [selectedMarket, setSelectedMarket] = useState(null);

  // Fetch the markets when the component loads
  useEffect(() => {
    fetchMarkets(-84, 42, 30); // Example coordinates for testing
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

// Wrap TestPage with MarketProvider to provide context
const WrappedTestPage = () => (
  <MarketProvider>
    <TestPage />
  </MarketProvider>
);

export default WrappedTestPage;