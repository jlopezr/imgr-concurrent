var express = require('express');
var path = require('path');
var app = express();

var IMGR = require('imgr').IMGR;
var imgrDebug = true;
var imgPath = path.join(__dirname, 'public');

var imgrOptions = {};
    if(imgrDebug){
        imgrOptions = {
            debug: true,
            trace: function (ev) {
                console.log("IMGR tracer event: ",ev);
            }
        };
    }
var imgr = new IMGR(imgrOptions);

imgr.serve(imgPath)
    .namespace('/public')
    .cacheDir(path.join(__dirname,'public','.cache'))
    .urlRewrite('/:path/:size/:file.:ext')
    .using(app);

app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(3000);
console.log('Express server running on port 3000');
