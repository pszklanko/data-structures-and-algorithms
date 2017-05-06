class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  append(element) {

  }

  insert(position, element) {

  }

  removeAt(position) {

  }

  remove(element) {

  }

  indexOf(element) {

  }

  isEmpty() {
    return this.length === 0;
  }
  size() {
    return this.length;
  }

  toString() {

  }

  print() {

  }
}


let a = new LinkedList();
console.log(a.isEmpty());
console.log(a.size());
