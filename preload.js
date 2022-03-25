
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
    backgrounds.ground = loadImage("images/bg/ground.png");
    backgrounds.space = loadImage("images/bg/space.png");
    backgrounds.cloud = loadImage("images/bg/cloud.png");
    backgrounds.rocket = loadImage("images/bg/rocket.png");
}