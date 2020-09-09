let http = require("http");
let express = require("express");   /* Accessing express module */
let app = express();  /* app is a request handler function */
let message;

app.use(function(request, response, next) {
   console.log("Received: " + request.url);
   message = "First middleware function\n";
   console.log(message);
   next();  /* next middleware function */
});

app.use(function(request, response) {
   let secondMessage = "Second middleware function";
   console.log(secondMessage);
   message += secondMessage;
   response.end(message);
});

console.log("Server started on port 5001");
http.createServer(app).listen(5001);