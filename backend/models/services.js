const mongoose = require('mongoose')

const serviceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    description: {
        type: String,
        required: true
    },

    value: {
        type: String,
        default: 'Indeterminado. Necessita avaliação do profissional.'
    }
})

exports.Service = mongoose.model('Service', serviceSchema)