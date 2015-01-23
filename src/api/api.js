var express  = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var User = require('./models/User.js');
var jwt = require('jwt-simple');

app.use(bodyParser.json());

//cross origin fix.
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    next();
});

app.post('/register', function(req,res){
    var user = req.body;

    var newUser = new User({
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        phone: user.phone,
        password: user.password
    });

    newUser.save(function(err){
        createToken(newUser, res);
    });
});

app.post('/login', function(req,res) {
    req.user = req.body;
    User.findOne({phone: req.user.phone}, function(err, user){
        if(err) throw err;

        if(!user)
            return res.status(401).send({message: 'Wrong phone/password'});

        user.comparePasswords(req.user.password, function(err, isMatch){
            if(err) throw  err;

            if(!isMatch)
                return res.status(401).send({message: 'Wrong phone/password'});

            createToken(user, res);
        });
    });
});

function createToken(user, res) {
    var payload = {
        //iss: req.hostname,
        sub: user.id
    };

    var token = jwt.encode(payload, "shhh...");

    res.status(200).send({
        user: user.toJSON(),
        token: token
    });
}

mongoose.connect('mongodb://localhost/register');

var server = app.listen(5000, function(){
    console.log('api listening on ', server.address().port);
});
