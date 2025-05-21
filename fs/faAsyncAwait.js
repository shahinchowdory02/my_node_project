const fs = require("fs/promises");
const path = require("path");

const fileName = "asyncFile.txt";
const filePath = path.join(__dirname, fileName);

// const filePath1 = __dirname;

// fs.promises.readdir(filePath1).then((data) => console.log(data));
// caches((err) => console.log(err));

// const readFolder = async () => {
//   try {
//     const res = await fs.promises.readdir(filePath1);
//     console.log(res);
//   } catch (error) {
//     console.error(error);
//   }
// };

// readFolder();

// const writeFileExample = async () => {
//   try {
//     await fs.writeFile(filePath, "This is the initial Data", "utf-8");
//     console.log("File created successfully!");
//   } catch (error) {
//     console.error(error);
//   }
// };

// writeFileExample();

// const readFileExample = async () => {
//   try {
//     const data = await fs.readFile(filePath, "utf-8");
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// };

// readFileExample();

// const appendFileExample = async () => {
//   try {
//     await fs.appendFile(filePath, "\nThis is the updated Data", "utf-8");
//     console.log("File updated successfully!");
//   } catch (error) {
//     console.error(error);
//   }
// };

// appendFileExample();

const deleteFileExample = async () => {
  try {
    await fs.unlink(filePath);
    console.log("File deleted successfully!");
  } catch (error) {
    console.error("Error deleting file ", error);
  }
};

deleteFileExample();
