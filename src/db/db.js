const mongoose = require('mongoose');

async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database connected Successfully");
        
    }
    catch(err){
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    }
}


module.exports = connectDB;