"use strict";
const findext = require("./modules/findext.js");
findext(process.argv[2], process.argv[3], (err, data) => {
    if (err){
        console.log("error", err);
        return;
    }
    data.forEach(d => console.log(d));
});