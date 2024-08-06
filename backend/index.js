
const express = require('express');
const { connectDatabase } = require('./src/config/database');
const authRoutes = require('./src/routes/authRoutes');

const app = express();
app.use(express.json());

// Connect to database
connectDatabase();

// Use routes
app.use('/auth', authRoutes);

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});

