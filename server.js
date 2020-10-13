const express = require('express');
const dotenv = require('dotenv')
const colors = require('colors')
const mongoose = require('mongoose')
const connectDB = require('./config/db')
const {notFound, errorHandler} = require('./middleware/errorMiddleware')

const roomRoutes = require('./routes/roomRoutes');
const userRoutes = require('./routes/userRoutes');



dotenv.config()

connectDB()
const server = express()
server.use(express.json())

server.use("/api/rooms", roomRoutes)
server.use("/api/users", userRoutes)

// Error mmiddleware
server.use(notFound)

server.use(errorHandler)

const PORT = process.env.PORT || 5000
const uri  = process.env.URI


// mongoose
try{
    console.log("about to connect")
  mongoose.connect("mongodb+srv://alina:xFDK11yzK21eGmxc@cluster0.csboe.mongodb.net/goldenmoon?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err)=> console.log(err),
  () => console.log("Mongoose is connected"))
//   .then(
//          server.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.italic))
//   )
}catch(e){console.log('Could not connect')}