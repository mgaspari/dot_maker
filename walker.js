let counter = 0
let nums = [0,1]
let lineX = []
let lineY = []
document.addEventListener('DOMContentLoaded', function(){
  // $('body').addEventListener()
})
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  walker = new Walker();
  walker2 = new Walker();
  walker3 = new Walker();
  walker4 = new Walker();

  background(255);

}

function draw() {
  walker.step();
  walker.display();
  walker2.step();
  walker2.display();
  walker3.step();
  walker3.display();
  walker3.step();
  walker3.display();
}

function Walker (){
	this.x = 600;
	this.y = 400;

	this.display = function(){
		stroke(0);
		strokeWeight(10);
		point(this.x,this.y);
	}

	this.step  = function(){

    var disToMove = 12;
		var choice = Math.floor(Math.random() * (4 - 0)) + 0;
		if (choice == 0){
			this.x += disToMove;
		} else if (choice ==1){
				this.x -= disToMove;
		}
			else if(choice ==2){
				this.y += disToMove;
		}
		else {this.y -= disToMove;}
	}
}
