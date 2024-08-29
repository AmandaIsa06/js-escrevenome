function setup() {
    createCanvas(400, 400);
  background(220);
  }
  
  function draw() {
  
    fill("purple");
  
  //console. log (mouseIsPressed)
    
    if(mouseIsPressed) {
     rect(mouseX, mouseY, 17 ,32);
  
    }
  
  
  }