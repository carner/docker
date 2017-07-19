const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

process.on('uncaughtException', function(err) {
    if (err.code === 'EADDRINUSE'){
        console.log(`running at ${port}`)
    }
});

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`);
});