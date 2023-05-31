const fs = require("fs");

let contacts = [
  {
    fname: "Catriece",
    lname: "Gilbert",
    email: "catrieces@email.com",
    phone: "123-456-7890",
  },
];

fs.writeFile("index2.html", JSON.stringify(contacts), (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Successfully wrote file.");
});