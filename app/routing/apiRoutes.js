// require the array-sort package
let arraySort = require("array-sort");

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
        // using the psuedocode from office hours, Phil helped with this post request
       
        // these variables will be used later to store the difference in values from the submitted numerical input for each question in the array
        let storeTotaldifference = [];
        
        // user data will store the request.body pointer
        let userData = req.body;
        //    looping through the friendsArray to push a new friend to the end of the JSON data
        for (i = 0; i < friendsArray.length; i++) {
            let results = 0;
            //    nested for loop
            for (var n = 0; n < friendsArray[i].scores.length; n++) {
                results += (parseInt(userData.scores[n]) - parseInt(friendsArray[i].scores[n]));
            }
            //then we push the persons name, photo and difference in score into a new array//
            storeTotaldifference.push({name:friendsArray[i].name, picture: friendsArray[i].picture, totalDifference: Math.abs(results)});
        };

    arraySort(storeTotaldifference, 'totalDifference');
    // push the userdata into the friends array, this will create more matches to choose from.
    friendsArray.push(userData);
    // return the results of the absolute value. phils pseudocode was instrumental in implementing the nested for loops
    return res.json(storeTotaldifference[0]);
    });

    // from the hot restaurants activity we will use this to clear out the friends array if needed
    app.post("/api/clear", (req, res) => {
        // Empty out the arrays of data
        friendsArray.length = [];
        res.json({ ok: true });
    });
};
