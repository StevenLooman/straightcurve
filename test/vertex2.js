var sc = require('../');
var assert = require('assert');

describe('Vertex2', function() {
    describe('Constructor', function() {
        it('should construct', function() {
            var point = new sc.Vertex2(0, 0);
        });
    });

    describe('#distance()', function() {
        it('should be able to correctly give the distance from a Vertex2 to another Vertex2', function() {
            var point1 = new sc.Vertex2(0, 0);
            var point2 = new sc.Vertex2(10, 0);

            var result = point1.distance(point2);

            assert.equal(result, 10);
        });

        it('should be able to correctly give the distance from a Vertex2 to another Line2', function() {
            var point = new sc.Vertex2(0, 0);
            var line = new sc.Line2(new sc.Vertex2(10, 0), new sc.Vertex2(10, 10));

            var result = point.distance(line);

            assert.equal(result, 10);
        });

        it('should be able to correctly give the distance from a Vertex2 to another Circle2', function() {
            var point = new sc.Vertex2(0, 0);
            var circle = new sc.Circle2(new sc.Vertex2(10, 0), 5);

            var result = point.distance(circle);

            assert.equal(result, 5);
        });
    });

    describe('#add()', function() {
        it('should be able to correctly add a a Vector2 to a Vertex2', function() {
            var point = new sc.Vertex2(0, 0);
            var vector = new sc.Vector2(10, 10);

            var result = point.add(vector);

            assert.deepEqual(result, { x: 10, y: 10 });
        });
    });

    describe('#sub()', function() {
        it('should be able to correctly subtract a a Vector2 to a Vertex2', function() {
            var point = new sc.Vertex2(0, 0);
            var vector = new sc.Vector2(10, 10);

            var result = point.sub(vector);

            assert.deepEqual(result, { x: -10, y: -10 });
        });
    });
});
