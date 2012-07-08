var sc = require('../');
var assert = require('assert');

describe('Circle2', function() {
    describe('Constructor', function() {
        it('should construct', function() {
            var circle = new sc.Circle2(new sc.Vertex2(0, 0), 5);
        });
    });

    describe('#distance()', function() {
        it('should correctly get the distance between a Circle2 and a Point2', function() {
            var circle = new sc.Circle2(new sc.Vertex2(0, 0), 5);
            var point = new sc.Vertex2(10, 0);

            var result = circle.distance(point);

            assert.equal(result, 5);
        });

        it('should correctly get the distance between a Circle2 and a Line2', function() {
            var circle = new sc.Circle2(new sc.Vertex2(0, 0), 5);
            var line = new sc.Line2(new sc.Vertex2(10, 0), new sc.Vertex2(10, 10));

            var result = circle.distance(line);

            assert.equal(result, 5);
        });

        it('should correctly get the distance between a Circle2 and a Circle2', function() {
            var circle1 = new sc.Circle2(new sc.Vertex2(0, 0), 5);
            var circle2 = new sc.Circle2(new sc.Vertex2(15, 0), 5);

            var result = circle1.distance(circle2);

            assert.equal(result, 5);
        });
    });
});
