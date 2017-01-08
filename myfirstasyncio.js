"use strict";
const fs = require("fs");
const filename = process.argv[2];
const file = fs.readFile(filename, 'utf8', (err, result) => {
    if (!err)
        console.log(result.split("\n").length-1);
});