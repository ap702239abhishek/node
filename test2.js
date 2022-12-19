var http = require('http');
const hostname='0.0.0.0';
const port= process.env.PORT||3000;
http.createServer(function (req, res) {
  console.log("admin") 
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World! vvvv');
}).listen(port,hostname,()=>{
  console.log(`server running st http://$(hostname)$(port)`);
});