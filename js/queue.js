let Queue = (function () {
    const items = new WeakMap();

    class Element {
        constructor(value, priority=1) {
            this.value = value;
            this.priority = priority;
        }
    }

    class Queue {
        constructor() {
            items.set(this, [])
        }

        enqueue(value, priority) {
            let q_elem = new Element(value, priority)
            let q = items.get(this);
            let added = false
            for (let i = 0; i < q.length; i++) {
                if (q_elem.priority < q[i].priority) {
                    q.splice(i, 0, q_elem);
                    added = true;
                    break;
                }
            }
            if (!added) {
                q.push(q_elem);
            }
        }

        dequeue() {
            let q = items.get(this);
            let r = q.shift();
            return r;
        }

        front() {
            let q = items.get(this);
            return q[0];
        }

        isEmpty() {
            let q = items.get(this);
            return q.length === 0;
        }

        size() {
            let q = items.get(this);
            return q.length;
        }

        print() {
            let q = items.get(this);
            for (let i = 0; i < q.length; i++) {
                console.log(`${q[i].value} - ${q[i].priority}`);
            }
        }
    }

    return Queue;
})();

let q = new Queue()
