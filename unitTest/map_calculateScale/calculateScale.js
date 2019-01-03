function calculateScale (deltaX, deltaY) {
    // find the suitable scale value for a given region
    var delta = 0;
    if (deltaX > deltaY)
        delta = deltaX;
    else
        delta = deltaY;
    var scale = 16;
    if (delta > 0.2)
        scale = 12;
    else if (delta > 0.1)
        scale = 13;
    else if (delta > 0.04)
        scale = 14;
    else if (delta > 0.02)
        scale = 15;
    else if (delta > 0.01)
        scale = 16;
    else if (delta > 0.005)
        scale = 17;
    else
        scale = 18;
    return scale;
};

module.exports = calculateScale;