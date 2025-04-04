import { merge } from '../src/merged_sort';
import * as assert from 'assert';

function runTests() {

    /* Test 'merge' with normal condition */
    assert.deepStrictEqual(merge([1, 3, 5, 11], [2, 4, 6, 10, 12], [15, 13, 9, 7]),
        [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15]);
    /* Test 'merge' if there are duplicated value */
    assert.deepStrictEqual(merge([1, 3, 5, 11], [2, 4, 6, 10, 12], [9, 7, 5, 3, 1]),
        [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 9, 10, 11, 12]);
    /* Test 'merge' if there are empty list */
    assert.deepStrictEqual(merge([], [3, 4], [6, 5]), [3, 4, 5, 6]);
    assert.deepStrictEqual(merge([], [1, 3, 5], []), [1, 3, 5]);
    assert.deepStrictEqual(merge([10, 20], [], [15, 5]), [5, 10, 15, 20]);

    console.log('All tests passed');
}

// run all test cases
if (require.main === module) {
    runTests();
}
