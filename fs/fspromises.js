const fs = require("fs");
const path = require("path");

const fileName = "fsPromises.txt";
const filePath = path.join(__dirname, fileName);

// const file = __dirname;

// fs.promises
//   .readdir(file)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

const filePath1 = __dirname;

fs.promises
  .readdir(filePath1)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
