var sc = require('../');

module.exports = {
    'test create': function(beforeExit, assert) {
        var point = new sc.Vertex2(0, 0);
    },

    'test distance Vertex2': function(beforeExit, assert) {
        var point1 = new sc.Vertex2(0, 0);
        var point2 = new sc.Vertex2(10, 0);

        var result = point1.distance(point2);

        assert.eql(result, 10);
    },

    'test distance Line2': function(beforeExit, assert) {
        var point = new sc.Vertex2(0, 0);
        var line = new sc.Line2(new sc.Vertex2(10, 0), new sc.Vertex2(10, 10));

        var result = point.distance(line);

        assert.eql(result, 10);
    },

    'test distance Circle2': function(beforeExit, assert) {
        var point = new sc.Vertex2(0, 0);
        var circle = new sc.Circle2(new sc.Vertex2(10, 0), 5);

        var result = point.distance(circle);

        //assert.eql(result, 5);
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
