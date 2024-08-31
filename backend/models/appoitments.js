const mongoose = require('mongoose')

const appoitmentSchema = mongoose.Schema({
    client: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    service: {
        type: mongoose.Schema.Types.String,
        ref: 'Service',
        required: true
    },
    description: {
        type: String,
        required: true
    },
})

exports.Appoitment = mongoose.model('appoitment', appoitmentSchema);