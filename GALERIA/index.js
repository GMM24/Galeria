'use strict'

const express = require('express')
const cors = require('cors')
const path = require ('path')


//INICIALIZACION
const app = express()
require('./app/config/connection.js')


//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//ARCHIVOS ESTATICOS
app.use(express.static(path.join(__dirname, 'app/upload')))

//ROUTES

app.use(require('./app/routes/uploadImage.js'))

//SERVIDOR
app.listen(8080, (err) =>{
    if(err){
        console.log(`No se completo error ${err}`)
    }else{
        console.log(`servidor corriendo en el puerto ${8080}`)
    }
})