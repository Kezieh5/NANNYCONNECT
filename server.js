const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8000; // Set the port for the server

// Create a server instance
const server = http.createServer((req, res) => {
    // Read the requested file
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html'; // Serve index.html by default
    }

    // Get the file extension
    const extname = String(path.extname(filePath)).toLowerCase();

    // Set content type based on file extension
    const contentType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
    }[extname] || 'application/octet-stream';

    // Read the file
    fs.readFile(filePath, (err, data) => {
        if (err) {
            // If file not found, return 404
            if (err.code === 'ENOENT') {
                res.writeHead(404);
                res.end('404 Not Found');
            } else {
                // Internal server error
                res.writeHead(500);
                res.end('500 Internal Server Error');
            }
        } else {
            // Serve the file with appropriate content type
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data, 'utf-8');
        }
    });
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
