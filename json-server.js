const url = require("url");

const port = require("./modules/getport");
const { createServerAndListen } = require("./modules/httpClient");

createServerAndListen(port, (req, res) => {
    const { pathname: path, query: { iso } } = url.parse(req.url, true);
    let time = "";
    if (isParseTimePath(path)) {
        time = parseTime(iso);
    }
    
    if (isUnixTimePath(path)) {
        time = isoToUnix(iso);
    }
    
    res.end(JSON.stringify(time));
});

function isParseTimePath(path) {
    return path === '/api/parsetime';
}

function isUnixTimePath(path) {
    return path === '/api/unixtime';
}

function parseTime(iso) {
    const date = new Date(iso);
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
    };
}

function isoToUnix(iso) {
    return {
        unixtime: (new Date(iso)).getTime(),
    };
}