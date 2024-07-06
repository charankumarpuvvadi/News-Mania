const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./routes/index');
require('dotenv').config();

const url = process.env.mongoURL;
mongoose.connect(url+'newsmania', {
  serverSelectionTimeoutMS: 30000, // 30 seconds
  socketTimeoutMS: 45000 
});

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', router);

const port = 3010;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});