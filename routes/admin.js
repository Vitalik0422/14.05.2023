const express = require('express')
const router = express.Router()
const multer  = require ('multer') 
const upload  =  multer ( {  dest : 'uploads/'  } )
const arrAuthor = require('../db/arrAuthor')
const arrArticle = require('../db/arrArticle')


router.get('/admin', (req,res) => {
    res.render('index')
})

router.post('/createauthor', upload.none(), (req,res) => {
    console.log(req.body);
    arrAuthor.push(req.body)
    res.json(arrAuthor)
})

router.post('/loadauthor',(req ,res) => {
    res.json(arrAuthor)
})

router.post('/createarticle', upload.none(), (req,res) => {
    arrArticle.push(req.body)
    console.log(req.body);
})

module.exports = arrArticle;
module.exports = router;