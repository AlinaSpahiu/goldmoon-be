const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
  //  user: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    name: { type: String, required: true },
    image: { type: String, required: true},
    slug: { type: String, required: false },
    type: { type: String, required: false },
    price: { type: Number, required: false },
    size: { type: Number, required: false },
    pets: { type: Boolean, required: false },
    breakfast: { type: Boolean, required: false },
    description: { type: String, required: false },
    roomOnStock: { type: Number, required: false },
    includes:{type: Array, required: true},
    capacity: { type: Number, required: false }      
}, {
    timestamps: true
})

const Room = mongoose.model('Room', roomSchema)
module.exports = Room