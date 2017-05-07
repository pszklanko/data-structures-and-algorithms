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
    if(position >= 0 && position < this.length) {
      let current = this.head;
      let previous = null;
      let index = 0;

      if(position === 0) {
          this.head = current.next;
      } else {
        while(index++ !== position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.length--;
      return current.element;

    } else {
      return null;
    }

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
a.append(11);
a.append(3);

console.log(a.isEmpty());
console.log(a.size());
a.removeAt(1);
console.log(a.removeAt(0));
console.log(a);
console.log(a.size());
