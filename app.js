const express = require('express')
const server = express()
const ejs = require('ejs')
const iRouter = require('./routes/rout')

const PORT = 8888;

server.set('view engine', 'ejs')
server.set('views',__dirname + '/views');
server.use(express.static(__dirname + '/public'))
server.use(express.json())
server.use(express.urlencoded({extended: false}))


server.use('/', iRouter)

server.listen(PORT)