const http = require('http');
const os = require('os');
const path = require('path');

let port = 5000;

const server = http.createServer((req, res) => {
    const responseString = `
    <hi>System information</hi>
    
    <ul>
    <li>Current user name: ${os.userInfo().username}</li>
    <li>OS type: ${os.type()}</li>
    <li>System work time: ${Math.floor(os.uptime() / 60)} minutes</li>
    <li>Current work directory: ${process.cwd()}</li>
    <li>Server File Name: ${path.basename(__filename)}</li>
</ul>
    `;
res.setHeader('Content-Type', 'text/html');
res.statusCode = 200
res.end(responseString)
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});