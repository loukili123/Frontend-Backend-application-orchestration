const express = require("express");
const axios = require("axios");
const client = express();
const port = process.env.CLIENT_PORT || 3000;

client.listen(port, () => console.log(`Listening on port ${port}`));

axios.default.withCredentials = true;


client.get("/", function(req, res){

    axios.get('http://localhost:5000/')
    .then(response => {
        res.send(
            response.data
          );
    });

});


module.exports = client;