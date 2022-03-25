
function Vector(x, y) {
    this.x = x;
    this.y = y;
    this.add = function (b) {
        return new Vector(this.x + b.x, this.y + b.y);
    }
    this.sub = function (b) {
        return new Vector(this.x - b.x, this.y - b.y);
    }
    this.scale = function (b) {
        return new Vector(this.x * b, this.y * b);
    }
    this.magnitude = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
    this.normalise = function () {
        let mag = this.magnitude();
        if (mag == 0) return Vector.zero()
        else return this.scale(1 / mag);
    }
}
Vector.zero = function () {
    return new Vector(0, 0);
}
Vector.uniform = function (x) {
    return new Vector(x, x);
}
