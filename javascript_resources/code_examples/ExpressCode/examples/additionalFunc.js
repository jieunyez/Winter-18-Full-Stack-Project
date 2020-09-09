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

app.use(function(request, response) {
   let statusCode = 200; /* OK */

   console.log("request.ip: " + request.ip);
   response.redirect("http://www.cs.umd.edu");
});

console.log("Server started on port 7002");
http.createServer(app).listen(7002);