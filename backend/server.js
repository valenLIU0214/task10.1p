
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();  // This will load environment variables from a .env file


const app = express();

const cors = require('cors');

app.use(cors());  // This enables CORS for all routes and all origins

app.use(bodyParser.json());

// Import the router from your routes.js file
const router = require('./routes');  

// Use the router with '/api' as the base route
app.use('/api', router);

// Define the port to listen on (either from environment variables or default to 5000)
const PORT = process.env.PORT || 5000;

// Start the server and listen on the port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
