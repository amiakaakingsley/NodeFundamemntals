const { readFile, writeFile } = require('fs')
const util = require('util');

const readfilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const message = "This is the content of the another file that was just created";

const start = async () => {
    try{
        const first = await readfilePromise("./data/message.txt", 'utf8');
        const second = await readfilePromise("./content/subFolder/file.txt", 'utf8');
        await writeFilePromise('./content/subFolder/anotherFile.txt', message,);
        console.log(first, second);  
    } catch (error) {
        console.log(error);
        
    }
}

start();

// const getText = (path) => {
//     return new Promise(( resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//         if (err) {
//            reject(err);
//         } else {
//             resolve(data);
//         }
//     })
//     })
// }

const {readFile} = require('fs');


const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile('./data/message.txt', 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        })
    })
}
getText('./data/message.txt')
     .then(result => console.log(result))
     .catch(err => console.log(err))


// const start = async() => {
//     const first = await getText('./data/message.txt');
//     console.log(first);    
// }

// start();