let http = require('http');

let portNumber = 4000;
let webServer = http.createServer(function (request, response){
	response.writeHead(200, {'Content-type':'text/html'});
	response.write('<h1>Web Server (NodeJS based) Running</h1>');
	response.end();
});

webServer.listen(portNumber); 

console.log(`Web server is running at http://localhost:${portNumber}`);