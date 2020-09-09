let http = require('http');
let fs = require('fs');

let portNumber = 5000;
let webServer = http.createServer(function (request, response){
	let url = require('url');
	let name = url.parse(request.url, true).query.imageName;
	
	if (name === 'umcp') {
		let fileName = 'images/umcp.jpg';
		fs.stat(fileName, function(err, fileInfo) {
			if (err) {
				console.error(err);
				response.writeHead(200, {'Content-type': 'text/html'});
				response.write('<h1>Image file not found</h1>');
				response.end();
            } else {
				let image = fs.readFileSync(fileName);
				response.contentType = "image/jpg";
				response.contentLength = fileInfo.size;
				response.end(image, "binary");
			}
		});
    } else {
		response.writeHead(200, {'Content-type': 'text/html'});
		response.write('<h1>Invalid image name specified in the url</h1>');
		response.end();
	}
});

webServer.listen(portNumber); 

console.log(`Image Web server is running at http://localhost:${portNumber}`);