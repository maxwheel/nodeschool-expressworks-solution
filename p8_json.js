var express = require('express'),
    app = express(),
    q = require('q'),
    fs = require('fs');

app.listen(process.argv[2]);
app.get('/books', function(req, res){
        q.nfcall(fs.readFile, process.argv[3])
        .then(function(content){
            console.log(content);
            res.json(JSON.parse(content));
            })
        .catch(console.error);
        });

