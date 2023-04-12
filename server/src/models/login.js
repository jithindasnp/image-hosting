const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jdjithin:maitexa2255@cluster0.me79b0j.mongodb.net/imageHostingDB?retryWrites=true&w=majority')
const Schema = mongoose.Schema
const loginSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    key: { type: String, required: true }
})
let login = mongoose.model('login', loginSchema)
module.exports = login                          