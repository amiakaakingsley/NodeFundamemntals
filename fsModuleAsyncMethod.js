// Async functions:
// Run in the background
// Return later
// Use callbacks (or promises)


const { readFile, writeFile} = require('fs')
const {join} = require('path')
const filePath = join(__dirname, 'content', 'subFolder', 'file.txt')

console.log('start');

readFile(filePath, 'utf-8', (err, data) => {
    if(err) throw err; 

    const newText = data;
        
    writeFile("./content/subFolder/newFile2.txt", newText, (err) => {
        if(err) throw err;
        console.log(`A new file was ysuccessfully created ${newText}`);           
    })
    });

    console.log('finish');
    
