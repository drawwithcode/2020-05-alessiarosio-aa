let socket = io();
socket.on("connect", newConnection);
socket.on("mouseBroadcast", drawOther);

function newConnection() {
  console.log("id: " + socket.id);
}

function drawOther(data) {
  console.log(data);
  var myWord = "Hey :)";
  fill("white");
  textAlign(CENTER);
  textSize(random(12, 17));
  text(myWord, data.x, data.y);
}

function preload(){
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  background("yellow");
}

function draw() {
}

function mouseMoved() {
  push();
  var myWord = "Hello!";
  fill("black");
  textAlign(CENTER);
  textSize(random(12, 17));
  text(myWord, mouseX, mouseY);
  pop();

  let message = {
    x: mouseX,
    y: mouseY
  };

  socket.emit("mouse", message);
}
