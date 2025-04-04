import { MinPriorityQueue } from '@datastructures-js/priority-queue';

export function merge(collection_1: number[],
                      collection_2: number[],
                      collection_3: number[]): number[]
{
    const minHeap = new MinPriorityQueue<number>();

    // add elements from collection_1 and collection_2 which are already sorted in asc
    for (const num of collection_1) minHeap.enqueue(num);
    for (const num of collection_2) minHeap.enqueue(num);

    // invert collection_3 elements from desc to asc order
    for (let i = collection_3.length - 1; i >= 0; i--) {
        minHeap.enqueue(collection_3[i]);
    }

    // extract sorted elements
    const result: number[] = [];
    while (!minHeap.isEmpty()) {
        result.push(<number>minHeap.dequeue());
    }

    return result;
}