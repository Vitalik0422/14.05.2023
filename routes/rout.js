const express = require('express')
const router = express.Router()
const  multer   =  require ( 'multer' ) 
const  upload  =  multer ( {  dest : 'uploads/'  } )

const arrAuthor = [];

router.get('/', (req,res) => {
    res.render('index')
})

router.post('/createAuthor', upload.single(), (req,res) => {
    console.log(req.body);
    arrAuthor.push(req.body)
    res.json(arrAuthor)
})

router.post('/loadAuthor',(req ,res) => {
    res.json(arrAuthor)
})
module.exports = router;