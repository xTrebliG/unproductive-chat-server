// Dependencies
// =============================================================
var mongoose    = require('mongoose');
var database    = require('./db');

// Connections
// =============================================================
module.exports = function(app){
    // Database connection local or remote
    mongoose.connect('mongodb://localhost/ucDev');
    // Databse check
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("We're connected!");
    });
};
