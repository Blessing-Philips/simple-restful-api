
const http = require('http');
const URL = require('url');
const UserAc = require('./adduser');
const dtsource = require('./datasource.json');

const server = http.createServer(function (req, res) {
    const data = [
        { username: 'naomi', age: 10 },
        { username: 'sefa', age: 14 },
        { username: 'eric', age: 11 }
    ];

    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("welcome");
        res.end();
    } else if (req.url == '/users') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(data));
        res.end();
    } else if (req.url.startsWith('/adduser')) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const parsedUrl = URL.parse(req.url, true);
        const params = parsedUrl.query;
        let u_name = params.username;
        let u_age = params.age;
        UserAc.adduser(u_name, u_age);
        res.end("Record added successfully");
    } else if (req.url == '/LoadAddedUsers') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(dtsource));
        res.end('Record Successfully Loaded'); 
    } else if (req.url == '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("contact page");
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end();
    }
});

server.listen(8000, function () {
    console.log("Server running");
});
