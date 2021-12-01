const path = require('path')
const fs = require('fs')
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const { Users } = require('../models/users');

const PUB_KEY = fs.readFileSync(path.join(__dirname,'../','pub_key.pem'),'utf-8')

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PUB_KEY,
    algorithms: ['RS256']
}

const strategy = new JwtStrategy(options, async (payload, done) => {
    try{
        const user = await Users.findOne({
            _id: payload.sub
        });

        if(user) {
            return done(null, user)
        }

        return done(null, false)
    } catch (error) {
        done(error, false)
    }
})
module.exports = function(passport){
    passport.use(strategy)
}
