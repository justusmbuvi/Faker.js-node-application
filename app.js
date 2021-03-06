// Require needed packages
var express = require('express');
var mongoose = require('mongoose');
var faker = require('faker');
var path = require('path');
var fakerModel = require('./models/user');

// Connect to a local Mongodb database called fakedata
// If successful log out on the console "connected to db"
//    else "connection error"
mongoose.connect('mongodb://localhost:27017/fakedata', { useNewUrlParser: true })
    .then(() => console.log('connected to db')).catch(error => console.log('connection error', error));

// Use express to set up our view engine to "ejs"
// Set up our absolute directory path to the source directory
var app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

// Set up our simple routing system to take us to the "home.ejs" file
// or the home webpage whenever the application is launched
app.get('/', (req, res) => {
    fakerModel.find((err, data) => {
        if (err) {
            console.log(err)
        } else if (data) {
            res.render('home', { data: data });
        } else {
            res.render('home', { data: {} });
        }
    });
});

// Return each data generated to the variables below and save all of them
// This will  be done ten times due to the for loop
// You can add the number of data to be generated by changing the value
app.post('/', (req, res) => {
    for (var i = 0; i < 10; i++) {
        var fakee = new fakerModel({
            firstname: faker.name.firstName(),
            lastname: faker.name.lastName(),
            phonenumber: faker.phone.phoneNumber(),
            city: faker.address.city(),
            state: faker.address.state(),
            country: faker.address.country()
        });
        fakee.save((err, data) => {
            if (err) {
                console.log(err)
            }
        });
    }
    res.redirect('/');
});

// Set up our ports in which we shall see the webpage and data generated
// We will use 5000 as our port number
var port = process.env.PORT || 5000;

app.listen(port, () => console.log('server running at port ' + port));