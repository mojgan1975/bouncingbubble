function setup(){
   createCanvas(640,360); 
   
    
}

function draw(){
    background(150,150,150);
    ellipseMode(CENTER);
    rectMode(CENTER);
    
// Body
fill(255,0,0);
rect(240,145,20,100);
// Head 
fill(200,200,0);
ellipse(100,100,20,20);
// eyes
fill(150,150,120);
ellipse(100,100,5,5);

// legs
fill(120,120,120);
line(100,100,30,30);




