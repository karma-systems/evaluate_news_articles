var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');

const mockAPIResponse = require('./mockAPI.js')
const PORT = 8081

const dotenv = require('dotenv');
const { response } = require('express');
dotenv.config()

const app = express()
app.use(cors())

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('dist'))
console.log(__dirname)


app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/results', async (req, res) => {
    const response = await fetch('')
    try {
        const apiData = await response.json();
        res.send(apiData);
    } catch (error) {
        console.log("Comunication error", error);
    }
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening at port ${PORT}!`)
})

module.express = app;
