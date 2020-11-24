let socket = io();
socket.on("connect", newConnection);
socket.on("mouseBroadcast", drawOther);

function newConnection() {
  console.log("id: " + socket.id);
}

function drawOther(data) {
  console.log(data);
  ellipse(data.x, data.y, 20);
}

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  background("yellow");
}

function draw() {
  // put drawing code here
}

function mouseMoved() {
  ellipse(mouseX, mouseY, 15);

  let message = {
    x: mouseX,
    y: mouseY
  };

  socket.emit("mouse", message);
}
