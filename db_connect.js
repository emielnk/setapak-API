var mysql = require('mysql');
var express = require('express');
var con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database : 'setapak'
    });

  var app = express();
  
  con.connect(function(err) {
    if (err){
        console.log("Something not right\n");
        throw(err);
    }
    else
        console.log("Connected Hehe!");
  });

  app.listen(3000);