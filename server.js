const http = require("http");
const fs = require("fs");


http.createServer((req, res) => {
    const { url, method } = req;

        req.on("error", (error) => {
            res.statusCode = 400;
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify(error))
            res.end()
        }).on("end", () => {
            console.log("Successful Request");
            const logData = `Method: ${method}, Url: ${url}, Status Code: ${res.StatusCode}, Date: ${new Date().toISOSString()},`;
            
            fs.appendFile("requests.txt", logData, (err) => {
                if (err) {
                    console.error(err);
                }
                console.log("Request logged:", logData);
            })
        });

        res.on("error", (err) => {
            res.writeHead(500, { "Content-Type": "application/json" })
            res.write(JSON.stringify(err));
            res.end();
        })
    
        if (url == "/") {
            fs.readFile("home.html", function (err, data) {
               if (err) {
                console.error(err);
               }
                res.statusCode = 200;
                res.setHeader("Content-Type", "text/html");
                res.write(data);
                res.end();
            })
        } else if (url == "/about"){
            fs.readFile("about.html", function (err, data) {
                if (err) {
                 console.error(err);
                }
                 res.statusCode = 200;
                 res.setHeader("Content-Type", "text/html");
                 res.write(data);
                 res.end();
             })
        } else if (url == "/datalog") {
            res.writeHead = (200, { "Content-Type": "application/json"});
            res.write(JSON.stringify(dataLog));
        } else {
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/html");
            res.write("<h1> 404 Page Not Found</h1> Try <a href='/>Home</a>");
        };
    
    }).listen(8080, () => {
  console.log("Server listening at http://localhost:8080...");
});
