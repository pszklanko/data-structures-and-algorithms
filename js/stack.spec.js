const { Stack } = require('./stack');

describe('Base Stack tests', () => {
    beforeEach(() => {
        this.stack = new Stack();
    });
    it('should be creatable', () => {
        expect(() => this.stack).not.toThrow();
    });
    it('should have no elements at the beggining', () => {
        expect(this.stack.isEmpty()).toEqual(true);
        expect(this.stack.size()).toEqual(0);
    });
    it('should be able to push element', () => {
        this.stack.push(5);
        expect(this.stack.size()).toEqual(1);
    });
    it('should be able to remove element', () => {
        this.stack.push(5);
        const element = stack.pop();
        expect(element).toEqual(5);
        expect(this.stack.size()).toEqual(0);
    });
    it('should be able to show last element without removing', () => {
        this.stack.push(1);
        this.stack.push(4);
        expect(this.stack.peek()).toEqual(4);
        expect(this.stack.peek()).toEqual(4);
    });
    it('should work like stack', () => {
        let element;
        this.stack.push(3);
        this.stack.push(1);
        element = stack.pop()
        this.stack.push(5);
        expect(element).toEqual(1);
        expect(this.stack.peek()).toEqual(5);
    });
    it('should be able to remove all elements', () => {
        this.stack.push(3);
        this.stack.push(7);
        this.stack.push(2);
        expect(this.stack.size()).toEqual(3);
        this.stack.clear();
        expect(this.stack.size()).toEqual(0);
    });
});