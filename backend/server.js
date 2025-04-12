const express = require('express');
const cors = require('cors');
require('dotenv').config();

const eventsRoute = require('./routes/events');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Use modular route
app.use('/api/events', eventsRoute);

const bookRoute = require('./routes/book');
app.use('/api/book', bookRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
