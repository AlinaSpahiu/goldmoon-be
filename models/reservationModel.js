const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema({
    user:{type: mongoose.Schema.Types.ObjectId, required: true, ref:'User'},
    reservatedRoom:[
        { 
            name: {type: String, required: true},
            image: {type: String, required: true},
            price: {type: Number, required: true},
            room: {type: mongoose.Schema.Types.ObjectId, required: true, ref:'Room'}
        }
    ],
    paymentMethod: {type:String, required: true },
    paymentResult: {
        id:{type: String},
        status: {type: String},
        update_time: {type: String},
        email_address: {type: String}
     },
    taxPrice: {type:Number, required: true, default: 0.0},
    totalPrice: {type: Number, required: true, default: 0.0},
    isPaid: {type: Boolean, required: true, default: false},
    paidAt: {type: Date}
}, {
    timestamps: true
})

const Reservation = mongoose.model('Reservation', reservationSchema)
module.exports = Reservation