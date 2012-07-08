"use strict";

function Vector2(x, y) {
    this.x = x;
    this.y = y;
}

Vector2.prototype.normalized = function() {
    var v = new Vector2(this.x, this.y);
    v.normalize();
    return v;
};

Vector2.prototype.normalize = function() {
    var length = this.length();

    this.x /= length;
    this.y /= length;
};

Vector2.prototype.dot = function(vector) {
    return this.x * vector.x + this.y * vector.y;
};

Vector2.prototype.cross = function(vector) {
    return this.x * vector.y - this.y * vector.x;
};

Vector2.prototype.angle = function(vector) {
    // The angle between to vectors can be calculated with the formula:
    // a.b = |a||b|cos θ
    //
    // Rewriting gives:
    //  a.b  = cos θ
    // ------
    // |a||b|
    var theta = this.dot(vector) / (this.length() * vector.length()); // number
    return Math.acos(theta);
};

Vector2.prototype.signedAngle = function(vector) {
    return Math.atan2(this.perp().dot(vector), this.dot(vector));
};

Vector2.prototype.length = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
};

Vector2.prototype.setLength = function(length) {
    this.normalize();
    this.x *= length;
    this.y *= length;
};

Vector2.prototype.perp = function() {
    return new Vector2(-this.y, this.x);
};

Vector2.prototype.add = function(other) {
    return new Vector2(this.x + other.x, this.y + other.y);
};

Vector2.prototype.sub = function(other) {
    return new Vector2(this.x - other.x, this.y - other.y);
};

Vector2.prototype.mult = function(value) {
    return new Vector2(this.x * value, this.y * value);
};

Vector2.prototype.div = function(value) {
    return new Vector2(this.x / value, this.y / value);
};


module.exports = Vector2;
