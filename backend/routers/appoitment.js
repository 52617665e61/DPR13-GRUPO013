const { Appoitment } = require('../models/appoitments')
const { Service } = require('../models/services')
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const email = require('./sendEmail')


//Get all appoitments
router.get('/', async (req, res) => {
    const appoitmentList = await Appoitment.find().select();

    if(!appoitmentList){
        res.status(500).json({success: false})
    }

    res.send(appoitmentList)
})


//Get the required appoitment
router.get('/:id', async(req, res) => {
    const appoitment = await Appoitment.findById(req.params.id).populate('service');

    if(!appoitment) {
        res.status(500).json({success: false})
    }
    res.send(appoitment);
})

//Create a new appoitment
router.post('/', async (req, res) => {
    const service = await Service.findById(req.body.service);
    if(!service) {
        return res.status(400).send('Invalid Service')
    }

    let appoitment = new Appoitment({
        client: req.body.client,
        phone: req.body.phone,
        address: req.body.address,
        service: req.body.service,
        description: req.body.description
    })
    appoitment = await appoitment.save();

    if(!appoitment) {
        return res.status(500).send('Appoitment can be create!')
    }
    res.send(appoitment)
})

//Update the required appoitment
router.put('/:id', async (req, res) => {
    if(!mongoose.isValidObjectId(req.params.id)) {
        res.status(400).send('Invalid ID')
    }
    const service = await Service.findById(req.body.service);
    if(!service) {
        return res.status(400).send('Invalid Service')
    }
    
    const appoitment = await Appoitment.findByIdAndUpdate(req.params.id , {
        client: req.body.client,
        phone: req.body.phone,
        address: req.body.address,
        service: req.body.service,
        description: req.body.description
    }, { new : true}
    )

    if(!service) {
        return res.status(500).send('That appoitment cannnot be update!')
    }
    res.send(appoitment);
})

//Delete the required appoitment
router.delete('/:id', (req, res) => {
    Appoitment.findByIdAndDelete(req.params.id)
    .then(appoitment => {
        if(appoitment) {
            return res.status(200).json({success: true, message:'Appoitment deleted'})
        } else {
            return res.status(400).json({success: false, message:'Appoitment not found'})
        }
    })
    .catch(err => {
        return res.status(500).json({success: false, error: err})
    })
})

    module.exports = router;

