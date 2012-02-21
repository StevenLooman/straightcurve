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
            new sc.Line2(new sc.Vertex2(2, 0), new sc.Vertex2(1.5, 0.8660254037844386)),
            new sc.Line2(new sc.Vertex2(1.5, 0.8660254037844386), new sc.Vertex2(0.5000000000000002, 0.8660254037844387)),
            new sc.Line2(new sc.Vertex2(0.5000000000000002, 0.8660254037844387), new sc.Vertex2(0, 1.2246063538223773e-16))
        ]);
    },

    'test segmentize reversed': function(beforeExit, assert) {
        var arc = new sc.Arc2(new sc.Vertex2(2, 0), new sc.Vertex2(1, 1), new sc.Vertex2(0, 0));

        var result = arc.segmentize(3);

        assert.eql(result, [
            new sc.Line2(new sc.Vertex2(0, 1.2246063538223773e-16), new sc.Vertex2(0.4999999999999998, 0.8660254037844385)),
            new sc.Line2(new sc.Vertex2(0.4999999999999998, 0.8660254037844385), new sc.Vertex2(1.4999999999999998, 0.8660254037844388)),
            new sc.Line2(new sc.Vertex2(1.4999999999999998, 0.8660254037844388), new sc.Vertex2(2, 4.440892098500626e-16))
        ]);
    },

};
