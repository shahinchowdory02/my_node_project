import express from "express";

const app = express();

app.get("/", (req, res) => res.send("<h1>Hello world</h1>"));

app.get("/", (req, res) => res.send("<h1>Hello world</h1>"));

// app.get("/contract", (req, res) => res.send("<h1>Hello this is Contrant Part</h1>"));


app.get("/contact", (req, res)=> {
  res.send("<h1> Hello About Page! Sorry This is Contract Page</h1>");
})





// app.get("/contact", (req, res) => { 
// return res.send(`<div class="container">
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
//     </div>);`

// });

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
