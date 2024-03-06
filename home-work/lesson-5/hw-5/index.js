'use strict';

/** @const {Array<Number>} dataSet */
const dataSet = [
    16, -37, 54, -4,
    72, -56, 47, 4, 
    -16, 25, -37, 46,
    4, -51, 27, -63,
    4, -54, 76, -4,
    12, -35, 4, 47
];

/**
 * TASK: 1
 * Знайти суму та кількість позитивних елементів.
 */

/** @const {Object} task1Result*/
const task1Result = {
    sum: 0,
    count: 0
}

dataSet.forEach(item => {
    if (item > 0) {
        task1Result.sum += item;
        task1Result.count++;
    }
});

console.log('TASK 1: ', task1Result);


/**
 * TASK: 2
 * Знайти мінімальний елемент масиву та його порядковий номер.
 */

console.log(`TASK: 2. Min value: ${Math.min(...dataSet)}. Index: ${dataSet.indexOf(Math.min(...dataSet))}`);


/**
 * TASK: 3
 * Знайти максимальний елемент масиву та його порядковий номер.
 */

console.log(`TASK: 3. Max value: ${Math.max(...dataSet)}. Index: ${dataSet.indexOf(Math.max(...dataSet))}`);


/**
 * TASK: 4
 * Визначити кількість негативних елементів.
 */

console.log(`TASK: 4. Negative numbers count: ${dataSet.filter(item => item < 0).length}`);


/**
 * TASK: 5
 * Знайти кількість непарних позитивних елементів.
 */

console.log(`TASK: 5. Odd positive numbers count: ${dataSet.filter(item => item > 0 && item % 2 !== 0).length}`);


/**
 * TASK: 6
 * Знайти кількість парних позитивних елементів.
 */

console.log(`TASK: 6. Even positive numbers count: ${dataSet.filter(item => item > 0 && item % 2 === 0).length}`);


/**
 * TASK: 7
 * Знайти суму парних позитивних елементів.
 */

console.log(`TASK: 7. Sum of even positive numbers: ${dataSet.filter(item => item > 0 && item % 2 === 0).reduce((acc, item) => acc + item, 0)}`);


/**
 * TASK: 8
 * Знайти суму непарних позитивних елементів.
 */

console.log(`TASK: 8. Sum of even positive numbers: ${dataSet.filter(item => item > 0 && item % 2 !== 0).reduce((acc, item) => acc + item, 0)}`);


/**
 * TASK: 9
 * Знайти добуток позитивних елементів.
 */

console.log(`TASK: 9. Product of positive numbers: ${dataSet.filter(item => item > 0).reduce((acc, item) => acc * item, 1)}`);


/**
 * TASK: 10
 * Знайти найбільший серед елементів масиву, остальні обнулити.
 */

const maxIndex = dataSet.indexOf(Math.max(...dataSet));

console.log(`TASK: 10. ${dataSet.fill(0, 0, maxIndex).fill(0, maxIndex + 1)}`);
