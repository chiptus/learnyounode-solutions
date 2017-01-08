"use strict";
const url = process.argv[2];
const bl = require("bl");
const http = require("http");

http.get(url, (response) => {
   response.pipe(bl((err, data) => {
       if (err){
           return;
       }
       const str = data.toString();
       console.log(str.length);
       console.log(str);
   })); 
});