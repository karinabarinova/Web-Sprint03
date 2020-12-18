
class Node {
    constructor(data, next = null) {
        this.data = data,
        this.next = next
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }
    add(value) {
        let node = new Node(value);
        let current;

        if (this.head == null)
            this.head = node;
        else {
            current = this.head;

            while (current.next)
                current = current.next;
            current.next = node;
        }
        this.size++;
    }
    remove(value) {
        let current = this.head;
        let prev = null;

        while (current != null) {
            if (current.data === value) {
                if (prev == null)
                    this.head = current.next;
                else
                    prev.next = current.next;
                this.size--;
            }
            prev = current;
            current = current.next;
        }
    }
    contains(value) {
        let current = this.head;

        while (current != null) {
            if (current.data === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
    [Symbol.iterator] = function* () {
        for (let current = this.head; current !== null; current = current.next) {
            yield current.data;
        }
    }

    // // }
    clear() {
        let current = this.head;

        while (current != null) {
            if (current.data) {
                this.head = current.next;
                this.size--;
            }
            current = current.next;
        }
    }
    count() {
        return this.size;
    }
    log() {
        let current;
        let str = "";
        if (this.head != null) {
            current = this.head;
            while(current) {
                str += current.data;
                if (current.next)
                    str += ", ";
                current = current.next;
            }
        }
        console.log(str);
    }
}

function createLinkedList(arr) {
    let i = 0;
    let list = new LinkedList();
    while (arr[i]) {
        list.add(arr[i]);
        i++;
    }
    return list;
}

const ll = createLinkedList([100, 1, 2, 3, 100, 4, 5, 100]);
ll.log();
while(ll.remove(100));
ll.log();
ll.add(10);
ll.log();
console.log(ll.count());
console.log(ll.contains(10));
console.log(ll.contains(1000));

let sum = 0;
for(const n of ll) {
    sum += n;
}
console.log(sum);
ll.clear();
ll.log();