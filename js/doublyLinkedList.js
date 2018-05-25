let DoublyLinkedList = (function () {
    class Node {
        constructor(element) {
            this.element = element;
            this.next = null;
            this.previous = null;
        }
    }

    class DoublyLinkedList {
        constructor() {
            this.length = 0;
            this.head = null;
            this.tail = null;
        }

        append(element) {
            let node = new Node(element);
            let current = null;

            if (this.head === null) {
                this.head = node;
            } else {
                current = this.head;
                while (current.next) {
                    current = current.next;
                }
                current.next = node;
            }
            this.length++;
        }

        insert(position, element) {
            if (position >= 0 && position < this.length) {
                let node = new Node(element);
                let current = this.head;
                let previous = null;
                let index = 0;

                if (position === 0) {
                    if(!this.head) {
                        this.head = node;
                        this.tail = node;
                    } else {
                        node.next = current;
                        current.prev = node;
                        this.head = node;
                    }

                } else if(position === length) {
                    current = tail;
                    current.next = node;
                    node.prev = current;
                    tail = node;
                } else {
                    while (index++ < position) {
                        previous = current;
                        current = current.next;
                    }
                    previous.next = node;
                    node.next = current;
                    current.prev = node;
                    node.prev = previous;
                }
                this.length++;
                return true;
            } else {
                return false;
            }
        }

        removeAt(position) {
            if (position >= 0 && position < this.length) {
                let current = this.head;
                let previous = null;
                let index = 0;

                if (position === 0) {
                    this.head = current.next;
                } else {
                    while (index++ !== position) {
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
            let position = this.indexOf(element);
            return this.removeAt(position);
        }

        indexOf(element) {
            let current = this.head;
            let index = 0;

            while (current) {
                if (element === current.element) return index;
                index++;
                current = current.next;
            }
            return -1;
        }

        isEmpty() {
            return this.length === 0;
        }

        size() {
            return this.length;
        }

        toString() {
            let current = this.head;
            let elements = [];

            while (current) {
                elements.push(current.element);
                current = current.next;
            }
            return elements.join();
        }

        getHead() {
            return this.head;
        }

        print() {
            console.log(this.toString());
        }
    }
    return DoublyLinkedList;
})()

let list = new DoublyLinkedList();