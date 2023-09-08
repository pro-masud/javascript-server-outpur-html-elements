const http = require("http");
const colors = require("colors");
const { log } = require("console");
const dotenv = require("dotenv").config();

// get port number .env file
const port = process.env.PORT || 6060;

http.createServer((req, res) => {
    // res.writeHead(200, "text/html");
    // res.write(`
    //     <h1 style="font-size: 50px; text-align: center; color: #333;"> Hello World </h1>
    //     <p style="text-align: center;"> this is a first text JavaScript server Languegus </p>
    // `);


    // create a file within node js files 
    if(req.url === "/" && req.method === "GET"){
        res.writeHead(200, "text/html");
        res.write(`
            <h1> Home Page </h1>
        `);
    }else if(req.url === "/about" && req.method === "GET"){
        res.writeHead(200, "text/html");
        res.write(`
            <h1>This a About Page </h1>
        `);
    }else if(req.url === "/blog" && req.method === "GET"){
        res.writeHead(200, "text/html");
        res.write(`
            <h1>This a Blog Page </h1>
        `);
    }else if(req.url === "/contact" && req.method === "GET"){
        res.writeHead(200, "text/html");
        res.write(`
            <h1>This a Contact Page </h1>
        `);
    }else{
        res.writeHead(200, "text/html");
        res.write(`
            <h1> 404 Page </h1>
        `);
    }
    
    res.end();
}).listen(port, () => {
    console.log( `Server is Running Port Number Is: ${port}`);
})
