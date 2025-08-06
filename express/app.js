import express from "express";
import { PORT } from "./env.js";
import path from "path";

const app = express();

const staticPath = path.join(import.meta.dirname, "public");

app.use(express.static(staticPath));

app.get("/contact", (req, res) => {
  console.log(req.query);
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log("Server starting on port 3000");
});

// app.get("/contact", (req, res) => {
//   console.log(req.query);
//   res.redirect("/");
// });

// app.use(express.urlencoded({ extended: true }));

// app.post("/contact", (req, res) => {
//   console.log(req.body);
//   res.redirect("/");
// });

// app.get("/", (req, res) => {
//   const homePagePath = path.join(import.meta.dirname, "public", "index.html");
//   res.sendFile(homePagePath);
// });

// const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
// const json = await response.json();
// console.log(json);

// console.log(import.meta.dirname);
// console.log(import.meta.filename);

// app.get("/product", (req, res) => {
//   console.log(req.query);
//   res.send(
//     `<h1> user search for Product ${req.query.page} ${req.query.limit} mobile </h1>`
//   );
// });

// app.use("/public", express.static(staticPath));

// // console.log(staticPath);
// app.get("/profile/:username", (req, res) => {
//   console.log(req.params);
//   res.send(`<h1> My username is ${req.params.username}</h1>`);
// });

// app.get("/profile/:username/article/:slug", (req, res) => {
//   console.log(req.params);

//   const formatedSlug = req.params.slug.replace(/-/g, " ");

//   res.send(`<h1> Article ${req.params.username} by ${formatedSlug}</h1>`);
// });

// // app.use(express.static(staticPath));

// app.listen(PORT, () => {
//   console.log("Server starting on port 3000");
// });

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
