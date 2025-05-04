// LRU Cache

// Implement the Least Recently Used (LRU) cache class LRUCache. The class should support the following operations

// LRUCache(int capacity) Initialize the LRU cache of size capacity.
// int get(int key) Return the value corresponding to the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the introduction of the new pair causes the cache to exceed its capacity, remove the least recently used key.
// A key is considered used if a get or a put operation is called on it.

// Contraint: get() and put() each should run in O(1) average time complexity.


// O(1) time
// O(n) space where n is the capacity
class LRUCache {

    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        if (!this.cache.has(key)) return -1;

        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);

        return value;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size === this.capacity) {
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }

        this.cache.set(key, value);
    }
}


const cache = new LRUCache(2);

cache.put(1, 10);
console.log(cache.get(1));
cache.put(2, 20);
cache.put(3, 30);
console.log(cache.get(2));
console.log(cache.get(1));