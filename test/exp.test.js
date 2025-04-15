const exp = require('../src/exp');

test(' 2 ** 2 to equal 4', () => {
    expect(exp(2, 2)).toBe(4);
});
