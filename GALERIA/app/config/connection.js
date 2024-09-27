'use strict'

const mongoose = require('mongoose')
const { mongoDB } = require('./URI')

mongoose.connect(mongoDB.URI, {
    useNewUrlParser: true
})
    .then( db => console.log(`La base de datos está activada`))
    .catch(err => console.log(`Hubo un error: ${err}`))