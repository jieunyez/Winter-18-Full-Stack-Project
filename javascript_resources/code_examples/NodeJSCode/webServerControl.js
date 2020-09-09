process.stdin.setEncoding("utf8");

let http = require('http');


let portNumber = 4000;
let webServer = http.createServer(function (request, response){
	response.writeHead(200, {'Content-type':'text/html'});
	response.write('<h1>Web Server (NodeJS based) Running</h1>');
	response.end();
});

webServer.listen(portNumber); 
console.log(`Web server is running at http://localhost:${portNumber}`);
console.log("Type stop to shutdown the server");
process.stdin.on('readable', function() {
	let dataInput = process.stdin.read();
	if (dataInput !== null) {
		let command = dataInput.trim();
		if (command === "stop") {
			console.log("Shutting down the server");
            process.exit(0);
        } else {
			console.log(`Invalid command: ${command}`);
		}
    }
});
