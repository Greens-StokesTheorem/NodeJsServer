
//  Import a module
var http = require('http');
var fs = require("fs");



//  Creates a local server
http.createServer(function (req, res) {

    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write("Hello javascript! " + td.myDateTime());
    // res.end();


    fs.appendFile("text.txt", "Javascript", function (err) {

        if (err) throw err;
        return res.end();

    })



  
}).listen(8080);