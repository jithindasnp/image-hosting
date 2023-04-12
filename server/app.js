const express=require('express')
const cors=require('cors')
const loginRouter = require('./src/routes/loginRouter')
const registerRouter = require('./src/routes/registerRouter')
const uploadRouter = require('./src/routes/uploadRouter')

const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('/public'))


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept,Authorization");
    next();
});


app.use('/api/login',loginRouter)
app.use('/api/register',registerRouter)
app.use('/api/upload',uploadRouter)



app.listen(3001,()=>{
    console.log("Server started at port 3001");
})