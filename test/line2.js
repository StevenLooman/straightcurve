var sc = require('../');

module.exports = {
    'test create': function(beforeExit, assert) {
        var line = new sc.Line2(new sc.Vertex2(0, 0), new sc.Vertex2(10, 0));
    },

    'test create vertical': function(beforeExit, assert) {
        var line = new sc.Line2(new sc.Vertex2(0, 0), new sc.Vertex2(0, 10));
    },

    'test intersect': function(beforeExit, assert) {
        var line1 = new sc.Line2(new sc.Vertex2(0, 0), new sc.Vertex2(10, 0));
        var line2 = new sc.Line2(new sc.Vertex2(5, 0), new sc.Vertex2(5, 10));

        var result = line1.intersect(line2);

        assert.eql(result, { x: 5, y: 0 });
    },

    'test angle': function(beforeExit, assert) {
        var line1 = new sc.Line2(new sc.Vertex2(0, 0), new sc.Vertex2(10, 0));
        var line2 = new sc.Line2(new sc.Vertex2(5, 0), new sc.Vertex2(5, 10));

        var result = line1.angle(line2);

        assert.eql(result, Math.PI / 2);
    },

    'test signedAngle': function(beforeExit, assert) {
        var line1 = new sc.Line2(new sc.Vertex2(0, 0), new sc.Vertex2(10, 0));
        var line2 = new sc.Line2(new sc.Vertex2(5, 0), new sc.Vertex2(5, 10));

        var result = line1.signedAngle(line2);

        assert.eql(result, Math.PI / 2);
    },

    'test perp': function(beforeExit, assert) {
        var line = new sc.Line2(new sc.Vertex2(0, 0), new sc.Vertex2(10, 0));

        var result = line.perp(new sc.Vertex2(0, 0));

        assert.eql(result, { p0: { x: 0, y: 0 }, p1: { x: 0, y: 1 } });
    },

    'test distance': function(beforeExit, assert) {
        var line = new sc.Line2(new sc.Vertex2(0, 0), new sc.Vertex2(10, 0));
        var point = new sc.Vertex2(5, 5);

        var result = line.distance(point);

        assert.eql(result, 5);
    },
};
