const express = require("express");
const {authUser,getUserProfile, registerUser, getAllUsers, updateUserProfile } = require('../controllers/userController')
const {protect} = require("../middleware/authMiddleware")

const router = express.Router()


// Users login: http://localhost:5002/api/user/login
router.post('/login', authUser)

// Gets User profile: http://localhost:5002/api/users/profile
router.route('/profile').get(protect, getUserProfile)

// Update User Profile:
router.route('/profile').put(protect, updateUserProfile)

// Create(POST) a new User:
router.route('/').post( registerUser)




module.exports = router;