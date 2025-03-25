require('dotenv').config();

const mongoose = require('mongoose');


function connectDB() {
    // DB Connection
    mongoose.connect(process.env.MONGO_CONNECTION_URL)
    .then(() => {
        console.log('Database Connected.');
    })
    .catch(err => {
        console.log('Connection failed:', err);
    });
}


module.exports = connectDB;