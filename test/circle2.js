var sc = require('../');

module.exports = {
    'test create': function(beforeExit, assert) {
        var circle = new sc.Circle2(new sc.Vertex2(0, 0), 5);
    },

    'test distance Vertex2': function(beforeExit, assert) {
        var circle = new sc.Circle2(new sc.Vertex2(0, 0), 5);
        var point = new sc.Vertex2(10, 0);

        var result = circle.distance(point);

        assert.equal(result, 5);
    },

    'test distance Line2': function(beforeExit, assert) {
        var circle = new sc.Circle2(new sc.Vertex2(0, 0), 5);
        var line = new sc.Line2(new sc.Vertex2(10, 0), new sc.Vertex2(10, 10));

        var result = circle.distance(line);

        assert.equal(result, 5);
    },

    'test distance Circle2': function(beforeExit, assert) {
        var circle1 = new sc.Circle2(new sc.Vertex2(0, 0), 5);
        var circle2 = new sc.Circle2(new sc.Vertex2(15, 0), 5);

        var result = circle1.distance(circle2);

        assert.equal(result, 5);
    },

};
