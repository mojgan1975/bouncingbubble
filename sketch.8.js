var col = 0;


var circle ={
    
};




function setup() {
    createCanvas(600,400);
    
}
   
function draw(){
   
    //( background
    col = map(mouseX,0,600,0,255);
    background(col);
    // ellipse
    fill(250,118,222);
    ellipse(mouseX,200,64,64);

   
}
