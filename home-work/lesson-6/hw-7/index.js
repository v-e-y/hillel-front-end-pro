'use strict';

/**
 * @const {Array<Number>} dataSet
 */
const dataSet = [1, 2, 3, 4, 5, 6, 7];

/**
 * Remove element (value) from array
 * @param {Array} arr
 * @param {Number} value
 * @returns {Array}
 * @throws {Error} - if value is not a number or not in array
 */
function removeElement(arr, value) {
    if (
        !Array.isArray(arr)
        || typeof value !== 'number'
        || !arr.includes(value)
    ) {
        throw new Error('Invalid properties!');
    }

    return arr.filter((item) => item !== value);
}

console.log(removeElement(dataSet, 5));