let http = require("http");
let express = require("express");   /* Accessing express module */

let app = express();  /* app is a request handler function */

app.get("/", function(request, response) {
   response.send("get request detected");
});

app.post("/", function(request, response) {
   response.send("post request detected")
});

app.put("/", function(request, response) {
   response.send("put request detected")
});

app.delete("/", function(request, response) {
   response.send("delete request detected")
});

console.log("Server started on port 8001");
http.createServer(app).listen(8001);