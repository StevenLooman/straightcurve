var sc = require('../');
var assert = require('assert');

describe('Arc2', function() {
    describe('Constructor', function() {
        it('should construct', function() {
            var arc = new sc.Arc2(new sc.Vertex2(0, 0), new sc.Vertex2(1, 1), new sc.Vertex2(2, 0));
        });
    });

    describe('#center()', function() {
        it('should give the correct center of an Arc2', function() {
            var arc = new sc.Arc2(new sc.Vertex2(0, 0), new sc.Vertex2(1, 1), new sc.Vertex2(2, 0));

            var result = arc.center();

            assert.deepEqual(result, new sc.Vertex2(1, 0));
        });
    });

    describe('#radius()', function() {
        it('should give the correct radius of an Arc2', function() {
            var arc = new sc.Arc2(new sc.Vertex2(0, 0), new sc.Vertex2(1, 1), new sc.Vertex2(2, 0));

            var result = arc.radius();

            assert.equal(result, 1);
        });
    });

    describe('#radius()', function() {
        it('should be able to segmentize an Arc2', function() {
            var arc = new sc.Arc2(new sc.Vertex2(0, 0), new sc.Vertex2(1, 1), new sc.Vertex2(2, 0));

            var result = arc.segmentize(3);

            assert.equal(Math.round(result[0].p0.x * 10) / 10, 0.0); assert.equal(Math.round(result[0].p0.y * 10) / 10, 0.0);
            assert.equal(Math.round(result[0].p1.x * 10) / 10, 0.5); assert.equal(Math.round(result[0].p1.y * 10) / 10, 0.9);

            assert.equal(Math.round(result[1].p0.x * 10) / 10, 0.5); assert.equal(Math.round(result[1].p0.y * 10) / 10, 0.9);
            assert.equal(Math.round(result[1].p1.x * 10) / 10, 1.5); assert.equal(Math.round(result[1].p1.y * 10) / 10, 0.9);

            assert.equal(Math.round(result[2].p0.x * 10) / 10, 1.5); assert.equal(Math.round(result[2].p0.y * 10) / 10, 0.9);
            assert.equal(Math.round(result[2].p1.x * 10) / 10, 2.0); assert.equal(Math.round(result[2].p1.y * 10) / 10, 0.0);
        });

        it('should be able to segmentize an Arc2, reversed', function() {
            var arc = new sc.Arc2(new sc.Vertex2(2, 0), new sc.Vertex2(1, 1), new sc.Vertex2(0, 0));

            var result = arc.segmentize(3);

            assert.equal(Math.round(result[0].p0.x * 10) / 10, 2.0); assert.equal(Math.round(result[0].p0.y * 10) / 10, 0.0);
            assert.equal(Math.round(result[0].p1.x * 10) / 10, 1.5); assert.equal(Math.round(result[0].p1.y * 10) / 10, 0.9);

            assert.equal(Math.round(result[1].p0.x * 10) / 10, 1.5); assert.equal(Math.round(result[1].p0.y * 10) / 10, 0.9);
            assert.equal(Math.round(result[1].p1.x * 10) / 10, 0.5); assert.equal(Math.round(result[1].p1.y * 10) / 10, 0.9);

            assert.equal(Math.round(result[2].p0.x * 10) / 10, 0.5); assert.equal(Math.round(result[2].p0.y * 10) / 10, 0.9);
            assert.equal(Math.round(result[2].p1.x * 10) / 10, 0.0); assert.equal(Math.round(result[2].p1.y * 10) / 10, 0.0);
        });

        it('should be able to segmentize an Arc2, case 2', function() {
            var i;
            var arc = new sc.Arc2(new sc.Vertex2(40, 97), new sc.Vertex2(34, 93), new sc.Vertex2(33, 86));

            var result = arc.segmentize(25);

            // ensure all y(n - 1) > y(n)
            var lastY = result[0].p0.y;
            for (i = 1; i < result.length; ++i) {
                var y = result[i].p0.y;

                assert.equal(true, lastY > y);

                lastY = y;
            }
        });
    });
});
