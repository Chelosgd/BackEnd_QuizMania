const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const port = process.env.PORT || 3000; 

const app = express();

app.get('', (req, res) => {
    res.send('API works well!!!');
});

app.listen(port, () => {
    console.log('API is running');

});