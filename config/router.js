var index = require("../app/controller");
var fs = require('fs');



var ObjectStudent = [
    {
        hoten: "Nguyen Thai hoc",
        age: 20
    },
    {
        hoten: "Nguyen Thai hoc1",
        age: 25
    },
    {
        hoten: "Nguyen Thai hoc2",
        age: 24
    },
    {
        hoten: "Nguyen Thai hoc3",
        age: 23
    },
    {
        hoten: "Nguyen Thai hoc4",
        age: 22
    },
    {
        hoten: "Nguyen Thai hoc5",
        age: 21
    }
]
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


    app.post("/", function(req, res, next) {
        // mình muốn khi nó chạy thì sẽ vào đây và trả về dữ liệu
         console.log('====================================');
         console.log(req.body);
         console.log('====================================');

         var countChecknumber = req.body.count;
         

         if(isNaN(parseInt(countChecknumber))){
             console.log("This is not a number !!");
             res.send(500, 'Something went wrong');
         }
         else {
             res.send(200, ObjectStudent);
         }
         res.end();
         
    });


    app.get("/view", function(req, res, next) {
            fs.readFile('./app/view/view2.html', function (err, html) {
                
                if (err) {
                    throw err;
                }
                res.writeHeader(200, {"Content-Type": "text/html"});
                res.write(html);
                res.end();
            });
    });
}
