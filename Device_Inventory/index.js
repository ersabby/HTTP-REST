//Title : 
//Author: Saurabh Patil
//e-mail: er.saurabhpatil@gmail.com

const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = 8080;

mongoose.connect('mongodb://localhost/devices',
    {
        useCreateIndex: true,
        useNewUrlParser: true
    });
mongoose.connection.on("open", () => {
    console.log("Connected to mongo server.");
});
mongoose.connection.on("error", () => {
    console.log("error connecting to mongodb.");
});

const app = express();
app.use(bodyparser.json());
app.use(cors());

const device = require('./routes/device');
app.use('/device',device);

app.get('*', (req, res) => {
    res.send('404 - Not Found');
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})
