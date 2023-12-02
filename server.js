// server.js

const express = require('express');
const cors = require('cors'); // For handling Cross-Origin Resource Sharing (CORS)

const app = express();
const port = 3001; // You can use any port you prefer

app.use(cors()); // Enable CORS for all routes

// Sample analytics data
const analyticsData = [
  { id: 1, name: 'Category 1', value: 10 },
  { id: 2, name: 'Category 2', value: 20 },
  { id: 3, name: 'Category 3', value: 15 },
];

// Sample raw data
const rawData = [
  { id: 1, name: 'Item 1', value: 30 },
  { id: 2, name: 'Item 2', value: 25 },
  { id: 3, name: 'Item 3', value: 18 },
];

// Endpoint for analytics data
app.get('/api/analytics', (req, res) => {
  res.json(analyticsData);
});

// Endpoint for raw data
app.get('/api/rawData', (req, res) => {
  res.json(rawData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
