const mongoose = require('mongoose');
const env = require('dotenv').config({path : './.env'});

mongoose.connect(`mongodb://localhost/${process.env.db}`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to mongoDb'));
db.once('open', function(){
    console.log('Connected To The Database :: MongoDB');
});
module.exports = db;