function setup(){
    createCanvas(600,400);
    
}

function Bubble(x,y,col){

  this.x =x;
  this.y =y
  }
  

var Bubble = new Array()
bubbles.push(new bubble(100,100,1,2,'red',20));   
bubbles.push(new bubble(200,100,2,-1,'blue',20));   


function draw (){
    
    for (var i=0; i<bubbles.length; i++){
    noStroke();
    bubbles[i].move();
    fill(bubbles[i].color);
    ellipse(bubbles[i].x,bubbles[i].y,bubbles[i].r,bubbles[i].r);
    }
}