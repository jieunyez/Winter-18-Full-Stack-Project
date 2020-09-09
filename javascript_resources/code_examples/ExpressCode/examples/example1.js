let http = require("http");
let express = require("express");   /* Accessing express module */

let app = express();  /* app is a request handler function */

app.use(function(request, response) {
   console.log("Received: " + request.url);
   response.end("Request received by server (8000)");
});

console.log("Server started on port 8000");
http.createServer(app).listen(8000);