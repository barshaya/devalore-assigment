require('dotenv').config();
const mongoose = require("mongoose");

module.exports = async () => {
    const mongoDBUri = process.env.DATABASE_URI;

    try {
        await mongoose.connect(mongoDBUri, { useNewUrlParser: true});
        console.log("Connected to database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }

};