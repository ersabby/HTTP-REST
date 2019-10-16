//Module declaration
const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const router = require('./routes/contact')
const app = express()
const port = 3000

//Database connection
mongoose.connect('mongodb://localhost/phonebook', {
    useCreateIndex: true,
    useNewUrlParser: true
})
mongoose.connection.on('connection', () => {
    console.log('Connected successfully to database')
})
mongoose.connection.on('error', ()=>{
    console.log('Error connecting to database' + err)
})


app.use(express.json())
app.use(bodyParser.json())
app.use('/contact', router) //Routes the incoming traffic to routes/contact.js

app.get('/', (req, res) => {
    res.send('Welcome to my server')
})

app.listen(port,()=>{
    console.log(`Server running on 'localhost:${port}'`)
})