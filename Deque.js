export default class Deque {
    constructor() {
        this.items = [];
    }

    pushBack(val) {
        this.items.push(val);
    }

    popBack() {
        return this.items.pop();
    }

    pushFront(val) {
        this.items.unshift(val);
    }

    popFront() {
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

    back() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}
