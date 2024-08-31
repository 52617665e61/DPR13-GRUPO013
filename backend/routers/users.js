const { User } = require('../models/user');
const express = require('express');
const router = express.Router();
const argon2 = require('argon2')
const jwt = require('jsonwebtoken');

router.get(`/`, async (req, res) => {
    const userList = await User.find().select('-passwordHash -isAdmin');

    if(!userList){
        res.status(500).json({success: false})
    }
    res.send(userList);
})

router.get(`/:id`, async (req, res) => {
    const user = await User.findById(req.params.id).select('-passwordHash');

    if(!user) {
        res.status(500).json({message: "The user with the given ID don't exists!"})
    }
    res.status(200).send(user);
})

router.get(`/get/count`, async (req, res) => {
    const usersCount = await User.countDocuments((count) => count)

    if(!usersCount) {
        res.status(500).json({success: false})
    }
    res.send({
        usersCount: usersCount
    })
})

router.post(`/register`, async (req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        passwordHash:  await argon2.hash(req.body.passwordHash, "peperoni"),
        phone: req.body.phone,
        isAdmin: req.body.isAdmin,
        street: req.body.street,
        apartment: req.body.apartment,
        zip: req.body.zip,
        country: req.body.country,
})
user = await user.save();

if(!user){
    return res.status(404).send("User can't be create!")
}
res.send(user);
})


router.post('/login', async (req, res) => {
    const user = await User.findOne({email: req.body.email})
    const secret = process.env.secret;

    if(!user){
        return res.status(400).send('The user not found');
    }

    if(user &&  await argon2.verify(user.passwordHash, req.body.password)) {
        const token = jwt.sign(
            {
                userId: user.id,
                isAdmin: user.isAdmin
            },
            secret,
            {expiresIn: '1w'}
        )

        res.status(400).send({user: user.email, token: token});
    } else {
         res.status(400).send('Password wrong')
    }

})




module.exports = router;