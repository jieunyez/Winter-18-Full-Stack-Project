
let http = require("http");
let path = require("path");
let express = require("express");   /* Accessing express module */
let app = express();  /* app is a request handler function */
let bodyParser = require("body-parser");

app.set("views", path.resolve(__dirname, "templates"));
app.set("view engine", "ejs");

/* Initializes request.body with post information */ 
app.use(bodyParser.urlencoded({extended:false}));

app.post("/", function(request, response) {
   let variables = { semester: request.body.semester,
                     teacher : request.body.teacher
                     };
    console.log(request.body);                 
   //response.render("courseInfo", variables);

   //switch to make an api

   // is there a way to do both???
   response.json(variables);
});

console.log("Server started on port 7003");
http.createServer(app).listen(7003);