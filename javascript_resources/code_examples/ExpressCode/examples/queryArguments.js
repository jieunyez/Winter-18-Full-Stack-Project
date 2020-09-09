/*
 *http://localhost:7002/?semester=fall
 */

let http = require("http");
let path = require("path");
let express = require("express");   /* Accessing express module */
let app = express();  /* app is a request handler function */

app.set("views", path.resolve(__dirname, "templates"));
app.set("view engine", "ejs");

app.post("/", function(request, response) {
   let variables = { semester: request.query.semester,
                     teacher : request.query.teacher
                     };
   response.render("courseInfo", variables);
});

console.log("Server started on port 7002");
http.createServer(app).listen(7002);