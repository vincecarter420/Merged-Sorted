"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = merge;
const priority_queue_1 = require("@datastructures-js/priority-queue");
function merge(collection_1, collection_2, collection_3) {
    const minHeap = new priority_queue_1.MinPriorityQueue();
    // add all elements from collection_1 and collection_2 (already sorted in asc)
    for (const num of collection_1)
        minHeap.enqueue(num);
    for (const num of collection_2)
        minHeap.enqueue(num);
    // add elements from collection_3 (sorted in desc order)
    for (let i = collection_3.length - 1; i >= 0; i--) {
        minHeap.enqueue(collection_3[i]);
    }
    // extract sorted elements
    const result = [];
    while (!minHeap.isEmpty()) {
        result.push(minHeap.dequeue());
    }
    return result;
}
