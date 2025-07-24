import express from "express";
import { PORT } from "./env.js";
import path from "path";

const app = express();

// app.get("/", (req, res) => {
//   const homePagePath = path.join(import.meta.dirname, "public", "index.html");
//   res.sendFile(homePagePath);
// });

// const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
// const json = await response.json();
// console.log(json);

console.log(import.meta.dirname);
console.log(import.meta.filename);

const staticPath = path.join(import.meta.dirname, "public");
console.log(staticPath);

app.use(express.static(staticPath));

app.listen(PORT, () => {
  console.log("Server starting on port 3000");
});

// console.log(__dirname);
// console.log(__filename);

// console.log(import.meta.dirname);

// const __filename = new URL(import.meta.url).pathname;

// console.log(__filename);

// app.get("/", (req, res) => res.send("<h1>Hello world</h1>"));

// app.get("/about", (req, res) => res.send("<h1>Hello About Page</h1>"));

// app.get("/contact", (req, res) => {
//   return res.send(`<div class="container">
//       <h1>URL Shortener</h1>
//       <from id="shorten-form">
//         <div>
//           <label for="url">Enter URL: </label>
//           <input type="url" name="url" id="url" required />
//         </div>

//         <div class="short">
//           <label for="shortCode">Enter shortCode:</label>

//           <input type="text" name="shortCode" id="shortCode" required />
//         </div>

//         <button class="shorten-btn" type="submit">Shorten</button>
//       </from>

//       <h2>Shortened URLs</h2>

//       <ul id="shortened-urls"></ul>
//     </div>
// `);
// });

// const PORT = process.env.PORT || 3000;
