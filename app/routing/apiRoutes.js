// from the data folder we require friendsArray.js that has the array for all of the friends
let friendsArray = require("../data/friends.js");

// utilizing the hot restaurant activity as a template we create the API routes
module.exports = (app) => {
    //   API GET Requests
    app.get("/api/friends", (req, res) => {
        res.json(friendsArray);
    });

    // API POST Requests
    app.post("/api/friends", (req, res) => {
        var userdata = req.body;
        //    looping through the friendsArray to push a new friend to the end of the JSON data
        for (i = 0; i = friendsArray.length; i++) {
            friendsArray[i].push(userdata);
        };
    });

// from the hot restaurants activity we will use this to clear out the friends array if needed
    app.post("/api/clear", (req, res) => {
        // Empty out the arrays of data
        friendsArray.length = [];
        res.json({ ok: true });
    });
};
