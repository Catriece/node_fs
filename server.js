const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    const { url } = req;

        req.on("error", (error) => {
            res.statusCode = 400;
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify(error));
            res.end()
        });
    
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
        } else {
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/html");
            res.write("<h1> 404 Page Not Found</h1> Try <a href='/>Home</a>");
        };
    
        return res.end();
    }).listen(8080, () => {
  console.log("Server listening at http://localhost:8080...");
});
