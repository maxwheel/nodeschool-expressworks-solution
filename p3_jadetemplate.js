var path = require('path');
var express = require('express');
var app = express();
var jade = require('jade');
app.set('view engine', 'jade');
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
app.get('/home', function(req, res){
        res.render(process.argv[3], {date: new Date().toDateString()});
        });
app.listen(process.argv[2]);

