function setup() {
createCanvas(600, 600);

background(161, 161, 161);
}


function draw() {
//clothes
fill(77, 77, 77);
square(200, 500, 200, 20);
fill(48, 48, 48);
triangle(300, 600, 350, 500, 400, 500);
fill(48, 48, 48);
triangle(300, 600, 250, 500, 200, 500);
//right arm
fill(77, 77, 77);
rect(390, 500, 60, 200, 20);
//left arm
fill(77, 77, 77);
rect(150, 500, 60, 200, 20);
//hair
fill(0)
square(210, 320, 180, 20);
//neck
fill(227, 191, 161);
rect(265, 480, 70, 20);
//head
fill(227, 191, 161);
ellipse(300, 390, 200, 200);
//glasses
fill(201, 201, 201)
rect(215, 350, 80, 55);
fill(201, 201, 201)
rect(305, 350, 80, 55);
//hair
fill(0)
ellipse(300, 310, 200, 40);
rect(190, 310, 60, 130, 20);
rect(350, 310, 60, 130, 20);
rect(300, 310, 60, 80, 20);
}
