const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mysql = require('mysql2');

dotenv.config(); // Load environment variables

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON requests

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Smile Guard Backend is Running...');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
