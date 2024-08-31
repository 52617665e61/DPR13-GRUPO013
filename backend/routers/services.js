const { Service } = require('../models/services');
const express = require('express');
const { route } = require('./category');
const router = express.Router();


//Get all services in the Schema
router.get('/', async (req, res) => {
    const serviceList = await Service.find();

    if(!serviceList) {
        res.status(500).json({success:false})
    }
    res.status(200).send(serviceList);
})

//Get just the service requisited
router.get('/:id', async (req, res) => {
    const service = await Service.findById(req.params.id);

    if(!service) {
        res.status(500).json({message:'Service with the given ID is not found'})
    }
    res.status(200).send(service);
})

//Create a new category in the schema
router.post('/', async (req, res) => {
    let service = new Service({
        name: req.body.name,
        description: req.body.description,
        value: req.body.value
    })
    service = await service.save();

    if(!service){
        return res.status(404).send("Service can't be create")
    }
    res.send(service);
})

//Update required service
router.put('/:id', async (req, res) => {
    const service = await Service.findByIdAndUpdate(req.params.id , {
        name: req.body.name,
        description: req.body.description,
        value: req.body.value
    }, {new: true}
)
    if(!service) {
        return res.status(400).send('Service cannot be update!')
    }
    res.send(service);
})

//Delete required service
router.delete('/:id', (req, res) => {
    Service.findByIdAndDelete(req.params.id).then(service => {
        if(service){
            return res.status(200).json({success: true, message: 'Service is deleted'})
        } else {
            return res.status(404).jdon({success: false, messsage: 'Service not found'})
        }
    })
    .catch(err => {
        return res.status(400).json({success: false, error: err})
    })
})

module.exports = router;