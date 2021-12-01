const crypto = require('crypto');
const path = require('path');
const fs = require('fs');
const jsonwebtoken = require('jsonwebtoken');

const PRIV_KEY = fs.readFileSync(path.join(__dirname,'../','priv_key.pem'),'utf-8');

exports.hashPassword = (password) => {
    const salt = crypto.randomBytes(32).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, parseInt(process.env.ITERATIONS), 64, process.env.HASHING_ALGO).
                    toString('hex');

    return {
        hash,
        salt
    }
}

exports.verifyPassword = (password, hash, salt) => {
    const hashVerify = crypto.pbkdf2Sync(password, salt, parseInt(process.env.ITERATIONS), 64, process.env.HASHING_ALGO).
                    toString('hex');
    return hash === hashVerify
}

exports.getJWT = (user) => {
    const { _id } = user;
    const expiresIn = '1d';

    const payload = {
        sub: _id,
        iat: Date.now()
    }

    const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, { expiresIn: expiresIn, algorithm: 'RS256' });

    return {
        token: `Bearer ${signedToken}`,
        expiresIn: expiresIn
    }
}