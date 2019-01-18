// linking the path package
var path = require("path");

// establishing the html routes
module.exports = (app) =>{
    // what happens when we visit "/survey"
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // any other url will go to home page
  app.get("*", (req, res) =>{
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};