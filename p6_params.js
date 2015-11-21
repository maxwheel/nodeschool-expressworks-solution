var express = require('express'),
    app = express();

var hex = function(param){
    return require('crypto')
    .createHash('sha1')
    .update(param)
    .digest('hex');
}

app.listen(process.argv[2]);

app.put('/message/:id', function(req,res){
        res.end(hex(new Date().toDateString()+req.params.id));
        });

