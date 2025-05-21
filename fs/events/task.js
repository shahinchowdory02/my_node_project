const EventEmitter = require("events");
const emitter = new EventEmitter();

const eventCounters = {
  "user-login": 0,
  "user-logout": 0,
  "user-purchase": 0,
  "profile-update": 0,
};

emitter.on("user-login", (username) => {
  eventCounters["user-login"]++;
  console.log(`${username} logged in!`);
});

emitter.on("user-purchase", (username, item) => {
  eventCounters["user-purchase"]++;
  console.log(`${username} purchased ${item}!`);
});

emitter.on("profile-update", (username, field) => {
  eventCounters["profile-update"]++;
  console.log(`${username} updated their ${field}!`);
});

emitter.on("user-logout", (username) => {
  eventCounters["user-logout"]++;
  console.log(`${username} logged out!`);
});

emitter.on("summary", () => {
  console.log(eventCounters);
});

emitter.emit("user-login", "Thapa");
emitter.emit("user-purchase", "Thapa", "Laptop");
emitter.emit("profile-update", "Thapa", "email");
emitter.emit("user-logout", "Thapa");

emitter.emit("summary");
