var http = require('http');

http.createServer(function(req, res){
  res.writeHead(200);
  res.write('Hello, this is Dog./n');
  res.end();
}).listen(8080);
console.log('Dog is listening on 8080...');