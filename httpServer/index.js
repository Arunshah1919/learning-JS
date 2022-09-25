const http = require("http");
const fs = require("fs")

const server = http.createServer((req,res) => {
    if (req.url == "/") {
        res.end("Hello from the home side");

    }else if (req.url == "/other"){
        res.end("Hello from the other side");

    }else if (req.url == "/contact"){
        res.end("Hello from the contactUs side");

    }else if (req.url == "/userapi"){
        fs.readFile(`${__dirname}/userApi/firstAPI.json`, "utf-8", (err, data)=>{
            console.log(data);
            res.end(data);
        })
        

    }else {
        res.writeHead(404, {"content-type": "text/html"});
        res.end("<h1> 404 error pages. Page not found </h1>");
    } 
});

server.listen(8000, "127.0.0.1", ()=> {
    console.log("listening to the port no 8000");
});