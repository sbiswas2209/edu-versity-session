const http = require('http');

const HOST = "localhost"
const PORT = 8080;

const requestListener = (req, res) => {
    console.log(req.url);
    res.writeHead(200);
    res.end('My first server!');
}

const server = http.createServer(requestListener);
server.listen(PORT, HOST, () => {
    console.log(`Server is running on port ${HOST}:${PORT}`);
})