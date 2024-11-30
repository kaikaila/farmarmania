const express = require("express");
const axios = require("axios");
const app = express();

const API_KEY = "Xcb6WnCyWD";
const BASE_URL = "https://www.usdalocalfoodportal.com/api/farmersmarket/";

app.get("/api/farmersmarket", async (req, res) => {
  console.log("Incoming request:", req.query); // Log incoming request parameters
  try {
    const { x, y, radius } = req.query;

    const response = await axios.get(
      "https://www.usdalocalfoodportal.com/api/farmersmarket/",
      {
        params: { apikey: "Xcb6WnCyWD", x, y, radius },
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
        },
      }
    );

    console.log("Upstream API response:", response.data); // Log API response
    res.json(response.data); // Forward the response to the client
  } catch (error) {
    console.error("Error fetching from upstream API:", error.message); // Log detailed error
    res
      .status(500)
      .json({ error: "Failed to fetch data", details: error.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
