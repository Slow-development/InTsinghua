const calculateScale = require('./calculateScale.js')

test('calculateScale', () => {
    var deltaX = [0,0,0,0,0,0,0,0.005,0.01,0.02,0.04,0.1,0.2,0.3]
    var deltaY = [0.005,0.01,0.02,0.04,0.1,0.2,0.3,0,0,0,0,0,0,0]
    var scale = [18,17,16,15,14,13,12,18,17,16,15,14,13,12]
    for(let i = 0; i < scale.length; i++){
        expect(calculateScale(deltaX[i], deltaY[i])).toBe(scale[i]);
    }
    
})