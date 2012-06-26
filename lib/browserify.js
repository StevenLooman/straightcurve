var straightcurve = {
    Arc2: require('./arc2'),
    Circle2: require('./circle2'),
    Line2: require('./line2'),
    Vector2: require('./vector2'),
    Vertex2: require('./vertex2')
};

require('./distancer');

// assume this script is run in a function with context as first argument
window.straightcurve = straightcurve;
