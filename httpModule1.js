const http = require('http');
const {writeFile, readFile} = require('fs');
const {join} = require("path");

const filePath = join(__dirname, 'public', 'index.html');

const applicationUser = {
    name: 'Amiaka Kingsley Dinso',
    role: "Backend Engineer",
    age: 27,
    tech_stacks: ["Java", 'React', 'NodeJS', 'Spring boot', 'Express js']
}

const server = http.createServer((request, response) => {
   
    if(request.method === 'GET' && request.url === '/'){

         readFile(filePath, 'utf-8', (error, data) => {
            if(error){
                response.writeHead(200, {'Content-Type': 'Text/plain'});
                response.end("Error Loading file, the problem is from our End");
                return;
            }
            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.end(data);
        })
    }

    else if(request.method === 'GET' && request.url === '/api') {
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(applicationUser));
    }
     
    else if (request.method === 'GET' &&  request.url === "/about"){
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end("about Us page")
    }
    else {
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.end("Page not found");
    }
});

server.listen(3000);