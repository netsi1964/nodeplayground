var getSalme = require('./salmer.js');
var db = require('./database.js');
var fs = require('fs');


var salmer = [];
var salmenr = 1;
var maxNo = 791;

function download(salmenr) {
    console.log("Fetching " + salmenr);
    getSalme(salmenr, function(salme) {
        db.insertDocument(salme, function() {
            salmenr++;
            if (salmenr <= maxNo) {
                download(salmenr);
            } else {
                db.findSalmer(function(salmer) {
                    console.log(arguments);
                });
            }
        });
    })
}

//download(salmenr);
db.findSalmer(function(salmer) {
    console.log(salmer);
    fs.writeFile("test.json", JSON.stringify(salmer), function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
});
