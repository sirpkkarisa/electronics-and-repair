const express = require('express');
const connectDB = require('./models/db');
require('dotenv').config();
connectDB()
const routes = require('./routes/services')

const app = express();
const PORT  = process.env.PORT || 5000;

app.use('/api',routes)

app.listen(PORT, ()=> {
    console.log(`Server is running on PORT ${PORT}`);
});
