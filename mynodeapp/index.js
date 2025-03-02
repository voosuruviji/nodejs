#!/usr/bin/env node
// Imports
import chalk from "chalk"; // Use `import` instead of `require`
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname issue in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load quotes from JSON file
const quotesPath = path.join(__dirname, "quotes.json");
const quotes = JSON.parse(fs.readFileSync(quotesPath, "utf8"));

// Pick a random quote
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

// Print the quote with formatting
console.log(chalk.green.bold("\n💬 Random Quote:\n"));
console.log(chalk.blueBright(`"${randomQuote}"\n`));
