"use strict";
const fs = require("fs");
const path = require("path");
const ext = process.argv[3];
fs.readdir(process.argv[2],(err, list) => {
   if (err){
       return;
   } 
   list.filter(el => !ext || path.extname(el) === "."+ext)
    .forEach(el => console.log(el));
});