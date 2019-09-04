let bubbles = [];
let b;
let bubble;


function setup(){
	createCanvas(600,600);

}


function draw(){
	background(0);
	for (bubble of bubbles){
		bubble.show();
		bubble.update();
		if (bubble.contains(mouseX, mouseY)){
			bubble.changeColor('slateblue');
		} else {
			bubble.changeColor(0);
		}
		
		let overlapping = false;
		for (other of bubbles){
			if (bubble !== other && bubble.overlapping(other)){
				overlapping = true;
			} 
		}
		if (overlapping){
			bubble.changeColor('tomato');

		}
	}
}

function mousePressed(){
	let r = random(20, 50);
	b = new Bubble(mouseX, mouseY, r);
	bubbles.push(b);
}

function keyPressed(){
	if (keyCode === 68){
		for (let i = 0; i < bubbles.length; i++){
			if (bubbles[i].contains(mouseX, mouseY)){
				bubbles.splice(i,1);
			}
		}
	}
}