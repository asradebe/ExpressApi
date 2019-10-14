var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

let server = app.listen(3090, function () {
    let port = "http://127.0.0.1:3090";
    console.log("app running on port.", server.address().port);
});

let appRouter = function (app) {
  app.get("/", function (req, res) {
    res.status(200).send({ message: 'Welcome to our restful API' });
  }); 
}

module.export = appRouter;