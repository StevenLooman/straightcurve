var sc = require('../');
var assert = require('assert');

describe('Vector2', function() {
    describe('Constructor', function() {
        it('should construct', function() {
            var vector = new sc.Vector2(0, 0);
        });
    });

    describe('#normalize()', function() {
        it('should be able to correctly normalize a Vector2', function() {
            var vector = new sc.Vector2(50, 0);

            vector.normalize();

            assert.deepEqual(vector, { x: 1, y: 0 });
            assert.equal(vector.length(), 1);
        });
    });

    describe('#dot()', function() {
        it('should be able to correctly get the dot product of a Vector2', function() {
            var vector1 = new sc.Vector2( 2, 5);
            var vector2 = new sc.Vector2(-3, 2);

            var result = vector1.dot(vector2);

            assert.equal(result, 4);
        });
    });

    describe('#cross()', function() {
        it('should be able to correctly get the cross product of a Vector2, with another Vector2', function() {
            var vector1 = new sc.Vector2( 0, 10);
            var vector2 = new sc.Vector2(10,  0);

            var result = vector1.cross(vector2);

            assert.equal(result, -100);
        });
    });

    describe('#length()', function() {
        it('should be able to correctly get the length of a Vector2', function() {
            var vector = new sc.Vector2(10, 10);

            var result = vector.length();

            assert.equal(result, 14.142135623730951);
        });
    });

    describe('#setLength()', function() {
        it('should be able to set a new length of a Vector2', function() {
            var vector = new sc.Vector2(1, 0);

            vector.setLength(10);

            assert.deepEqual(vector, { x: 10, y: 0 });
        });
    });

    describe('#angle()', function() {
        it('should be able to correctly get the angle between a Vector2 and a Vector2', function() {
            var vector1 = new sc.Vector2(0, 1);
            var vector2 = new sc.Vector2(1, 0);

            var result = vector1.angle(vector2);

            assert.equal(result, Math.PI / 2);
        });
    });

    describe('#signedAngle()', function() {
        it('should be able to correctly get the signed angle between a Vector2 and a Vector2', function() {
            var vector1 = new sc.Vector2(0, -1);
            var vector2 = new sc.Vector2(1,  0);

            var result = vector1.signedAngle(vector2);

            assert.equal(result, Math.PI / 2);
        });
    });

    describe('#perp()', function() {
        it('should be able to correctly get the perpendicular Vector2 of a Vector2', function() {
            var vector1 = new sc.Vector2(0, -1);

            var result = vector1.perp();

            assert.deepEqual(result, { x: 1, y: 0 });
        });
    });

    describe('#add()', function() {
        it('should be able to correctly add a Vector2 to a Vector2', function() {
            var vector1 = new sc.Vector2(50, 50);
            var vector2 = new sc.Vector2(10, 10);

            var result = vector1.add(vector2);

            assert.deepEqual(result, { x: 60, y: 60 });
        });
    });

    describe('#sub()', function() {
        it('should be able to correctly subtract a Vector2 from a Vector2', function() {
            var vector1 = new sc.Vector2(50, 50);
            var vector2 = new sc.Vector2(10, 10);

            var result = vector1.sub(vector2);

            assert.deepEqual(result, { x: 40, y: 40 });
        });
    });
});
