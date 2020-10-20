const express = require('express');
const env = require('dotenv').config({path : './config/.env'});
const bodyParser = require('body-parser');

const app = express();
const db = require('./config/mongoose');

// app.use(express.urlencoded());

app.use(bodyParser())


app.use('/', require('./routes/routes_index'));

const port = process.env.PORT 
app.listen(port, (err)=>{
    if(err){
        console.log(`Error in running the server : ${err}`);
        return;
    }
    console.log(`Server is running on the port : ${port}`);
} )