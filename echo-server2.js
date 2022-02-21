"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var port = 8080;
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
app.get('/*', function (req, res) {
    res.send(req.path);
});
