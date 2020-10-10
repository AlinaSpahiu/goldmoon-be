const mongoose = require("mongoose")

const connectDB = async () => {
    try{
        const conn = await mongoose.connect("mongodb://localhost:27017/goldmoon", {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.brightGreen.underline)
    } catch(error){
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

module.exports = connectDB;