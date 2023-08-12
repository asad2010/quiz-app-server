const express = require('express')
const fileUpload = require('express-fileupload')
const router = require('./src/router/router')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(fileUpload())

// routers 
app.use("/", router)
// server & connecting to mongodb
const PORT = process.env.PORT || 4000
async function start(){
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family: 4
        }).then(()=>{
            app.listen(PORT, ()=>{
                console.log(`server runned on port ${PORT}`)
            })
        })
        
    } catch (error) {
        console.error(error)
    }
}
start()