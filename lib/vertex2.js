"use strict";

var Vector2 = require('./vector2');


function Vertex2(x, y) {
    this.x = x;
    this.y = y;
};

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
