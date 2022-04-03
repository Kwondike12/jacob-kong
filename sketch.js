let penSize = 1;
let penState = 0;

function setup() {
  createCanvas(600, 600);
  background(255,250,205);
}

function setup() {
  createCanvas(700, 600);
  textSize(40); text('welcome human! press c', 10, 30);
}

function draw() {
  if (mouseIsPressed) {
    if (penState == 0) {
	    line(mouseX, mouseY, pmouseX, pmouseY);
    } 

    if (penState == 1) {
	    ellipse(mouseX, mouseY, 10, 10);
    }
    
    if (penState == 2) {
      line(mouseX-5, mouseY-5, mouseX+5, mouseY+5);
      line(mouseX+5, mouseY-5, mouseX-5, mouseY+5);
    }  
      
    if (penState == 3) {
	    ellipse(mouseX, mouseY, 40, 5)
    }
  }
}

function keyTyped() {
  if (key == 'c') {
    background(255,250,205);
  }

  if (key == 'r') {
    stroke(255, 0, 0);
    penState = 1;
  }

  if (key == 'b') {
  //custom brush
    noStroke()
  penState = 3;
  }
  
  if (key == 'x') {
    // x style pen
    penState = 1;
  }
  
  if (key == '6') {
    // Draw a rectangle at location (30, 20) with a width and height of 55.
    rect(200, 200, 55, 55); 
  }else if (key == '7') {
    // connected lines
    triangle(30, 75, 58, 20, 86, 75);;
  }
}
