 canvas = document.getElementById("myCanvas");
 ctx = canvas.getContext("2d");


car1Image = "Car1.png";
car2Image = "Car2.png";
backgroundImage = "background.jpg";

 car1Width = 75;
 car1Height = 90;

car2Width = 75;
 car2Height = 90;

 car1X = 10;
 car1Y = 500;

 car2X = 150;
 car2Y = 500;

var keyPressed, backgroundImageTag, car1ImageTag, car2ImageTag;

function add() {
    backgroundImageTag = new Image();
    backgroundImageTag.onload = uploadBackground;
    backgroundImageTag.src = backgroundImage;

    car1ImageTag = new Image();
    car1ImageTag.onload = uploadCar1;
    car1ImageTag.src = car1Image;

    car2ImageTag = new Image();
    car2ImageTag.onload = uploadCar2;
    car2ImageTag.src = car2Image;
}

function uploadBackground() {
    ctx.drawImage(backgroundImageTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1() {
    ctx.drawImage(car1ImageTag, car1X, car1Y, car1Width, car1Height);
}

function uploadCar2() {
    ctx.drawImage(car2ImageTag, car2X, car2Y, car2Width, car2Height);
}

window.addEventListener("keydown", keyDownFn);



function car1Up() {
    if (car1Y >= 0) {
        car1Y = car1Y - 10;
        console.log("When up arrow is pressed,  x = " + car1X+ " | y = " + car1Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car1Down() {
    if (car1Y <= 600) {
        car1Y = car1Y + 10;
        console.log("When down arrow is pressed,  x = " + car1X+ " | y = " + car1Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car1Left() {
    if (car1X >= 0) {
        car1X = car1X - 10;
        console.log("When left arrow is pressed,  x = " + car1X+ " | y = " + car1Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car1Right() {
    if (car1X <= 500) {
        car1X = car1X + 10;
        console.log("When right arrow is pressed,  x = " + car1X+ " | y = " + car1Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}


function car2Up() {
    if (car2Y >= 0) {
        car2Y = car2Y - 10;
        console.log("When up arrow is pressed,  x = " + car2X+ " | y = " + car2Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car2Down() {
    if (car2Y <= 600) {
        car2Y = car2Y + 10;
        console.log("When down arrow is pressed,  x = " + car2X+ " | y = " + car2Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car2Left() {
    if (car2X >= 0) {
        car2X = car2X - 10;
        console.log("When left arrow is pressed,  x = " + car2X+ " | y = " + car2Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car2Right() {
    if (car2X <= 500) {
        car2X = car2X + 10;
        console.log("When right arrow is pressed,  x = " + car2X+ " | y = " + car2Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function keyDownFn(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        car1Up();
        console.log("1 Up");
    }
    if (keyPressed == '40') {
        car1Down();
        console.log("1 Down");
    }
    if (keyPressed == '37') {
        car1Left();
        console.log("1 Left");
    }
    if (keyPressed == '39') {
        car1Right();
        console.log("1 Right");
    }

    if (keyPressed == '87') {
        car2Up();
        console.log("2 Up");
    }
    if (keyPressed == '83') {
        car2Down();
        console.log("2 Down");
    }
    if (keyPressed == '65') {
        car2Left();
        console.log("2 Left");
    }
    if (keyPressed == '68') {
        car2Right();
        console.log("2 Right");
    }
    if(car1X > 700)
{
console.log("Car1 Won");
document.getElementById('gameStatus').innerHTML=("Car1 Won");
}
}



