const jwt = require('jsonwebtoken')

const generateToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: "7d" // expires in 24 hours
    })
}

module.exports = generateToken;