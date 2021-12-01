const { Users } = require('../models/users');
const { hashPassword, verifyPassword, getJWT } = require('../utils/passwords');

exports.logUser = async (req, res) => {
    try{
        const { email, password } = req.body;
        const user = await Users.findOne({email});

        if(!user) {
            return res.status(401)
                .json({
                    success: false,
                    message: 'Unauthorized'
                })
        
            }
        
        const isValid = verifyPassword(password, user.hash, user.salt);

        if(!isValid) {
            return res.status(401)
                        .json({
                            success: false,
                            message:'Unauthorized'
                        })
        }

        const { token, expiresIn } = getJWT(user);
        res.status(200)
            .json({
                token,
                expiresIn,
                success: true
            })
    } catch (error) {
        console.log(error)
        res.status(500)
            .json({
                success: false,
                message: `${error}`
            })
    }
}

exports.addUser = async (req, res) => {
    try{
        const { firstName, lastName, email, password } = req.body;
        if(!firstName || !lastName || !email || !password) {
            return res.status(400)
                    .json({
                        success: false,
                        message: 'All fields are required'
                    })
        }
        const user = await Users.findOne({
            email
        })

        if(user) {
            return res.status(403)
                .json({
                    success: false,
                    message: 'The email provided already exists'
                })
        }

        const { hash, salt } = hashPassword(password)
        const newUser = await Users.create({
            firstName,
            lastName,
            email,
            hash,
            salt
        })
        req.redirect('login')
        res.status(201)
            .json({
                success: true,
                user: newUser
            })
    } catch (error) {
        console.log(error)
        res.status(500)
            .json({
                success: false,
                message: `${error}`
            })
    }
}