const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const path = require('path');
const routes = require("./routes/index");
const cors = require('cors');

const port = process.env.PORT || 3000; 
const secretKey = process.env.SECRET_KEY;
const mongoURL = process.env.MONGO_URL;

const app = express();

app.use(cors())
app.use('', routes);

app.get('', (req, res) => {
    res.send('API works');
});

mongoose.connect(mongoURL).then(client =>{
    app.listen(port,() =>{ 
        console.log('API is running. Port:' + port);
    });
}).catch(err=>{
    console.log('Conection fails',err);
});