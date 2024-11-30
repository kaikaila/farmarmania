import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create the context
export const MarketContext = createContext();

// Provider component
export const MarketProvider = ({ children }) => {
  const [markets, setMarkets] = useState([]); // State to hold the list of markets
  const [loading, setLoading] = useState(false); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  const API_KEY = "Xcb6WnCyWD"; // API Key
  const BASE_URL = "http://localhost:3001/api/farmersmarket";

  /**
   * Fetch markets based on search criteria.
   * @param {number} x - Longitude
   * @param {number} y - Latitude
   * @param {number} radius - Search radius in miles
   */
  const fetchMarkets = async (x, y, radius) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(BASE_URL, {
        params: {
          apikey: API_KEY,
          x,
          y,
          radius,
        },
      });

      setMarkets(response.data.data || []); // Update markets with the response data
    } catch (err) {
      setError("Failed to fetch markets. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const [savedList, setSavedList] = useState([]); // State for saved markets

  // Handle saving a market
  const handleSave = (market) => {
    setSavedList((prev) => {
      if (!prev.some((item) => item.listing_id === market.listing_id)) {
        return [...prev, market];
      }
      return prev;
    });
  };

  // Handle removing a market from the saved list
  const handleRemove = (market) => {
    setSavedList((prev) =>
      prev.filter((item) => item.listing_id !== market.listing_id)
    );
  };

  return (
    <MarketContext.Provider
      value={{
        markets,
        loading,
        error,
        savedList,
        handleSave,
        handleRemove,
        fetchMarkets,
      }}
    >
      {children}
    </MarketContext.Provider>
  );
};
