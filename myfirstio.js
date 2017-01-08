"use strict";
const fs = require("fs");
const filename = process.argv[2];
const file = fs.readFileSync(filename);
console.log(file.toString().split("\n").length-1);