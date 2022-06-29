const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser'); // middleware
const { check, validationResult } = require('express-validator');
const app = express();
const ejs = require('ejs')

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs')

//pull data
const {initialSetup, cycle, duration} = require('./data/data.json')
const currentDate = require('./data/currentDate.js')

//home page
app.get('/', async (req, res) => {
    if (initialSetup == false) {
        res.render('setup')
    } else {
        res.render('index', {
            date: currentDate.date,
            time: currentDate.time
        })
    }
})

//calendar
app.get('/calendar', async (req, res) => {
    res.render('calendar', {
        month: currentDate.month
    })
})

app.use(express.json());
app.use(express.static('public'));
const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);