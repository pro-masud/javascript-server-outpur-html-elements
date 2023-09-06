const http = require("http");
const colors = require("colors");
const dotenv = require("dotenv").config();

// get port number .env file
const port = process.env.PORT || 6060;

http.createServer((req, res) => {
    res.writeHead(200, "text/html");
    res.write(`
        <h1 style="font-size: 50px; text-align: center; color: #333;"> Hello World </h1>
        <p style="text-align: center;"> this is a first text JavaScript server Languegus </p>
    `);
    res.end();
}).listen(port, () => {
    console.log( `Server is Running Port Number Is: ${port}`);
})
