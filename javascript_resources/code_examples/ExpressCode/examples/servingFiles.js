/*
 *http://localhost:7001/Testudo.jpg
 */

let http = require("http");
let path = require("path");
let express = require("express");   /* Accessing express module */
let app = express();  /* app is a request handler function */

console.log("__dirname: " + __dirname);
/* Notice serverStaticFiles is not part of the url to find files */
let publicPath = path.resolve(__dirname, "serverStaticFiles");

app.use(express.static(publicPath));

/* If the static file is not found this middleware function will be executed */
app.use(function(request, response) {
   let statusCode = 200; /* OK */

   response.writeHead(statusCode, {"Content-type": "text/html"});
   response.end("<h1>Requested file not found!</h1>");
});

console.log("Server started on port 7001");
http.createServer(app).listen(7001);