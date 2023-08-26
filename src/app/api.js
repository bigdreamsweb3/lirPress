// path: ./src/app/api.js
import axios from "axios";
import { updateLog } from "./plugjs/log-message";

// Load environment variables
const apiUrl = import.meta.env.VITE_API_URL;

export async function shortenUrl(longUrl, appUrl) {
  try {
    const response = await axios.post(`${apiUrl}/shorten`, {
      url: longUrl,
      appUrl: appUrl,
    });

    const log = "Awaiting API response";
    updateLog(log); // Log the message while awaiting the response

    return response.data || response; // Return response.data if it exists, otherwise return the entire response
  } catch (error) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );

    const log = `Error: ${
      error.response ? error.response.data : error.message
    }`;
    updateLog(log); // Log the error message
    throw error;
  }
}

export async function getShortUrl(shortCode) {
  try {
    const response = await axios.get(`${apiUrl}/${shortCode}`);
    const redirectUrl = response.data.longUrl;
    window.location.href = redirectUrl;
    return response.data.longUrl;
  } catch (error) {
    throw error;
  }
}
