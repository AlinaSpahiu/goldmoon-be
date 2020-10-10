const express = require("express");
const {authUser,getUserProfile, registerUser, getAllUsers, } = require('../controllers/userController')
const {protect} = require("../middleware/authMiddleware")

const router = express.Router()


// Users login: http://localhost:5002/api/user/login
router.post('/login', authUser)


// Gets User profile: http://localhost:5002/api/users/profile
router.route('/profile').get(protect, getUserProfile)


// Create(POST) a new User:
router.route('/').post( registerUser)


// Get all users:
router.route('/').get(getAllUsers)

//Post new User



module.exports = router;