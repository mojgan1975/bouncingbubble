var bubbles =[];

function setup(){
 createCanvas(600,400);
 for (var i=0; i<2;i++){
 var x = random(width);
 var y = random(height);
 bubbles.push(new Bubble(x,y));
 }
}

function mousePressed(){
  for(var i=0; i<bubbles.length;i++){
 bubbles[i].move();
 bubbles[i].clicked();
}


function draw(){
 background(0);
 for(var i=0; i<bubbles.length;i++){
 bubbles[i].move();
 bubbles[i].clicked();
 
}
if (bubbles.length>50) {
 bubbles.splice(0,1);
}
}


function Bubble(x,y){
 this.x = x;
 this.y = y;
 
 this.display = function(){
  stroke(255);
  fill(255,0,150,50);
  ellipse(this.x,this.y,48,48);

 }
 
 this.clicked = function(){
  
  
 }
 this.move = function(){
   this.x = this.x + random(-1,1);
   this.y = this.y + random(-1,1);
  
 }
}
}