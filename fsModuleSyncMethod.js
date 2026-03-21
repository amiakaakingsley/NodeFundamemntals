//Synchronous methods execute immediately and return results directly, so callbacks are not required for handling delayed results, unlike asynchronous methods

// Sync functions:
// Execute immediately
// Return result directly
// Do NOT take callbacks

const { readFileSync, writeFileSync} = require("fs");
const {join} =  require("path")

console.log("start");
const firstFilePath = join(__dirname, 'content', "subFolder", 'file.txt') 
const secondFilePath = join(__dirname, 'data',  'message.txt') 

const first = readFileSync(firstFilePath, 'utf-8');
const second = readFileSync(secondFilePath, 'utf-8');

console.log(first, second);

const message = 'this is a new file that was just created here'

writeFileSync('./content/subFolder/newFile.txt', message);

const newfileTxt = readFileSync('./content/subFolder/newFile.txt', 'utf-8');
console.log(newfileTxt);





