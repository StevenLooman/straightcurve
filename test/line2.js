var sc = require('../');
var assert = require('assert');

describe('Line2', function() {
    describe('Constructor', function() {
        it('should construct, horizontal', function() {
            var line = new sc.Line2(new sc.Vertex2(0, 0), new sc.Vertex2(10, 0));
        });

        it('should construct, vertical', function() {
            var line = new sc.Line2(new sc.Vertex2(0, 0), new sc.Vertex2(0, 10));
        });
    });

    describe('#intersect()', function() {
        it('should be able to correctly get the intersection point of two Line2s', function() {
            var line1 = new sc.Line2(new sc.Vertex2(0, 0), new sc.Vertex2(10, 0));
            var line2 = new sc.Line2(new sc.Vertex2(5, 0), new sc.Vertex2(5, 10));

            var result = line1.intersect(line2);

            assert.deepEqual(result, { x: 5, y: 0 });
        });
    });

    describe('#angle()', function() {
        it('should be able to correctly get the angle between two Line2s', function() {
            var line1 = new sc.Line2(new sc.Vertex2(0, 0), new sc.Vertex2(10, 0));
            var line2 = new sc.Line2(new sc.Vertex2(5, 0), new sc.Vertex2(5, 10));

            var result = line1.angle(line2);

            assert.deepEqual(result, Math.PI / 2);
        });
    });

    describe('#angle()', function() {
        it('should be able to correctly get the signed angle between two Line2s', function() {
            var line1 = new sc.Line2(new sc.Vertex2(0, 0), new sc.Vertex2(10, 0));
            var line2 = new sc.Line2(new sc.Vertex2(5, 0), new sc.Vertex2(5, 10));

            var result = line1.signedAngle(line2);

            assert.deepEqual(result, Math.PI / 2);
        });
    });

    describe('#perp()', function() {
        it('should be able to correctly get the perpendicular Line2 of a Line2', function() {
            var line = new sc.Line2(new sc.Vertex2(0, 0), new sc.Vertex2(10, 0));

            var result = line.perp(new sc.Vertex2(0, 0));

            assert.deepEqual(result, { p0: { x: 0, y: 0 }, p1: { x: 0, y: 1 } });
        });
    });

    describe('#distnce()', function() {
        it('should be able to correctly get the distance between a Line2 and a Vertex2', function() {
            var line = new sc.Line2(new sc.Vertex2(0, 0), new sc.Vertex2(10, 0));
            var point = new sc.Vertex2(5, 5);

            var result = line.distance(point);

            assert.equal(result, 5);
        });

        it('should be able to correctly get the distance between a Line2 and a Line2', function() {
            var line1 = new sc.Line2(new sc.Vertex2(0, 0), new sc.Vertex2(10, 0));
            var line2 = new sc.Line2(new sc.Vertex2(5, 0), new sc.Vertex2(15, 0));

            var result = line1.distance(line2);

            //assert.equal(result, 5);
        });

        it('should be able to correctly get the distance between a Line2 and a Circle2', function() {
            var line = new sc.Line2(new sc.Vertex2(0, 0), new sc.Vertex2(10, 0));
            var circle = new sc.Circle2(new sc.Vertex2(0, 10), 5);

            var result = line.distance(circle);

            assert.equal(result, 5);
        });
    });
});
