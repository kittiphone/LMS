
// Import required modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./models/database.utils');
const userRoutes = require('./routes/userRoutes');
const profileRoutes = require('./routes/profileRoutes');
const courseRoutes = require('./routes/courseRoutes');

// Create an express application.
const app = express();

// Enable Cross-Origin Resource Sharing (CORS) for all routes.
app.use(cors());

// Parse JSON bodies of incoming HTTP requests.
app.use(bodyParser.json());

// Mount the application's routes
app.use('/user', userRoutes);
app.use('/profile', profileRoutes);
app.use('/course', courseRoutes);

// Connect to the database.
connection.connect((err) => {
  if (err) {
    console.error('Failed to connect to the database');
    throw err;
  }
  console.log('Connected to the database!');
});

// Start listening to incoming HTTP requests.
app.listen(3000, () => console.log('Server running on port 3000'));

// Export the express application object as a module.
module.exports = app;