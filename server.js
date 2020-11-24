console.log("node");

let express = require("express");
let socket = require("socket.io");
let app = express();
let port = 3000;
let server = app.listen(port);

app.use(express.static("public"));

let io = socket(server);

io.on("connection", newConnection);

function newConnection(socket) {
  console.log("client: " + socket.client.id);

  socket.on("mouse", mouseMessage);

  function mouseMessage(data) {
    console.log(socket.client.id, data);

    socket.broadcast.emit("mouseBroadcast", data);
  }
}
