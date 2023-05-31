const fs = require("fs");

fs.unlink("./index.html", (err) => {
    if (err) {
        return console.error(err);
    }
    console.log("Successfully deleted file.");
});