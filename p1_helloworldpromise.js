var express = require('express');
var app = express();

var q = require('q');
//FAIL!
//var get = q.denodeify(app.get);
//get('/home')
q.nfcall(app.get,'/home')
.then(function(req,res){
        res.end('Hello World!');
        })
.catch(console.error);

//app.get('/home', function(req, res){
//        res.end('Hello World!');
//        });
app.listen(process.argv[2]);
