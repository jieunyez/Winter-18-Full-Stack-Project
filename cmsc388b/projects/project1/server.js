var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (request,response) { 
    var pathname= url.parse(request.url).pathname;

    fs.readFile(pathname.substring(1), function(err, data) {
        if (err) {
            console.log(err);
            console.log(pathname + " does not exist on the server.");
            response.writeHead(404, {'Content-Type': 'text/html'});
        }
        else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data.toString());	
        }
        response.end();
    });

}).listen(8000);

console.log('Server successes running at port 8000');