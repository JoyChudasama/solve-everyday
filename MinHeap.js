class MinHeap {
    constructor(array) {
        this.heap = this.buildHeap(array);
    }

    buildHeap(array) {
        const firstParentIndex = this.getParentIndex(array.length - 1);
        for (let i = firstParentIndex; i >= 0; i--) {
            this.siftDown(i, array.length - 1, array);
        }

        return array;
    }

    siftDown(i, j, heap) {
        let leftChildIndex = this.getLeftChildIndex(i);
        let indexToSwap = -1;

        while (leftChildIndex <= j) {
            let rightChildIndex = this.getRightChildIndex(i);
            rightChildIndex = rightChildIndex <= j ? rightChildIndex : -1;

            if (rightChildIndex !== -1 && heap[rightChildIndex] < heap[leftChildIndex]) {
                indexToSwap = rightChildIndex;
            } else {
                indexToSwap = leftChildIndex
            }

            if (heap[indexToSwap] < heap[i]) {
                this.swap(i, indexToSwap, heap);
                i = indexToSwap;
                leftChildIndex = this.getLeftChildIndex(i);
            } else {
                return;
            }
        }
    }

    siftUp(i, heap) {
        let parentIndex = this.getParentIndex(i);
        while (parentIndex > 0 && heap[i] < heap[parentIndex]) {
            this.swap(parentIndex, i, heap);
            i = parentIndex
            parentIndex = this.getParentIndex(i);
        }
    }

    peek() {
        return this.heap[0];
    }

    remove() {
        this.swap(0, this.heap.length - 1, this.heap);
        const removedValue = this.heap.pop();
        this.siftDown(0, this.heap.length - 1, this.heap);
        return removedValue;
    }

    insert(value) {
        this.heap.push(value);
        this.siftUp(this.heap.length - 1, this.heap);
    }

    swap(i, j, heap) {
        [heap[i], heap[j]] = [heap[j], heap[i]];
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChildIndex(i) {
        return i * 2 + 1;
    }

    getRightChildIndex(i) {
        return (i * 2) + 2;
    }
}