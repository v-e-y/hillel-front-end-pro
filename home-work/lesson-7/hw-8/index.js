'use strict';

/** @const {Number} numberToProcess */
const numberToProcess = 5;

/** @const {Number} degree */
const degree = 3;


/**
 * Number to a Degree
 * @param {Number} number Number to process
 * @param {Number} degree Degree
 * @returns {Number} Result
 * @throws {Error} - if number or Degree is not a number or degree is less than 1
 */
function numberToDegree(number, degree) {
    if (
        typeof number !== 'number'
        || typeof degree !== 'number'
        || degree < 1
    ) {
        throw new Error('Invalid properties!');
    }

    return (degree === 1) 
        ? number 
        : number * numberToDegree(number, degree - 1);
}


console.log(numberToDegree(numberToProcess, degree));