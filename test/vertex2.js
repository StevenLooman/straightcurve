var sc = require('../');

module.exports = {
    'test create': function(beforeExit, assert) {
        var point = new sc.Vertex2(0, 0);
    },

    'test distance': function(beforeExit, assert) {
        var point1 = new sc.Vertex2(0, 0);
        var point2 = new sc.Vertex2(10, 0);

        var result = point1.distance(point2);

        assert.eql(result, 10);
    },

    'test add vector': function(beforeExit, assert) {
        var point = new sc.Vertex2(0, 0);
        var vector = new sc.Vector2(10, 10);

        var result = point.add(vector);

        assert.eql(result, { x: 10, y: 10 });
    },

    'test sub vector': function(beforeExit, assert) {
        var point = new sc.Vertex2(0, 0);
        var vector = new sc.Vector2(10, 10);

        var result = point.sub(vector);

        assert.eql(result, { x: -10, y: -10 });
    }
};
