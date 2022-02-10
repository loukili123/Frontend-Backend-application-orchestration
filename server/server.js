const session = require('express-session');
const express = require("express");
const server = express();
const port = process.env.SERVER_PORT || 5000;

server.listen(port, () => console.log(`Listening on port ${port}`));

server.use(
    session({
        secret: 'secret starting',
        resave: false,
        saveUninitialized: false,
        cookie: {}
    })
);

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
  });

server.get("/", function(req, res){

    if(!req.session.mycounter)
      req.session.mycounter = 0;
    req.session.mycounter++;
    res.status(200).send({
      "message": "vous avez visité le site "+req.session.mycounter+" fois !"
    });

});

module.exports = server;