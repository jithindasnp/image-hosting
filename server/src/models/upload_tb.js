const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jdjithin:maitexa2255@cluster0.me79b0j.mongodb.net/imageHostingDB?retryWrites=true&w=majority')
const Schema = mongoose.Schema
const uploadSchema = new Schema({
    image: { type: String, required: true }
})
let upload_tb = mongoose.model('upload_tb', uploadSchema)
module.exports = upload_tb                          