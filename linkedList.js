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
    let node = new Node(element);
    let current = null;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.length++;
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
a.append(5);
a.append(7);
console.log(a);
console.log(a.isEmpty());
console.log(a.size());
