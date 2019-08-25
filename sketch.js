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
	}
}

function mousePressed(){
	let r = random(10, 40);
	b = new Bubble(mouseX, mouseY, r);
	bubbles.push(b);
}