
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let player1 = new Player(window.innerWidth / 2 - 100, window.innerHeight - 400);
let player2 = new Player(window.innerWidth / 2 + 100, window.innerHeight - 400);
//new Platform(300, window.innerHeight - 200, 200, 10);
//new Platform(600, window.innerHeight - 100, 150, 10);
new Platform(0, window.innerHeight - 300, window.innerWidth, 500).respawn = false;


function setup() {
    createCanvas(window.innerWidth, window.innerHeight - 1);
    for (let i = window.innerHeight - 400; i >= -400; i -= 100) {
        addPlatform(i);

    }
}

let elapsedTime = 0;

let cameraSpeed = 1.2;
let cameraPos = 0;

function draw() {
    elapsedTime++;
    cameraSpeed += 0.003;
    cameraPos += cameraSpeed;
    background(150);
    drawBackground();
    tint(255, 30, 30);
    player1.update();
    //noTint();
    tint(30, 30, 255);
    player2.update();
    noTint();
    fill(255, 255, 255);
    for (let i = 0; i < Platform.list.length; i++) {
        const p = Platform.list[i];
        if (!p.update()) {
            i--;
        }
    }
}

function drawBackground() {
    let mts = backgrounds.mountains;
    let space = backgrounds.space;
    image(space, 0, cameraPos / 6 - 600, window.innerWidth, space.height * window.innerWidth / space.width);
    image(mts, 0, cameraPos / 3-200, window.innerWidth, mts.height * window.innerWidth / mts.width);
}

let jumpPwr = 13;
let gravity = 1;

