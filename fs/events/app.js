const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("greet", (arg) => {
  console.log(`hello ${arg.username}, You are a ${arg.prof}, ri8`);
});

emitter.emit("greet", { username: "Vinod Thapa", prof: "Full Stack Dev" });

// emitter.on("greet", () => {
//   console.log(`hello Vinod Thapa`);
// });

// emitter.emit("greet");
