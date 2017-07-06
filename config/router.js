var index = require("../app/controller");
var fs = require('fs');

module.exports = function (app) {
    app.get("/", function (req, res, next) {
        fs.readFile('./app/view/home.html', function (err, html) {
          if (err) {
              throw err;
          }
          res.writeHeader(200, {"Content-Type": "text/html"});
          res.write(html);
          res.end();
        });
  });
}
