const path = require('path');
const fs = require("fs");

 const filepath = path.join(__dirname, "/content", '/subFolder', "file.txt")

 console.log(filepath + ": this is the file path");
 const base = path.basename(filepath);

 console.log(base + ": this is the base of the file");
 
 
 fs.readFile(filepath, 'utf-8', (err, data) => {
    if(err){
        console.log("file cannot be read");
        return;
    }
    console.log(data);
    
 })

 const absolute = path.resolve(__dirname, "constent", "subFolder", 'file.txt')

 console.log(absolute + ": this is the absolute place of the file");
 
