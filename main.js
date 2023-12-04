const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const path = require('path');
const routes = require("./routes/index");
const cors = require('cors');
const multer = require('multer');

const port = process.env.PORT || 3000; 
const secretKey = process.env.SECRET_KEY;
const mongoURL = process.env.MONGO_URL;

const app = express();

app.use(cors())
app.use('', routes);

app.get('', (req, res) => {
    res.send('API works');
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        const ts = new Date().getTime();
        const ext = file.originalname.split('.').pop();
        const name = `${ts}.${ext}`;
        cb(null, name);
    }
});

const fileFilter = (req, file, cb) => {
    const isValid = file.mimetype.startsWith('image/');
    cb(null, isValid);
}

const uploadMiddleware = multer({storage, fileFilter});

app.post('/upload', uploadMiddleware.single('archivo'), (req, res) => {
    console.log('File:', req.file);
    if(req.file) {
        res.send('ok!');
    } else {
        res.status(400).send('Invalid Format')
    }
    
})

mongoose.connect(mongoURL).then(client =>{
    app.listen(port,() =>{ 
        console.log('API is running. Port:' + port);
    });
}).catch(err=>{
    console.log('Conection fails',err);
});