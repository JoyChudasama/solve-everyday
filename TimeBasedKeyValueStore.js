// Time Based Key-Value Store - Binary Search
// Implement a time-based key-value data structure that supports:

// Storing multiple values for the same key at specified time stamps
// Retrieving the key's value at a specified timestamp
// Implement the TimeMap class:

// TimeMap() Initializes the object.
// void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
// String get(String key, int timestamp) Returns the most recent value of key if set was previously called on it and the most recent timestamp for that key prev_timestamp is less than or equal to the given timestamp (prev_timestamp <= timestamp). If there are no values, it returns "".
// Note: For all calls to set, the timestamps are in strictly increasing order.

// Example 1:

// Input:
// ["TimeMap", "set", ["alice", "happy", 1], "get", ["alice", 1], "get", ["alice", 2], "set", ["alice", "sad", 3], "get", ["alice", 3]]

// Output:
// [null, null, "happy", "happy", null, "sad"]

// Explanation:
// TimeMap timeMap = new TimeMap();
// timeMap.set("alice", "happy", 1);  // store the key "alice" and value "happy" along with timestamp = 1.
// timeMap.get("alice", 1);           // return "happy"
// timeMap.get("alice", 2);           // return "happy", there is no value stored for timestamp 2, thus we return the value at timestamp 1.
// timeMap.set("alice", "sad", 3);    // store the key "alice" and value "sad" along with timestamp = 3.
// timeMap.get("alice", 3);           // return "sad"


// O(log n) time
// O(n * m) space
class TimeMap {
    constructor() {
        // O(n * m) space where n is the number of keys and m is the length of timestamps/values 
        this.keyStore = new Map();
    }

    // O(1) time 
    // O(1) sapce as just pushing values to arrays
    set(key, value, timestamp) {
        if (this.keyStore.has(key)) {
            const keyVal = this.keyStore.get(key);
            keyVal['timestamps'].push(timestamp);
            keyVal['values'].push(value);
        } else {
            this.keyStore.set(key, {
                'timestamps': [timestamp],
                'values': [value],
            });
        }
    }

    // O(log n) time where n is the length of timestamps 
    // O(1) space
    get(key, timestamp) {

        if (!this.keyStore.has(key)) return '';

        const keyVal = this.keyStore.get(key);

        let left = 0;
        let right = keyVal.timestamps.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (keyVal.timestamps[mid] === timestamp) return keyVal.values[mid];

            if (keyVal.timestamps[mid] > timestamp) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        const lastMid = Math.floor((left + right) / 2);
        return lastMid >= 0 && lastMid < keyVal.values.length ? keyVal.values[lastMid] : '';
    }
}

["TimeMap", "set", ["alice", "happy", 1], "get", ["alice", 1], "get", ["alice", 2], "set", ["alice", "sad", 3], "get", ["alice", 3]]

const timeStamp = new TimeMap();
timeStamp.set('alice', 'happy', 1);
console.log(timeStamp.get('alice', 1));
console.log(timeStamp.get('alice', 2));
timeStamp.set('alice', 'sad', 3);
console.log(timeStamp.get('alice', 3));
console.log(timeStamp.get('alice', 1));
