"use strict";
const urls = process.argv.slice(2);
const bl = require("bl");
const http = require("http");
const answers = [];

urls.forEach((u,i) => getText(u, i, answers));

function getText(url, index, answers){
    http.get(url, (response) => {
       response.pipe(bl((err, data) => {
           if (err){
               return;
           }
           const str = data.toString();
           answers[index] = str;
           if (answers.filter(() => 1).length === 3){
               answers.forEach(a => console.log(a));
           }
       })); 
    });
}