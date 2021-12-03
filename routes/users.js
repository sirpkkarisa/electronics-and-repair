const express = require('express');
const { logUser, addUser } = require('../controllers/users');
const { Users } = require('../models/users');

const router = express.Router()

router.route('/login')
    .post(logUser)

router.route('/register')
    .post(async (req, res, next)=>{
        try{
            const { email, isAdmin } = req.body;

            const user = await Users.findOne({email})

            if(!user || !isAdmin) {
                return res.status(401)
                    .json({
                        success: true,
                        message: 'Unauthorized'
                    })
            }
            next();
        } catch (error){
            res.status(500)
                .json({
                    success: false,
                    message: `${error}`
                })
        }
    },addUser);


module.exports = router;