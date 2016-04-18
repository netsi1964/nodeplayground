var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';
var dbName = 'salmer';
var connection;

var connect = function(callback) {
    // if (connection != null) {
    //     console.log("connected")
    //     callback(null, connection);
    // } else {
        MongoClient.connect(url, function(err, db) {
            connection = db;
            assert.equal(null, err);
            console.log("Connected correctly to server.");
            callback(err, db);
        });
    //}
}

var insertDocument = function(data, callback) {
    connect(function(err, db) {
        // removeSalmer(data.number, function() {
        //
        // });
        db.collection(dbName).insertOne(data, function(err, result) {
            console.log("Inserted a document %s into the %s collection.", data.number, dbName);
            db.close();
            callback();
        });
    });
};



var findSalmer = function(callback) {
    connect(function(err, db) {
        var cursor = db.collection(dbName).find();
        var salm = [];
        cursor.each(function(err, doc) {
            assert.equal(err, null);
            if (doc != null) {
              salm.push(doc);
            } else {
                db.close();
                callback(salm);
            }
        });
    });

};
var removeSalmer = function(salmeNr, callback) {
    connect(function(err, db) {
        db.collection(dbName).deleteMany({
                "number": salmeNr
            },
            function(err, results) {
                console.log("Deleded number %s (%s)", salmeNr, results);
                callback(results);
            });
    });
}


module.exports = {
    insertDocument: insertDocument,
    findSalmer: findSalmer,
    removeSalmer: removeSalmer
};
