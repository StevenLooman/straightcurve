"use strict";


var Vertex2 = require('./vertex2');
var Line2 = require('./line2');
var Circle2 = require('./circle2');


function Distancer() {
}

Distancer.distance = function(other) {
    for (var i = 0; i < Distancer.table.length; ++i) {
        var e = Distancer.table[i];
        if (this instanceof e[0] && other instanceof e[1]) {
            return e[2](this, other);
        } else if (this instanceof e[1] && other instanceof e[0]) {
            return e[2](other, this);
        }
    }
}

Distancer.Vertex2Vertex2 = function(p1, p2) {
    var v = p1.sub(p2); // Vertex2
    return v.length();
}

Distancer.Vertex2Line2 = function(p1, l1) {
    var v = l1.p1.sub(l1.p0); // Vector2
    var w = p1.sub(l1.p0); // Vector2

    var c1 = w.dot(v); // number
    var c2 = v.dot(v); // number
    var b = c1 / c2; // number

    var a = v.mult(b); // Vector2
    var p = l1.p0.add(a); // Vertex2
    var d = p1.sub(p); // Vector2
    return d.length(); // number
}

Distancer.Vertex2Circle2 = function(p1, c1) {
    var distanceToCenter = p1.distance(c1.center);
    if (distanceToCenter <= c1.radius) {
        return 0.0;
    }

    return distanceToCenter - c1.radius;
}

Distancer.Line2Line2 = function (l1, l2) {
    // XXX: TODO
}

Distancer.Line2Circle2 = function(l1, c1) {
    var distanceToCenter = l1.distance(c1.center);
    if (distanceToCenter < c1.radius) {
        return 0.0;
    }

    return distanceToCenter - c1.radius;
}

Distancer.Circle2Circle2 = function(c1, c2) {
    var distanceToCenter = c1.center.distance(c2.center);
    if (distanceToCenter <= (c1.radius + c2.radius)) {
        return 0.0;
    }

    return distanceToCenter - c1.radius - c2.radius;
}

Distancer.table = [
    [ Vertex2, Vertex2, Distancer.Vertex2Vertex2 ],
    [ Vertex2, Line2,   Distancer.Vertex2Line2   ],
    [ Vertex2, Circle2, Distancer.Vertex2Circle2 ],
    [ Line2,   Line2,   Distancer.Line2Line2     ],
    [ Line2,   Circle2, Distancer.Line2Circle2   ],
    [ Circle2, Circle2, Distancer.Circle2Circle2 ]
];


Vertex2.prototype.distance = Distancer.distance;
Line2.prototype.distance = Distancer.distance;
Circle2.prototype.distance = Distancer.distance;


module.exports = Distancer;
