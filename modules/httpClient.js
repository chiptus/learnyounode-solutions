const { createServer } = require("http");

module.exports = {
    createServerAndListen,
}

function createServerAndListen(port, listener) {
    const server = createServer(listener);
    
    server.listen(port);
    
    return server;
}