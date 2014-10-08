
boolean bover = false;
boolean locked = false;

float bdifx = 0.0; 
float bdify = 0.0; 

var cols = 5;
var rows = 5;
var unusedColor = 150;
var occupiedColor = #FF0000;
int bs = 20;

var s1 = { r: 1, c: 2 , name:"A" }

var items = [s1];
var drawn = false;

var boxY = 1;
var boxX = 2;

void setup() 
{
  rectMode(CORNER);  
  size(200, 200);
 
  
}

function isHover(){
  var xUpper = (boxX + 1) * bs;  
  var yUpper = (boxY+ 1) * bs;  
  var withinX = mouseX >= boxX*bs && mouseX < xUpper;
  var withinY = mouseY >= boxY*bs && mouseY < yUpper;
  if(withinX && withinY){	
	console.log('hover');
	return true;
  }
  return false;
}

void draw() 
{ 
  background(0);
  stroke(400);  
  var startx = 0;
  var starty = 0;
    
  for(var r =0; r < rows; r++){  
	  for(var c =0; c < cols; c++){  	    
		for(var i = 0; i < items.length; i++){		
			if(items[i].r == r && items[i].c == c){
			//console.log("Name: " + items[i].name + " R: "+ items[i].r + " C: "+ items[i].c);
				fill(occupiedColor);
			} else {
				fill(unusedColor);
			}
		}
		var bx = startx + (bs * c);
		var by = starty + (bs * r);		
		rect(bx, by, bs, bs);		
	  }
  }
  
  if(locked){
		fill(occupiedColor);
		rect(centerCoord(mouseX), centerCoord(mouseY), bs, bs);		
	} 
}

function centerCoord(m){
	return m - (bs/2);
}

void mousePressed(){
	if(isHover()){
		locked = true;
	}
}

void mouseReleased(){
	locked = false;
}

void mouseDragged(){
	
}