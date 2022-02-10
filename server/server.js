const session = require('express-session');
const express = require("express");
const app = express();
const port = process.env.SERVER_PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(
    session({
        secret: 'secret starting',
        resave: false,
        saveUninitialized: false,
        cookie: {}
    })
);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
  });

app.get("/test", function(req, res){

    if(!req.session.mycounter)
      req.session.mycounter = 0;
    req.session.mycounter++;
    res.send({
      "message": "vous avez visité le site "+req.session.mycounter+" fois !"
    });

});