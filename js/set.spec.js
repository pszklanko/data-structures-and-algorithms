const { Set } = require('./set');

describe('Base Set tests', () => {
    beforeEach(() => {
        this.set = new Set();
    });
    it('should be creatable', () => {
        expect(() => this.set).not.toThrow();
    });
    it('should have no elements at the beggining', () => {
        expect(this.set.size()).toEqual(0);
    });
    it('should be able to add element', () => {
        expect(this.set.add(5)).toEqual(true);
        expect(this.set.size()).toEqual(1);
    });
    it('should not be able to add to identical elements', () => {
        this.set.add(5);
        this.set.add(3);
        expect(this.set.add(5)).toEqual(false);
        expect(this.set.size()).toEqual(2);
    });
    it('should be able to delete element', () => {
        this.set.add(5);
        expect(this.set.delete(5)).toEqual(true);
        expect(this.set.size()).toEqual(0);
    });
    it('should be able to list all values', () => {
        this.set.add(3);
        this.set.add(4);
        this.set.add(4);
        expect(this.set.values()).toContain(3,4);
    })
});
