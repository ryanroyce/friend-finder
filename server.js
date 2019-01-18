// requiring the express package
var express = require("express");

// creates an express server
var app = express();

// setting the port
var PORT = process.env.PORT || 8080;

// middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// linking api & html routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// starting the server/making sure its working with a console.log
app.listen(PORT, () =>{
    console.log("App listening on PORT: " + PORT);
})

// note: this template was modified from the hot restaurant activity we did in week 13