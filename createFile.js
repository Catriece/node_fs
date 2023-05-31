const fs = require("fs");

fs.readFile("./index.html", (err, data) => {
    if (err) return console.error(err);

    console.log(data.toString())
})