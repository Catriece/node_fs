const fs = require("fs");

fs.writeFile("./HelloWorld.txt", "Hello World!", (err, data) => {
  if (err) return console.error(err);

  console.log(data.toString());
});
