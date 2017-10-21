//      Spotify codes
//      Client ID: dbe35303c5fd4de7ac5801fe83016cf1
//      Client Secret: 357faeb3a3be4593a948b92e7a84c26c
                

var inquirer = require("inquirer");
var keysJs = require("./keys.js");
var request = require("request");
var twitter = require("twitter");
var moviename = "";


//Gets user input from prompt and runs the function based on what the user chooses.
inquirer.prompt([
  {
    name: "command",
    message: "What can I do for you? Type one: my-tweets, spotify-this-song, movie-this, or do-what-it-says"
  }
]).then(function(userrequest) {
    
    if (userrequest.command === "my-tweets") {
        console.log(twitter);
        var config = keysJs.twitterKeys;
        var twitter = new Twitter(config);
        twitter.getUserTimeline({ screen_name: 'the', count: '20'}, error, success);
    };

    if (userrequest.command === "spotify-this-song") {
        console.log(userrequest.command);
    }

    else if (userrequest.command === "movie-this") {
        console.log("i typed movie this");
        inquirer.prompt([
            {
                name: "movietitle",
                message: "What movie would you like me to search?"
            }
        ]).then(function(userrequest) {
                moviename = userrequest.movietitle;
            console.log(movietitle);
            console.log(moviename);
            });

        console.log(moviename);
//        request("http://www.omdbapi.com/?t=" + moviename + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {
//
//          if (!error && response.statusCode === 200) {
//
//              console.log(JSON.parse(body).Title + " was made in year " + JSON.parse(body).Year + " and is rated " + JSON.parse(body).imdbRating + ". The movie was made in the " + JSON.parse(body).Country);
//          }
//        });
    }

    else if (userrequest.command === "do-what-it-says") {
                    var fs = require("fs");
                    fs.readFile("random.txt", "utf8", function(error, data) {
                      if (error) {
                        return console.log(error);
                      }
                      console.log(data);
                    });
    }
});


//
//
//prompt.start();
//
//prompt.get(['username','email'],function(err,result) {
//    if(err) {return onErr(err); }
//    console.log('Command-line input received: ');
//    console.log('username: ' + result.username);
//});
