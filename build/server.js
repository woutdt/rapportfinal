var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var port = 3000;
var app = express();
var bcrypt = require('bcryptjs');
var jwt = require("jsonwebtoken");
var ObjectId = require('mongodb').ObjectID;
var cors = require('cors');
var cookieParser = require('cookie-parser')
var ObjectId = require('mongoose').Types.ObjectId;
var admin = require('firebase-admin');
const path = require('path');


var User = require("./models/punten.js");

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser())

app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));

const saltRounds = 12;


mongoose.connect('mongodb+srv://woutdt:Wout2002@cluster0-ivi2k.mongodb.net/test?retryWrites=true', function(err) { 
  if(err) {
    console.log(err);
  } else {
    console.log("database connected");
  }
});

app.post("/api/newUser", function(req, res) {
  User.find({}, function(err, data) {
    for(i = 0; i < data.length; i++) {
      if(req.body.email == data[i].email) {
        return res.json({"message": "email already in use"});
      }
    };
    var pass = req.body.password;
    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(pass, salt, function(err, hash) {
        var pass = hash;
        var user = new User({
          name: req.body.name,
          password: pass,
          email: req.body.email,
          since: Date.now()
        });
          
      user.save(function(err, data){
        User.find({}, function(err, data) {
          if(err) {
            console.log(err);
              return res.json({"message": "something went wrogn..."});
            } else {
              return res.json(data);
            };
          });
        });
      });
    });
  });
});

app.get("/api/authenticate", function(req, res){
  var email = req.headers.email;
  var password = req.headers.toegang;
  User.findOne({'email': email}, function(err, data) {
    bcrypt.compare(password, data.password, function(err, response) {
      if(response == false) {
        return res.status(403).json({"message": "password incorrect"});
      } else {
        payload = {data};
        jwt.sign(payload, 'value', { expiresIn: '4000h' }, function(err, token) {
          res.json(token);
        });
      };
    });
  });
});

app.get("/api/userinfo", function(req, res, next) {
  var header = req.headers.authorization;
  headerArray = header.split(" ");
  jwt.verify(headerArray[1], 'value', function(err, data) {
    if(err) return res.status(403).json({"message": "no access"});
    if(data) {
      User.findById(data.data._id, function(err, doc) {
        res.json(doc);
      });
    }
  });
});
app.get("/api/rapportbyid", function(req, res, next) {
  var header = req.headers.authorization;
  headerArray = header.split(" ");
  var rapport = req.query.id;
  jwt.verify(headerArray[1], 'value', function(err, data) {
    if(err) return res.status(403).json({"message": "no access"});
    if(data) {
      User.findOne({"rapporten._id": rapport}, function(err, doc) {
        res.json(doc);
        console.log(doc);
      });
    }
  });
});
app.post("/api/rapport", function(req, res, next) {
  var header = req.headers.authorization;
  headerArray = header.split(" ");
  jwt.verify(headerArray[1], 'value', function(err, resutl) {
    if(err) return console.log(err);
    data = resutl.data;
    rapportObj = {
      periode: req.body.periode,
      datum: Date.now()
    };
    User.findOneAndUpdate({_id: data._id}, { $push: { 'rapporten':  rapportObj }}, {new: true}, function(err, doc) {
      console.log(err);
      return res.json(data);
    });
  });
});
app.put("/api/rapportTotaal", function(req, res) {
  var rapportid = req.body.rapportid;
  User.update({'rapporten._id': rapportid}, { 'rapporten.$.totaal': req.body.nieuwtotaal}, function(err) {
    if(err) return res.json({"message": "something went wrogn, please contact me"});
    res.json({"message": "success"})
  });
});
app.put("/api/delrapport", function(req, res) {
  var header = req.headers.authorization;
  headerArray = header.split(" ");
  jwt.verify(headerArray[1], 'value', function(err, result) {
    if(err) return console.log(err);
    data = result.data;
    User.findOneAndUpdate({_id: data._id}, { $pull  :  { 'rapporten' : { _id: new ObjectId(req.body.rapportid) }}}, function(err) {
      if(err) return console.log(err);
      User.findById(data._id, function(err, doc) {
        if(err) return console.log(err);
        res.json(doc);
      });
    });
  });
});
app.put("/api/rapportvak", function(req, res, next) {
  var header = req.headers.authorization;
  headerArray = header.split(" ");
  jwt.verify(headerArray[1], 'value', function(err, result) {
    if(err) return res.json({"message": "error"});
    vakObject = {
      naam: req.body.name,
      lesuren: Number(req.body.lesuren)
    };
    User.update({'rapporten._id': req.body.rapportid}, { $push: { 'rapporten.$.vakken': vakObject }},  function(err, data) {
      if(err) return res.json({"message": "something went wrogn.. please report this"});
      User.find({"_id": result.data._id}, function(err, doc) {
        if(err) return res.json({"message": "error"});
        usedRapport = doc[0].rapporten.filter(function(rapport) {
          return rapport._id == req.body.rapportid;
        });
        console.log(usedRapport[0]._id)
        vakken = usedRapport[0].vakken
        lengte = vakken.length;
        vakid = usedRapport[0].vakken[lengte - 1]
        console.log(vakid._id)
        res.json(vakid._id);
      });
    });
  });
});
app.put("/api/rapportvaktoets", function(req, res ,next) {
  var header = req.headers.authorization;
  headerArray = header.split(" ");
    jwt.verify(headerArray[1], 'value', function(err, result) {
      if(err) return res.json({"message": "error"});
      console.log(req.body)
      var procent = Math.floor((req.body.score / req.body.maxscore) * 100);
      toetsObject = {
        score: Number(req.body.score),
        maxscore: Number(req.body.maxscore),
        procent: procent
      };
      User.update({"rapporten.vakken._id": ObjectId(req.body.vakid)}, { $push: { 'rapporten.$[a].vakken.$[b].toetsen': toetsObject }}, { arrayFilters: [{ "a._id": ObjectId(req.body.rapportid) }, { "b._id": ObjectId(req.body.vakid)}]}, function(err, data) {
        if(err) return res.json({"message": "error"});
        if(err) console.log("error while updating toets");
        User.findOne({"rapporten.vakken._id": req.body.vakid}, function(err, doc) {
          if(err) return res.json({"message": "error"});
          res.json(doc);
        });
      });
    });
});
app.put("/api/extrainfo", function(req, res, next) {
  if(req.body.token == undefined) {
    return res.status(403).json({"message": "unauthorized"});
  }
  jwt.verify(req.body.token, 'value', function(err, result) {
    if(err) return res.json({"message": "error"});
    if(req.body.richting) {
      User.update({"_id": result.data._id}, { "richting": req.body.richting }, function(err) {
        if(err) return res.json({"message": "error on saving data"});
      });
    };
    if(req.body.klas) {
      User.update({"_id": result.data._id}, { "klas": req.body.klas }, function(err) {
        if(err) return res.json({"message": "error on savind data"});
      });
    };
    if(req.body.school) {
      User.update({"_id": result.data._id}, { "school": req.body.school }, function(err) {
        if(err) return res.json({"message": "error on saving data"});
      });
    };
    User.findOne({"_id": result.data._id}, function(err, data) {
      if(err) res.json({"message": "error, please report this"});
      return res.json(data);
    });
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(err) {
  if(err) console.log(err);
  console.log("running on port: "+port);
});
