const express = require('express')
const registerRouter = express.Router()
const bcrypt = require('bcryptjs')
const login = require('../models/login')
const register = require('../models/register')
const { v4: uuidv4 } = require('uuid');



//Register api
registerRouter.post('/', async (req, res) => {
    const { fullname, email, password } = req.body
    try {
        const hashed = await bcrypt.hash(password, 10)
        if (!hashed) {
            return res.status(400).json({ message: "password hashing error!!!" })
        } else {
            const oldUser = await login.findOne({ email })
            if (oldUser) {
                return res.status(400).json({ message: "user already exists" })
            } else {
                const key =await uuidv4()
                const loginData = await login.create({ email, password: hashed, key })
                if (!loginData) {
                    return res.status(400).json({ message: "something went wrong" })
                } else {
                    const registerData = await register.create({ loginId: login._id, fullname })
                    if (!registerData) {
                        return res.status(400).json({ message: "something went wrong" })
                    } else {
                        return res.status(200).json({ message: "Registration successful" })
                    }
                }
            }

        }
    } catch (error) {
        console.log(error);
        return res.status(404).json({ ERROR: error })

    }
})

module.exports = registerRouter