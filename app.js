const express = require('express');
const mongoose = require('mongoose');
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');

const app = express();

// CONNECT DB
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1/smartedu-db').then(() => {
    console.log('DB connected');
});

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ROUTES
app.use('/', pageRoute);
app.use('/courses', courseRoute);
app.use('/course', courseRoute);

const port = 3000;

app.listen(port, () => {
    console.log(`App started in port ${port}...`);
});
