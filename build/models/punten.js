mongoose = require("mongoose");
var bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        dropDups: true
    },
    since: Date,
    password: String,
    rapporten: [{
        periode: String,
        totaal: Number,
        datum: Date,
        vakken: [{
            naam: String,
            visible: {
                type: Boolean,
                default: true
            },
            lesuren: Number,
            totaal: Number,
            toetsen: [{
                score: Number,
                maxscore: Number,
                procent: String,
                datum : {
                    type: Date,
                    default: Date.now()
                }
            }]
        }],
    }],
    richting: String,
    klas: String,
    school: String
});

module.exports = mongoose.model('Rapport', UserSchema);
