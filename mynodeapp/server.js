import express from "express";
import { readFile } from "fs/promises";

const app = express();
const PORT = 3000;

// Load quotes from JSON file
const quotes = JSON.parse(await readFile(new URL("./quotes.json", import.meta.url)));

// Function to get a random quote
function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

// API route to return a random quote
app.get("/", (req, res) => {
  res.json({ quote: getRandomQuote() });
});

// Start the server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
