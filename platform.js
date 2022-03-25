Platform.list = [];
let platformPadding = 20;

function Platform(x, y, width, height) {
    this.pos = new Vector(x, y);
    this.size = new Vector(width, height);
    this.respawn = true;
    this.img = backgrounds.cloud;
    this.update = function () {
        this.pos.y += cameraSpeed;
        if (this.pos.y > window.innerHeight) {
            this.remove();
            if (this.respawn) addPlatform();
            return false;
        }
        if (this.respawn) {
            image(this.img, this.pos.x - platformPadding, this.pos.y - platformPadding * 1.3, this.size.x + platformPadding, this.size.y + platformPadding * 3);
        }
        else rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
        return true;
    }
    this.remove = function () {
        Platform.list.splice(Platform.list.indexOf(this), 1);
    }
    Platform.list.push(this);
}

function addPlatform(y) {
    let posY = y || -20;
    let width = random(100, 300);
    let a = new Platform(random(300, window.innerWidth - 300) - width / 2, posY, width, 20);
    if (cameraPos <= 400) {
        //a.img = backgrounds.ground;
    }
    if (cameraPos >= 1300) {
        a.img = backgrounds.rocket;
    }
    return a;
}
