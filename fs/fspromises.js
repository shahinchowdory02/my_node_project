const fs = require("fs/promises");
const path = require("path");

const fileName = "fsPromises.txt";
const filePath = path.join(__dirname, fileName);

// const file = __dirname;

// fs.promises
//   .readdir(file)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// const filePath1 = __dirname;

// fs.promises
//   .readdir(filePath1)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// fs.promises
//   .readFile(filePath, "utf-8")
//   .then((data) => console.log(data))
//   .catch((err) => console.error("Error reading file:", err));

// fs.promises
//   .appendFile(filePath, "\nsthis is the updated data", "utf-8")
//   .then(console.log("File created successfully"))
//   .catch((err) => console.log(err));

// fs.promises
//   .unlink(filePath)
//   .then(console.log("File Deleted successfully"))
//   .catch((err) => console.error("Error deleting file:", err));

fs.writeFile(filePath, "this is the initial data", "utf-8")
  .then(console.log("File created successfully"))
  .catch((err) => console.log(err));
