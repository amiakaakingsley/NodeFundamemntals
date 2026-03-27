const http = require("http");
const {readFileSync} = require("fs")

// get all files
const homePage = readFileSync('./public/index.html');
const homeStyle = readFileSync('./public/style.css');


const server = http.createServer((request, response) => {
  const url = request.url;
  console.log(url);

  if (url === "/") {
    response.writeHead(200, { "content-type": "text/html" })
    response.write(homePage)
    response.end();
  } 

  else if (url === "/about") {
    response.writeHead(200, { "content-type": "text/html" })
    response.write("<h1>About page</>")
    response.end();
  } 
  
  else if (url === "/style.css") {
    response.writeHead(200, { "content-type": "text/css" })
    response.write(homeStyle)
    response.end();
  } 
  
  else {
    response.writeHead(404, { "content-type": "text/plain" })
    response.write("page not found")
    response.end()
  }

});

server.listen(3000, () => {
    console.log('server is running on port 3000');
});