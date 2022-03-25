let colliderWidth = 50;
let colliderHeight = 10;
let walkSpeed = 7;

function Player(x, y) {
    this.pos = new Vector(x, y);
    this.vel = new Vector(0, -10);
    this.size = new Vector(100, 120);
    this.input = new Vector(0, 0);
    this.animState = "stand";
    this.walkingTime = 0;
    this.collision = false;
    this.jumpPower = 0;
    this.xScale = 1;
    this.collider = {
        pos: new Vector(this.pos.x, this.pos.y + this.size.y - 3),
        size: new Vector(this.size.x, 3)
    }
    this.update = function () {
        this.collider = {
            pos: new Vector(this.pos.x + this.size.x / 2 - colliderWidth / 2, this.pos.y + this.size.y - colliderHeight),
            size: new Vector(colliderWidth, colliderHeight)
        }

        if (this.input.x < 0) {
            this.vel.x = -walkSpeed;
            this.xScale = 1;
        }
        if (this.input.x > 0) {
            this.vel.x = walkSpeed;
            this.xScale = -1;
        }
        if (this.input.x == 0) {
            this.walkingTime = 0;
            this.vel.x *= 0.85;
            this.animState = images.human.stand;
        }
        this.collision = false;
        Platform.list.forEach(p => {
            if (detectCollision(this.collider, p)) this.collision = true;
        });


        if (this.input.x != 0) {
            if (this.collision) {
                let walkAnim = images.human.walk;
                this.walkingTime++;
                let ticksPerFrame = 10;
                for (let i = 0; i < walkAnim.length; i++) {
                    if (this.walkingTime >= ticksPerFrame * i) this.animState = walkAnim[i];
                }
                if (this.walkingTime > walkAnim.length * ticksPerFrame) this.walkingTime = 0;
            }
        }
        if (!this.collision) {
            if(this.jumpPower > 0.8) this.animState = images.human.jump[0];
            else this.animState = images.human.jump[1];
        }
        //console.log(this.vel, this.pos);
        //this.vel = this.vel.sub(this.vel.normalise().scale(0.1));
        this.jumpPower = Math.max(0, this.jumpPower - .05);
        if (this.jumpPower > 0) {
            //this.vel.y -= this.jumpPower * 2.2;
        }
        this.vel.y += gravity * 1 - this.jumpPower;
        if (this.collision) this.vel.y = Math.min(this.vel.y, 0);
        this.vel = this.vel.scale(0.999);
        this.pos = this.pos.add(this.vel);
        this.pos.y += cameraSpeed;
        //rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
        push();
        scale(this.xScale, 1)
        if (this.collision) fill(255, 0, 0);
        image(this.animState, this.pos.x * this.xScale - this.size.x * (1 - this.xScale) / 2, this.pos.y, this.size.x, this.size.y);
        //rect(this.collider.pos.x, this.collider.pos.y, this.collider.size.x, this.collider.size.y);
        pop();
    }
}

function detectCollision(a, b) {
    if (a.pos.x < b.pos.x + b.size.x &&
        a.pos.x + a.size.x > b.pos.x &&
        a.pos.y < b.pos.y + b.size.y &&
        a.pos.y + a.size.y > b.pos.y) {
        return true;
    }
    else return false;
}