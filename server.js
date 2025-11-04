const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

// Load env vars
dotenv.config();

// Connect to Database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

connectDB();

// Initialize app
const app = express();

// Middlewares
app.use(cors()); // Enable CORS
app.use(express.json()); // Body parser for JSON

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/enquiries', require('./routes/enquiries'));

// Simple test route
app.get('/', (req, res) => {
  res.send('Fastor CRM API running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});