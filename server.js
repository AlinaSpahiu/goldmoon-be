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


// mongoose
//   .connect("mongodb://localhost:27017/goldmoon", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(
         server.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.italic))
//   )
//   .catch((err) => console.log(err))