
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let player1 = new Player(window.innerWidth / 2 - 100, window.innerHeight - 400);
let player2 = new Player(window.innerWidth / 2 + 100, window.innerHeight - 400);
//new Platform(300, window.innerHeight - 200, 200, 10);
//new Platform(600, window.innerHeight - 100, 150, 10);
new Platform(0, window.innerHeight - 300, window.innerWidth, 500).respawn = false;

let images = {
    human: {
        stand:0,
        walk: [],
        jump:[],
    }
};
let backgrounds = {

}

function preload() {
    images.human.stand = loadImage("images/character/human/standing_H.png");
    images.human.walk[0] = loadImage("images/character/human/run1_H.png");
    images.human.walk[1] = loadImage("images/character/human/run2_H.png");
    images.human.walk[2] = loadImage("images/character/human/run3_H.png");
    images.human.walk[3] = loadImage("images/character/human/run4_H.png");
    images.human.jump[0] = loadImage("images/character/human/jump_H.png");
    images.human.jump[1] = loadImage("images/character/human/jump2_H.png");
    backgrounds.mountains =  loadImage("images/bg/mountains.png");
    backgrounds.space = loadImage("images/bg/space.png");
    backgrounds.cloud = loadImage("images/bg/cloud.png");
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight - 1);
    for (let i = window.innerHeight - 400; i >= -400; i -= 100) {
        addPlatform(i);

    }
}

let elapsedTime = 0;

let cameraSpeed = 1;
let cameraPos = 0;

function draw() {
    elapsedTime++;
    //cameraSpeed += 0.003;
    cameraPos += cameraSpeed;
    background(150);
    drawBackground();
    //tint(255, 30, 30);
    player1.update();
    noTint();
    //tint(30, 30, 255);
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
    image(mts, 0, cameraPos / 5, window.innerWidth, mts.height * window.innerWidth / mts.width);
    image(space, 0, cameraPos / 8 - 2000, window.innerWidth, space.height * window.innerWidth / space.width);
}

let jumpPwr = 12;
let gravity = 1;

