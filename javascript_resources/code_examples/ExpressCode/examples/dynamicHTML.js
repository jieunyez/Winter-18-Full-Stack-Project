
let http = require("http");
let path = require("path");
let express = require("express");   /* Accessing express module */
let app = express();  /* app is a request handler function */

app.set("views", path.resolve(__dirname, "templates"));
app.set("view engine", "ejs");

app.get("/", function(request, response) {
   let variables = { semester: "Summer",
                     greeting : "<em>Welcome to the course site</em>"
                     };
   response.render("welcome", variables);
});

console.log("Server started on port 7001");
http.createServer(app).listen(7001);