const express = require('express')
const loginRouter = express.Router()
const bcrypt = require('bcryptjs')
const login = require('../models/login')

//Login api
loginRouter.post('/', async (req, res) => {
    const { email, Password } = req.body
    try {
        const loginDetails = await login.findOne({ email })
        if (!loginDetails) {
            return res.status(400).json({ message: "Inavalid Email" })
        } else {
            const compareHash =await bcrypt.compare(Password, loginDetails.password)
            if (compareHash == false) {
                return res.status(400).json({ message: "Invalid password" })
            } else {
                return res.status(200).json({
                    success: true,
                    error: false,
                    key: loginDetails.key,
                    message: "Login successfull"
                })
            }
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({error })
    }
})

module.exports = loginRouter