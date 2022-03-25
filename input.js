function keyPressed() {
    if (keyCode == UP_ARROW) {
        player2.input.y = -1;
        if (player2.collision) {
            player2.vel.y = -jumpPwr;
            player2.jumpPower = 1;
        }
    }
    if (keyCode == LEFT_ARROW) {
        player2.input.x = -1;
    }
    if (keyCode == RIGHT_ARROW) {
        player2.input.x = 1;
    }
    if (key == "w") {
        player1.input.y = -1;
        if (player1.collision) {
            player1.vel.y = -jumpPwr;
            player1.jumpPower = 1;
        }
    }
    if (key == "a") {
        player1.input.x = -1;
    }
    if (key == "d") {
        player1.input.x = 1;
    }
}
function keyReleased(e) {
    if (e.keyCode == UP_ARROW) {
        player2.input.y = 0;
    }
    if (e.keyCode == LEFT_ARROW && player2.input.x < 0) {
        player2.input.x = 0;
    }
    if (e.keyCode == RIGHT_ARROW && player2.input.x > 0) {
        player2.input.x = 0;
    }
    if (e.key == "w") {
        player1.input.y = 0;
        player1.jumpPower = 0;
    }
    if (e.key == "a" && player1.input.x < 0) {
        player1.input.x = 0;
    }
    if (e.key == "d" && player1.input.x > 0) {
        player1.input.x = 0;
    }
}