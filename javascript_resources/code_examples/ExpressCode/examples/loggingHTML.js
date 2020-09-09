let http = require("http");
let express = require("express");   /* Accessing express module */
let app = express();  /* app is a request handler function */
let morganLogger = require("morgan");
var fs = require('fs');
var path = require('path');
var morgan = require('morgan');


var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

app.use(morganLogger("short")); /* You can try dev instead of short */
app.use(morgan('tiny', { stream: accessLogStream }))

app.use(function(request, response) {
   let statusCode = 200; /* OK */
   
   /* text/html vs. text/plain in next entry */
   response.writeHead(statusCode, {"Content-type": "text/html"});
   response.end("<h1>We have logged request</h1>");
});

console.log("Server started on port 7000");
http.createServer(app).listen(7000);