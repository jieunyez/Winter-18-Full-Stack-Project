/*
 * http://localhost:8000/class/summer
 */
let http = require("http");
let express = require("express");   /* Accessing express module */

let app = express();  /* app is a request handler function */

app.get("/", function(request, response) {
   response.end("Welcome to the cmsc389N home page");
});

app.get("/syllabus", function(request, response) {
   response.end("Class Syllabus")
});

app.get("/class/:semester", function(request, response) {
   response.end("Information for semester: " + request.params.semester);   
});

app.get("/children/:name", function(request, response) {
  response.json({ firstName: request.params.name });
});

/* Middleware function invoked if above ones don't match */
app.use(function (request, response) {
   response.status(404).send("Resource not found");
});

console.log("Server started on port 8000");
http.createServer(app).listen(8000);