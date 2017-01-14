//imports 
var map = require("through2-map");

const port = require("./modules/getport");
const {createServerAndListen} = require("./modules/httpClient");

createServerAndListen(port, (req, res) => {
   if (req.method !== "POST") {
       return;
   } 
   req.pipe(map({wantStrings: true},chunk => chunk.toUpperCase())).pipe(res);
});

