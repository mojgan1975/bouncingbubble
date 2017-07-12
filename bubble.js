
function Spot(x,y,Vx,Vy,color,radius){
    this.x=x;
    this.y=y;
    this.Vx=Vx;
    this.Vy=Vy;
    this.color=color;
    this.r=radius;
    
    this.move= function (){
        
        var g=1;
        
        this.Vy+=g;
        
        this.x+=this.Vx;
        this.y+=this.Vy;
        
        var top=0;
        var buttom=400;
        var right=600;
        var left=0;
        
        // Border
        if (this.x>right){
            this.Vx*=-1;
            this.x=right-(this.x-right);
        }
        if (this.y>buttom){
            this.Vy*=-1;
            this.y=buttom-(this.y-buttom);
        }
        if (this.x<left){
            this.Vx*=-1;
            this.x=left+(left-this.x);
        }
        if (this.y<top){
            this.Vy*=-1;
            this.y=top+(top-this.y);
        }
    };
    
}
var spots= new Array();
spots.push(new Spot(100,100,1,2,'red',20));   
spots.push(new Spot(200,100,2,-1,'blue',20));   



function setup(){
    createCanvas(600,400);
    background(0);
}


    

function draw (){
    
    for (var i=0; i<spots.length; i++){
    noStroke();
    spots[i].move();
    fill(spots[i].color);
    ellipse(spots[i].x,spots[i].y,spots[i].r,spots[i].r);
    }
}

