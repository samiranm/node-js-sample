#!/usr/bin/env node

var express = require('express');

var app = express.createServer(express.logger());


app.get('/', function(request, response) {

var fs=require('fs');
var bufr1=fs.readFileSync("index.html");
var text1=bufr1.toString("utf-8");
    response.send(text1);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
