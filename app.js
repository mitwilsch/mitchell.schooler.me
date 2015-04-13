// set up nodejs web server to run behind nginx proxy

var http = require('http'), express = require('express');
var app = express();

/* enable handy to run behind a proxy e.g. nginx.
 * comment this out if using the node web server
 * to serve requests directly
 */
app.enable('trust proxy');

http.createServer(app).listen(3000, 127.0.0.1, function(){
  // process http requests here
  res.send("Wasssup!");
});