const express = require('express');  // Import Express.js
require('dotenv').config();

const app = express();  // Create an Express application instance
const port = process.env.PORT || 8090;  // Set the port number

// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);  // Log request method and URL
  next();  // Pass control to the next middleware/route
});

// Route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to our Express.js demo!');  // Send response for the root URL
});

// Route with a URL parameter (e.g., /greet/John)
app.get('/greet/:name', (req, res) => {
  res.send(`Hello, ${req.params.name}!`);  // Send personalized greeting
});

// Custom error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);  // Log the error stack trace
  res.status(500).send('Something broke!');  // Respond with a 500 Internal Server Error
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);  // Log when the server is up
});