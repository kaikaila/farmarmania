import React, { useState, useEffect } from "react";
import DetailPage from "../pages/DetailPage"; // Import your DetailPage component
import testDB from "../testDB.json"; // Import testDB.json directly

const TestDetailPage = () => {
  const [listingData, setListingData] = useState(null);

  useEffect(() => {
    // Simulate fetching data from testDB.json
    const mockFetch = async () => {
      // Simulate a delay for testing purposes (optional)
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Find a specific listing in the test data (e.g., by ID)
      const listing = testDB.data.find((item) => item.listing_id === "311134");
      setListingData(listing);
    };

    mockFetch();
  }, []);

  if (!listingData) {
    return <p>Loading test data...</p>;
  }

  // Render DetailPage with the test data
  return <DetailPage listing={listingData} />;
};

export default TestDetailPage;
