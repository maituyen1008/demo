var express = require('express');
var router = express.Router();
var userName = 'maituyen';
var passWord = '123456';

router.get('/', function(request, response) {
    response.send('Welcome to My App');
})

router.get('/login', function(request, response) {
    response.render('login');
})

router.post('/login', function(request, response) {
    var body = request.body;
    if (userName == body.username && passWord == body.password) {
        response.render('./demo');
    }
    else {
        response.redirect('/login');
    }
})

module.exports = router;