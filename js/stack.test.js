const { Stack } = require('./stack');

describe('Base Stack tests', () => {
    it('should be creatable', () => {
        expect(() => new Stack()).not.toThrow();
    })
});