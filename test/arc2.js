var sc = require('../');

module.exports = {
    'test create': function(beforeExit, assert) {
        var arc = new sc.Arc2(new sc.Vertex2(0, 0), new sc.Vertex2(1, 1), new sc.Vertex2(2, 0));
    },

    'test center': function(beforeExit, assert) {
        var arc = new sc.Arc2(new sc.Vertex2(0, 0), new sc.Vertex2(1, 1), new sc.Vertex2(2, 0));

        var result = arc.center();

        assert.eql(result, new sc.Vertex2(1, 0));
    },

    'test radius': function(beforeExit, assert) {
        var arc = new sc.Arc2(new sc.Vertex2(0, 0), new sc.Vertex2(1, 1), new sc.Vertex2(2, 0));

        var result = arc.radius();

        assert.eql(result, 1);
    },

    'test segmentize': function(beforeExit, assert) {
        var arc = new sc.Arc2(new sc.Vertex2(0, 0), new sc.Vertex2(1, 1), new sc.Vertex2(2, 0));

        var result = arc.segmentize(3);

        assert.eql(result, [
            new sc.Line2(new sc.Vertex2(0, 1.2246467991473532e-16), new sc.Vertex2(0.4999999999999998, 0.8660254037844385)),
            new sc.Line2(new sc.Vertex2(0.4999999999999998, 0.8660254037844385), new sc.Vertex2(1.5, 0.8660254037844387)),
            new sc.Line2(new sc.Vertex2(1.5, 0.8660254037844387), new sc.Vertex2(2, 0)),
        ]);
    },

    'test segmentize reversed': function(beforeExit, assert) {
        var arc = new sc.Arc2(new sc.Vertex2(2, 0), new sc.Vertex2(1, 1), new sc.Vertex2(0, 0));

        var result = arc.segmentize(3);

        assert.eql(result, [
            new sc.Line2(new sc.Vertex2(2, 0), new sc.Vertex2(1.5, 0.8660254037844386)),
            new sc.Line2(new sc.Vertex2(1.5, 0.8660254037844386), new sc.Vertex2(0.5000000000000002, 0.8660254037844387)),
            new sc.Line2(new sc.Vertex2(0.5000000000000002, 0.8660254037844387), new sc.Vertex2(0, 1.2246467991473532e-16))
        ]);
    },

    'test segmentize 2': function(beforeExit, assert) {
        var arc = new sc.Arc2(new sc.Vertex2(40, 97), new sc.Vertex2(34, 93), new sc.Vertex2(33, 86));

        var result = arc.segmentize(25);

        // ensure all y(n - 1) > y(n)
        var lastY = result[0].p0.y;
        for (var i = 1; i < result.length; ++i) {
            var y = result[i].p0.y;

            assert.equal(true, lastY > y);

            lastY = y;
        }
    },

};
