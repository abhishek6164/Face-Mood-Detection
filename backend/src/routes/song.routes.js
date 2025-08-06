const express = require('express')
const multer = require('multer')
const router = express.Router()
const uploadFile = require('../service/storage.service')
const upload = multer({storage:multer.memoryStorage()})

router.post('/songs',upload.single('audio'),async (req,res)=>{
    console.log(req.body)
    const fileData = await uploadFile(req.file)
    res.status(201).json({
        message:'Song created successfully',
        song:req.body
    })
})

module.exports = router