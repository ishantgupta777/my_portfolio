const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
const sendMail = require('./email')
var redirectToHTTPS = require('express-http-to-https').redirectToHTTPS


const publicPath = path.join(__dirname,'../public')
const indexPath = path.join(__dirname,'../public/index.html')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(publicPath))
app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301));


const port = process.env.PORT
app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${port}`)
})

mongoose.connect( process.env.MONGODB_URL ,{
    useNewUrlParser : true,
    useCreateIndex : true
});

const userSchema = mongoose.Schema({
    name : {
        type : String
    },
    email : {
        type : String,
        required  : true,
        toLowetCase : true,
        trim : true
    },
    subject : {
        type : String
    },
    message : {
        type : String
    }
})

const User = mongoose.model('user',userSchema)

app.get('/',(req,res)=>{
    res.sendFile(publicPath)
})

app.post('/contact',(req,res)=>{
    const userMsg = new User(req.body)
    userMsg.save()
    sendMail.sendWelcomeEmail(req.body)
    res.send()
})
