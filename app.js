const express = require('express')
const server = express()
const ejs = require('ejs')
const adminRouter = require('./routes/admin')
const userRouter = require('./routes/user')


const PORT = 8888;

server.set('view engine', 'ejs')
server.set('views',__dirname + '/views');
server.use(express.static(__dirname + '/public'))
server.use(express.json())
server.use(express.urlencoded({extended: false}))


server.use('/', adminRouter)
server.use('/', userRouter)

server.listen(PORT)