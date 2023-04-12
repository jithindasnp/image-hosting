const express = require('express')
const multer = require('multer')
const uploadRouter = express.Router()
const path = require('path')
const upload_tb = require('../models/upload_tb')



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../../client/src/images'))
    },
    filename: function (req, file, cb) {
        cb(null, req.body.name)
    }
})

const upload = multer({ storage: storage })

uploadRouter.post('/', upload.array("file"), async (req, res) => {
    const { name } = req.body
    const uploadImg = await upload_tb.create({ image: name })
    if (!uploadImg) {
        return res.status(400).json({
            message: "Upload Error!!!!"
        })
    } else {
        return res.status(200).json({
            message: "Upload successfull"
        })
    }

})


uploadRouter.get('/view', async (req, res) => {

    const uploadImg = await upload_tb.find()
    if (!uploadImg) {
        return res.status(400).json({
            message: "Upload Error!!!!"
        })
    } else {
        return res.status(200).json({ uploadImg })
    }

})



module.exports = uploadRouter