"use strict";
const fs = require("fs");
const path = require("path");

module.exports = function findext(dir, ext, callback){
    fs.readdir(dir, (err, files) => {
       if (err){
           return callback(err);
       }
       const search = files.length ? files.filter(f => path.extname(f) === `.${ext}`) : [];
       return callback(null,search);
    });
}