const express = require('express')
const router = express.Router()
const  multer  = require ('multer') 
const  upload  =  multer ( {  dest : 'uploads/'  } )
const arrArticle = require('../db/arrArticle')
let index = 0;
router.get('/user', (req,res)=> {
    res.render('listarticle')
})

router.post('/loadArticle', (req,res)=> {
    console.log(req.body.index);
    if(arrArticle.length){
        res.json(arrArticle[index])
        console.log('run')
    }
    else{ 
        res.json(null)
        console.log('run1');
    }
})

router.post('/next', (req,res)=> {
    index++;
    if(index > arrArticle.length - 1){
        index = 0;
        res.json(arrArticle[index])
    }else{
        res.json(arrArticle[index])
    }
})
router.post('/prev', (req,res)=> {
    index--;
    if(index < 0){
        index = arrArticle.length - 1;
        res.json(arrArticle[index])
    }else{
        res.json(arrArticle[index])
    }
})


module.exports = router;