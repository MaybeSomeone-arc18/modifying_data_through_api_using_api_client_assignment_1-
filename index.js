const express = require('express');  // Import Express
const mongoose = require('mongoose');  // Import Mongoose
const dotenv = require('dotenv'); // Import dotenv

dotenv.config(); // Load environment variables

const app = express();  // ✅ Initialize Express

app.use(express.json()); // ✅ Middleware to parse JSON

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Sample route
app.get('/', (req, res) => {
  res.send("API is working!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
