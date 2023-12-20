// Create web server application with Node.js
// Run the server with the command: node comments.js
// Test the application with the url: http://localhost:3000/comments

// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
    // set up some routes
    switch(request.url) {
        case '/':
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write('home page');
            response.end();
            break;
        case '/about':
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write('about page');
            response.end();
            break;
        case '/api':
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write('api page');
            response.end();
            break;
        default:
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.write('404 - Page not found');
            response.end();
    }
});

// Listen on port 3000, IP defaults to

