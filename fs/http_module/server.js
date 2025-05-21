const http = require("http");

//web server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<h1> I am the Shahin in the boy what is the  I live in ketaniging Dhaka  </h1>"
    );
    res.end();
  }

  if (req.url === "/source-code") {
    res.write(
      "An online stopwatch provides a convenient and accessible way to measure time. They are typically simple to use, accurate, and often include features like lap times and alarms. These online tools are useful for various activities, such as timing exercises, experiments, or any situation"
    );
    res.end();
  }

  if (req.url === "/contsract") {
    res.setHeader("Content-Type", "text/plain");
    res.write(
      "These online tools are useful for various activities, such as timing exercises, experiments, or any situation"
    );
    res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
