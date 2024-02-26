const Biscotti = require("./lib");
const server = new Biscotti();
const { homePage, food, meet } = require("./content");

server.get("/", (res) => res.send(homePage));
server.get("/food", (res) => res.send(food));
server.get("/meet", (res) => res.send(meet));

module.exports = server.serve();
