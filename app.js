// symboled
// (c) 2011 Enginimation Studio (http://enginimation.com).
// symboled may be freely distributed under the MIT license.
var util = require('util'),
    express = require('express'),
    appCache = require('connect-app-cache'),
    app = express.createServer();
app.configure(function(){
    app.use(express.favicon(__dirname + '/public/16.png'));
    //logger
    app.use(express.logger());
    //router
    app.use(app.router);
    //public folder for static files
    app.use(express.static(__dirname+'/public'));
    app.use(appCache('app.mf',__dirname+'/app.mf',{maxAge:0}));
});
app.listen(8085);