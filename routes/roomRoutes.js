const express = require("express");
const {getRooms, getRoomsById, deleteRoom, createRoom, updateRoom} = require('../controllers/roomController')
const {protect, admin} = require('../middleware/authMiddleware')
const router = express.Router()


// 1. GET all rooms: /api/rooms
router.route('/').get(getRooms).post(protect, admin, createRoom)

// 2. GET only one room: /api/rooms/:id
router.route('/:id')
.get(getRoomsById)
.delete(protect, admin, deleteRoom)
.put(protect, admin, updateRoom)

module.exports = router;