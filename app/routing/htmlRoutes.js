// linking the path package
const path = require("path");

// establishing the html routes
module.exports = (app) =>{
    // what happens when we visit "/survey"
  app.get("/survey", (req, res) =>{
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // any other url will go to home page
  app.get("*", (req, res) =>{
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};

// note: the template for this code was taken from the hot restaurants activity from week 13