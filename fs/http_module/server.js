const http = require("http");

//web server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("I am the Shahin in the boy");
    res.end();
  }

  if (req.url === "/source-code") {
    res.write("This is my bangla desh");
    res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
