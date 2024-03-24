'use strict';

/**
 * Summarizer :)
 * @param {Number} number Number to process
 * @returns {Number} Result
 */
function summarizer(number) {
    /** @var {Number} result */
    let result = 0;

    return (number) => result += number;
}

const sum = summarizer();

console.log(sum(3)); // 3
console.log(sum(5)); // 8
console.log(sum(20)); // 28