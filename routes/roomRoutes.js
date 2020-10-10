const express = require("express");
const {getRooms, getRoomsById} = require('../controllers/roomController')

const router = express.Router()


// 1. GET all rooms: /api/rooms
router.route('/').get(getRooms)

// 2. GET only one room: /api/rooms/:id
router.route('/:id').get(getRoomsById)


// POST a new room: /api/rooms
// router.post('/', asyncHandler(async(req, res) =>{
//     const newRoom = new Room(req.body)
//     const response = await newRoom.save()
//     res.status(201).json(response)
// }))
module.exports = router;