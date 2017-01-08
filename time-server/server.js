const net = require('net');
const port = process.argv[2];
const strftime = require("strftime");

const server = net.createServer((c) => {
  // 'connection' listener
  //console.log('client connected');
  c.on('end', () => {
    //console.log('client disconnected');
  });
  c.write(`${strftime('%Y-%m-%d %H:%M')}\n`);
  c.end();
});

server.on("error", (e) => {
    throw e;
});

server.listen(port, () => {
  //console.log('server bound');
});