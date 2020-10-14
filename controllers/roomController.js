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


// Delete a Room
// /api/room/:id
const deleteRoom = asyncHandler( async(req, res) => {
    const room = await Room.findById(req.params.id)

    if(room){ 
        await room.remove()
        res.json({message: 'Room removed'})
    }
    else { res.status(404)
    throw new Error('Room not found!')}

})


// Create a Room
// /api/room/
const createRoom = asyncHandler( async(req, res) => {
    const room = new Room({
        name: 'Room',
        price: 0,
        user: req.user._id,
        image: "/images/1.jpg",
        includes: 'somethings'
    })

    const createdRoom = await room.save()
    res.status(201).json(createdRoom)
})


// Update a Room
// /api/room/:id
const updateRoom = asyncHandler( async(req, res) => {
    const {name, price, image, includes} = req.body

    const room = await Room.findById(req.params.id)

    if(room){
        room.name = name
        room.price = price
        room.image = image
        room.includes = includes

        const updatedRoom = await room.save()
        res.status(201).json(updatedRoom)
    }

    else{
        res.status(404)
        throw new Error ('Room not found')
    }
})

   



module.exports = {getRooms, getRoomsById, deleteRoom, createRoom, updateRoom}