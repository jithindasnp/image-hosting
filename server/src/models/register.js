const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jdjithin:maitexa2255@cluster0.me79b0j.mongodb.net/imageHostingDB?retryWrites=true&w=majority')
const Schema = mongoose.Schema
const registerSchema = new Schema({
    loginId: { type:Schema.Types.ObjectId,ref:"login"},
    fullname: { type: String, required: true }
})
let register = mongoose.model('register', registerSchema)
module.exports = register