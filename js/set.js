class Set {
    constructor() {
        this.items = {};
    }
    add(element) {
        if(!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    }
    delete(element) {
        if(this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    }
    has(element) {
        return this.items.hasOwnProperty(element);
    }
    clear() {
        this.items = {};
    }
    size() {
        return Object.keys(this.items).length;
    }
    values() {
        return Object.values(this.items);
    }
    union(otherSet) {
        const unionSet = new Set();
        this.values().forEach((element) => {
            unionSet.add(element);
        });
        otherSet.values().forEach((element) => {
            unionSet.add(element);
        });
        return unionSet;
    }
    intersection(otherSet) {
        const intersectionSet = new Set();
        const values = this.values();
        const otherValues = otherSet.values();
        let biggerSet = values;
        let smallerSet = otherValues;
        if(biggerSet.length < smallerSet.length) {
            biggerSet = otherValues;
            smallerSet = values;
        }
        smallerSet.forEach((element) => {
            if(biggerSet.includes(element)) {
                intersectionSet.add(element);
            }
        });
        return intersectionSet;
    }
    difference(otherSet) {
        const diffSet = new Set();
        this.values().forEach((element) => {
            if(!otherSet.has(element)) {
                diffSet.add(element)
            }
        });
        return diffSet;
    }
    isSubsetOf(otherSet) {

    }
}

module.exports = {
    Set
};