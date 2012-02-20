var sc = require('../');

module.exports = {
    'test create': function(beforeExit, assert) {
        var vector = new sc.Vector2(0, 0);
    },

    'test normalize': function(beforeExit, assert) {
        var vector = new sc.Vector2(50, 0);

        vector.normalize();

        assert.eql(vector, { x: 1, y: 0 });
        assert.eql(vector.length(), 1);
    },

    'test dot': function(beforeExit, assert) {
        var vector1 = new sc.Vector2( 2, 5);
        var vector2 = new sc.Vector2(-3, 2);

        var result = vector1.dot(vector2);

        assert.eql(result, 4);
    },

    'test cross': function(beforeExit, assert) {
        var vector1 = new sc.Vector2( 0, 10);
        var vector2 = new sc.Vector2(10,  0);

        var result = vector1.cross(vector2);

        assert.eql(result, -100);
    },

    'test angle': function(beforeExit, assert) {
        var vector1 = new sc.Vector2(0, 1);
        var vector2 = new sc.Vector2(1, 0);

        var result = vector1.angle(vector2);

        assert.eql(result, Math.PI / 2);
    },

    'test length': function(beforeExit, assert) {
        var vector = new sc.Vector2(10, 10);

        var result = vector.length();

        assert.eql(result, 14.142135623730951);
    },

    'test signedAngle': function(beforeExit, assert) {
        var vector1 = new sc.Vector2(0, -1);
        var vector2 = new sc.Vector2(1,  0);

        var result = vector1.signedAngle(vector2);

        assert.eql(result, Math.PI / 2);
    },

    'test perp': function(beforeExit, assert) {
        var vector1 = new sc.Vector2(0, -1);

        var result = vector1.perp();

        assert.eql(result, { x: 1, y: 0 });
    },

    'test add vector': function(beforeExit, assert) {
        var vector1 = new sc.Vector2(50, 50);
        var vector2 = new sc.Vector2(10, 10);

        var result = vector1.add(vector2);

        assert.eql(result, { x: 60, y: 60 });
    },

    'test sub vector': function(beforeExit, assert) {
        var vector1 = new sc.Vector2(50, 50);
        var vector2 = new sc.Vector2(10, 10);

        var result = vector1.sub(vector2);

        assert.eql(result, { x: 40, y: 40 });
    }
};
