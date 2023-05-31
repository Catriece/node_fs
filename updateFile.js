const fs = require("fs");

let updateInfo = "So cool, I updated the create file!";

fs.appendFile("./index.html", updateInfo, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log("Successfully appended to file.");
});