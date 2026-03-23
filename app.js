const {createReadStream} = require('fs');

const stream = createReadStream('./data/bigFile.txt', 'utf8');

stream.on('data', (result) => {
  console.log(result);
  
}) 