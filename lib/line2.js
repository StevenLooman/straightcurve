"use strict";


var Vertex2 = require('./vertex2');
var Vector2 = require('./vector2');
var Circle2 = require('./circle2');


function Line2(p0, p1) {
    this.p0 = p0;
    this.p1 = p1;
}

Line2.prototype.slope = function() {
    return (this.p1.y - this.p0.y) / (this.p1.x - this.p0.x);
};

Line2.prototype.toAbc = function() {
    var a = this.p1.y - this.p0.y;
    var b = this.p0.x - this.p1.x;
    var c = a * this.p0.x + b * this.p0.y;

    return {
        a: a,
        b: b,
        c: c
    };
};

Line2.prototype.intersect = function(other) {
    var i1 = this.toAbc();
    var i2 = other.toAbc();

    var denominator = i1.a * i2.b - i2.a * i1.b;
    if (denominator !== 0) {
        return new Vertex2 ((i2.b * i1.c - i1.b * i2.c) / denominator, (i1.a * i2.c - i2.a * i1.c) / denominator);
    }

    return null;
};

Line2.prototype.angle = function(other) {
    var a = this.getDirection(); // Vector2
    var b = other.getDirection(); // Vector2

    return a.angle(b);
};

Line2.prototype.signedAngle = function(other) {
    var a = this.getDirection(); // Vector2
    var b = other.getDirection(); // Vector2

    return a.signedAngle(b);
};

Line2.prototype.getDirection = function() {
    var d = this.p1.sub(this.p0); // Vector2
    return d.normalized();
};

Line2.prototype.perp = function(point) {
    var p0;
    if (point) {
        p0 = point;
    } else {
        // take: p0 + (p1 - p0) / 2
        var half = this.p1.sub(this.p0).div(2); // Vector2
        p0 = this.p0.add(half);
    }

    if (this.distance(p0) !== 0) {
        throw new Error('point not on line');
    }

    var v = this.getDirection(); // Vector2
    v = v.perp();
    var p1 = p0.add(v);

    return new Line2(p0, p1);
};


module.exports = Line2;
