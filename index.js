const express = require('express')
const server  = express()
require('dotenv').config()


server.use(express.urlencoded({extended:false}))
server.use(express.json())

server.get('/',(req,res)=>{
   return res.send('Welcome')
})

const PORT = process.env.PORT || 8080
server.listen(PORT,()=>{
    console.log(`Backend Start is server port ${PORT}`)
})