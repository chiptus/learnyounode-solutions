'use strict';

const http = require("http");
const fs = require("fs");

const port = process.argv.length > 1 ? process.argv[2] : process.env.PORT;
const filePath = process.argv[3];


const server = http.createServer((req, res) => {
    fs.createReadStream(filePath).pipe(res);
});

server.listen(port);