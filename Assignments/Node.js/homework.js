import http from 'http';
import fs from 'fs/promises';
import url from 'url'
import path from 'path'
const port = 7000;

const _filename= url.fileURLToPath(import.meta.url);  
const _dirname= path.dirname(_filename);

console.log(_dirname, _filename)


const server = http.createServer(async (req, res) => {

    try {
        if (req.method === 'GET') {
            let filepath;
            if (req.url === '/') {
                filepath= path.join(_dirname, 'home.html')
                } else if (req.url === '/about') {
                   filepath= path.join(_dirname, 'About.html')
                } else {
                   throw new Error('Not found')
                }
             
             const data = await fs.readFile(filepath);
             res.setHeader('Content-Type', 'text/html');
             res.write(data);
             res.end(); 
        } else {
            throw new error ('Method not allowed please look your code for any error<3')
        }
    } catch (error) {
        res.writeHead(500, {'Content-Type': 'text/plain'})
        res.end('Server Error');
    } 
});

server.listen(port, () => {
    console.log('Server running on port 7000');
}); 