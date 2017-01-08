"use strict";

let args = process.argv.slice(2);
console.log(args.reduce((prev,val) => prev+(+val), 0));