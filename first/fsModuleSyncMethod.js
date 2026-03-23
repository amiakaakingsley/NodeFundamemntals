//Synchronous methods execute immediately and return results directly, so callbacks are not required for handling delayed results, unlike asynchronous methods

// Sync functions:
// Execute immediately and blocks every other request
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

const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.end('Home Page')
    }
    else if(req.url === '/about'){
        //Blocking code 
        for(let i = 0; i < 100; i++){
            for(let j = 0; j < 100; j++){
                console.log(`${i} ${j}` );
                
            }
        }
        res.end("this is the about page")
    }
    else {
        res.end("Page not found")
    }
});

server.listen(5000, ()=>{
    console.log(`server listens on port : 5000`);
    
})



