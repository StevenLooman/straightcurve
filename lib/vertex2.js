"use strict";

var Vector2 = require('./vector2');


function Vertex2(x, y) {
    this.x = x;
    this.y = y;
};

Vertex2.prototype.distanceToVertex2 = function(point) {
    var v = point.sub(this); // Vertex2
    return v.length();
}

Vertex2.prototype.distance = function(other) {
    if (other instanceof Vertex2) {
        return this.distanceToVertex2(other);
    } else if (other instanceof Line2) {
        return other.distanceToVertex2(this);
    } else if (other instanceof Circle2) {
        return other.distanceToVertex2(this);
    }

    throw new Error("Type of other is not supported");
}

Vertex2.prototype.add = function(other) {
    if (!(other instanceof Vector2)) {
        throw new Error('Cannot perform operation');
    }

    return new Vertex2(this.x + other.x, this.y + other.y);
}

Vertex2.prototype.sub = function(other) {
    if (other instanceof Vertex2) {
        return new Vector2(this.x - other.x, this.y - other.y);
    } else if (other instanceof Vector2) {
        return new Vertex2(this.x - other.x, this.y - other.y);
    }

    throw new Error('Cannot perform operation');
};


module.exports = Vertex2;
