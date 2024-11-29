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
  const BASE_URL = "https://www.usdalocalfoodportal.com/api/farmersmarket/";

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
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
        },
      });

      setMarkets(response.data.data || []); // Update markets with the response data
    } catch (err) {
      setError("Failed to fetch markets. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MarketContext.Provider
      value={{
        markets,
        loading,
        error,
        fetchMarkets,
      }}
    >
      {children}
    </MarketContext.Provider>
  );
};
