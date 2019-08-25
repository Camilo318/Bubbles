class Bubble{

	constructor(x, y, r){
		this.x = x;
		this.y = y;
		this.r = r;
		this.color = 0;

	}

	show(){
		fill(this.color);
		stroke(255);
		strokeWeight(3);
		ellipse(this.x, this.y, this.r*2);
	}

	update(){
		this.x += random(-3,3);
		this.y += random(-3,3);
	}

	contains(mx, my){
		let d = dist(mx, my, this.x, this.y);
		return (d < this.r);
	}

	changeColor(colorcito){
		this.color = colorcito;
	}
}