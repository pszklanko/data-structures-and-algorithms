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
    it('should be able to remove all elements', () => {
        this.set.add(3);
        this.set.add(4);
        expect(this.set.size()).toEqual(2);
        this.set.clear();
        expect(this.set.size()).toEqual(0);
    });
    it('should be able to list all values', () => {
        this.set.add(3);
        this.set.add(4);
        this.set.add(4);
        expect(this.set.values()).toContain(3,4);
    });
    it('should create union of two sets', () => {
        const setB = new Set();
        this.set.add(3);
        this.set.add(4);
        this.set.add(5);
        setB.add(5);
        setB.add(6);
        setB.add(7);
        const union = this.set.union(setB);
        expect(union.values()).toContain(3,4,5,6,7);
        expect(union.size()).toEqual(5);
    });
    it('should create intersection of two sets', () => {
        const setB = new Set();
        this.set.add(3);
        this.set.add(4);
        this.set.add(5);
        setB.add(5);
        setB.add(6);
        setB.add(7);
        const intersection = this.set.intersection(setB);
        expect(intersection.values()).toEqual([5]);
    });
    it('should create difference of two sets', () => {
        const setB = new Set();
        this.set.add(3);
        this.set.add(4);
        this.set.add(5);
        setB.add(5);
        setB.add(6);
        setB.add(7);
        const difference = this.set.difference(setB);
        expect(difference.values()).toContain(3,4);
        expect(difference.size()).toEqual(2);
    });
    it('should be able to check if one is subset of other', () => {
        const setB = new Set();
        this.set.add(3);
        this.set.add(4);
        setB.add(3);
        setB.add(4);
        setB.add(7);
        expect(this.set.isSubsetOf(setB)).toEqual(true);
    })
});
