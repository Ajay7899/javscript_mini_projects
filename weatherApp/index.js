const http = require("http");
const fs = require("fs");
var requests = require("requests");

const port = 8008;
const host = "localhost"


fs.readFileSync("homePage.html","utf-8");

const server =http.createServer((req,res ) =>{
    requests()
})



server.listen(port,host);
//starting backend with node js