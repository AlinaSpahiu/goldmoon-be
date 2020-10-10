const asyncHandler = require("express-async-handler")
const Room = require("../models/roomModel")

const getRooms = asyncHandler( async(req, res) => {
    const rooms = await Room.find({})
    res.json(rooms)
})

const getRoomsById = asyncHandler( async(req, res) => {
    const room = await Room.findById(req.params.id)

    if(room){ res.json(room)}
    else { res.status(404)
    throw new Error('Room not found!')}

})

module.exports = {getRooms, getRoomsById}