"use strict";


var Vertex2 = require('./vertex2');
var Vector2 = require('./vector2');
var Line2 = require('./line2');


function Arc2(p0, p1, p2) {
    this.p0 = p0;
    this.p1 = p1;
    this.p2 = p2;
};

Arc2.prototype.center = function() {
    var l1 = new Line2(this.p0, this.p1);
    var l2 = new Line2(this.p1, this.p2);

    var lp1 = l1.perp();
    var lp2 = l2.perp();

    return lp1.intersect(lp2);
}


Arc2.prototype.radius = function() {
    var center = this.center();

    return center.distance(this.p0);
}

Arc2.prototype.segmentize = function(segmentCount) {
    var center = this.center();
    var radius = this.radius();

    var a0 = Math.atan2(this.p0.y - center.y, this.p0.x - center.x);
    var a1 = Math.atan2(this.p1.y - center.y, this.p1.x - center.x);
    var a2 = Math.atan2(this.p2.y - center.y, this.p2.x - center.x);

    var d = (a2 - a0) / segmentCount;
    var clockwise = d < 0;

    var segments = [];
    var lastPoint = null;
    for (var angle = a2; clockwise ? angle <= a0 : angle >= a0; angle -= d) {
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
}


module.exports = Arc2;
