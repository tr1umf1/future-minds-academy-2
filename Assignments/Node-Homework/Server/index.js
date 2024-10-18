const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const server = http.createServer(async (req, res) => {
    const filePath = path.join(__dirname, "teksti.txt");

    if (req.url === "/teksti.txt") { 
        try {
            const data = await fs.readFile(filePath, 'utf-8');
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error reading the file');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
    }
});

server.listen(8080)
