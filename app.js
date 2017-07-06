var express = require("express");
var app = express();
var postServer = process.env.POST || 8080;


require("./config")(app); // auto catch index.js

app.listen(postServer, function (errorListener) {
  if(errorListener)
  {
    console.log(errorListener);
  }
  console.log("The server is running in post " + postServer);
})
