"use strict";


var Vertex2 = require('./vertex2');
var Vector2 = require('./vector2');
var Line2 = require('./line2');


function Arc2(p0, p1, p2) {
    this.p0 = p0;
    this.p1 = p1;
    this.p2 = p2;
}

Arc2.prototype.center = function() {
    var l1 = new Line2(this.p0, this.p1);
    var l2 = new Line2(this.p1, this.p2);

    var lp1 = l1.perp();
    var lp2 = l2.perp();

    return lp1.intersect(lp2);
};

Arc2.prototype.radius = function() {
    var center = this.center();

    return center.distance(this.p0);
};

Arc2.prototype.segmentize = function(segmentCount) {
    var center = this.center();
    var radius = this.radius();

    var p2Side = (this.p1.x - this.p0.x) * (this.p2.y - this.p0.y) - (this.p2.x - this.p0.x) * (this.p1.y - this.p0.y);
    var clockwise = true;
    if (p2Side < 0) {
        clockwise = true;
    } else if (p2Side > 1) {
        clockwise = false;
    } else {
        // help?
        return;
    }

    var a1 = Math.atan2(this.p0.y - center.y, this.p0.x - center.x); // start angle
    var a2 = Math.atan2(this.p1.y - center.y, this.p1.x - center.x);
    var a3 = Math.atan2(this.p2.y - center.y, this.p2.x - center.x); // end angle

    var d = 0;
    if (clockwise) {
        if (a3 > a1) {
            a3 -= 2 * Math.PI;
        }
        if (a2 > a1) {
            a2 -= 2 * Math.PI;
        }
    } else {
        if (a3 < a1) {
            a3 += 2 * Math.PI;
        }
        if (a2 < a1) {
            a2 += 2 * Math.PI;
        }
    }

    var delta = (a3 - a1) / segmentCount;
    var lastPoint;
    var segments = [];
    for (var s = 0; s < segmentCount + 1; ++s) {
        var angle = a1 + delta * s;

        var point = new Vertex2(
            center.x + radius * Math.cos(angle),
            center.y + radius * Math.sin(angle)
        );

        if (lastPoint) {
            var line = new Line2(lastPoint, point);
            segments.push(line);
        }

        lastPoint = point;
    }

    return segments;
};


module.exports = Arc2;
