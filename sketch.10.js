var spot = {
    x:100,
    y:50
    
};   
   var col = {   
    r:255,
    g:0,
    b:0
};

function setup(){
    createCanvas(600,400);
    background(0);
}

function draw (){
    fill(col.r,col.g,col.b);
    ellipse(spot.x,spot.y,24,24);
}
