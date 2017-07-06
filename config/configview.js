var path = require("path");
//var exphbs = require('express-handlebars');

module.exports = function (app) {
  app.set("views", path.resolve("app/views"));
};
