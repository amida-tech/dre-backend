//Add stuff from this file to the DRE server eventually

// var http = require('http')
// http.createServer(function (req, res){
// 	res.writeHead(200, {'Content-Type':'text/plain'});
// 	res.end('Hello World\n')
// }).listen(3000, '127.0.0.1');

var express = require('express'),
	events = require('./routes/accountEvents');

app.configure(function () {
    app.use(express.logger('dev'));     
    app.use(express.bodyParser());
});

var app = express();

app.get('/accountEvents', events.allInOrder);
//app.get('/accountEvents/:id', events.getEvent);
app.post('/accountEvents', events.addEvent);
//app.put('accountEvents/:id', events.editEvent);


app.listen(27017)
