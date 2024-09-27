'use strict'

const router = require('express').Router()
const Image = require('../models/Image')
const storage = require('../config/multer')
const multer = require('multer')

const uploader = multer({
    storage
}).single('file')

// Cambia a async
router.post('/uploader', uploader, async (req, res) => {
    const { body, file } = req
    if (file && body) {
        const newImage = new Image({
            fileName: body.name,
            fileUrl: `http://localhost:8080/${file.filename}`
        })
        await newImage.save() // Esto ahora es válido
        res.json({
            newImage: newImage
        })
    } else {
        res.status(400).json({ error: 'No file or body provided' });
    }
})

// Cambia a async
router.get('/download', async (req, res) => {
    const images = await Image.find() // Esto ahora es válido
    res.json(images)
})

module.exports = router