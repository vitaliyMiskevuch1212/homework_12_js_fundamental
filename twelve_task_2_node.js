const http = require('http');
const os = require('os');
const path = require('path');
const { greetUser } = require('./twelve_task_2');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    const username = os.userInfo().username;
    const uptimeInMinutes = Math.round(os.uptime() / 60);
    const cwd = path.basename(process.cwd());
    const filename = path.basename(__filename);

    const greeting = greetUser(username);

    res.write(`<h1>${greeting}</h1>`);
    res.write(`<p>OS Type: ${os.type()}</p>`);
    res.write(`<p>Uptime (in minutes): ${uptimeInMinutes}</p>`);
    res.write(`<p>Current Working Directory: ${cwd}</p>`);
    res.write(`<p>Server Filename: ${filename}</p>`);

    res.end();
});

server.listen(5001, () => {
    console.log('Server running at http://localhost:5001/');
});
