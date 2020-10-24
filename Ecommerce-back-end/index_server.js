const express = require('express');
const env = require('dotenv').config({path : './config/.env'});
const path = require('path');

const app = express();
const db = require('./config/mongoose');

// app.use(express.urlencoded());

app.use(express.json())

app.use('/public', express.static(path.join(__dirname, 'upload/product')));
app.use('/api', require('./routes/routes_index'));

const port = process.env.PORT 
app.listen(port, (err)=>{
    if(err){
        console.log(`Error in running the server : ${err}`);
        return;
    }
    console.log(`Server is running on the port : ${port}`);
} )