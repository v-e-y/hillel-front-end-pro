/**
 * TASK 1
 * Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
 */

console.log('Task 1:');

for (let i = 20; i <= 30; i += 0.5) {
    console.log(i);
}


/**
 * TASK 2
 * Один долар коштує 27 гривень. 
 * Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
 */

const dollarCourse = 27;

console.log('Task 2:');

for (let i = 10; i <= 100; i += 10) {
    console.log(`${i} USD = ${i * dollarCourse} UAH`);
}


/**
 * TASK 3
 * Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
 */

/** @const {Number} task3Number - Random number */
const task3Number = Math.floor(Math.random() * 100);

console.log('Task 3:');

for (let i = 1; i <= 100; i++) {
    if (i ** 2 <= task3Number) {
        console.log(i);
    }
}


/**
 * TASK 4
 * Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
 */

/** @const {Number} number - Random number */
const number = Math.floor(Math.random() * 100);

/**
 * Check if the number is prime
 * @param {Number} number - Number to check
 * @returns {Boolean} - Is prime
 */
function isPrimeNumber(number) {
    if (number < 2) {
        return false;
    }

    for(let i = 2, s = Math.sqrt(number); i <= s; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

console.log('Task 4:');

console.log(`${number} is prime: ${isPrimeNumber(number)}`);


/**
 * TASK 5
 * Дане деяке число. 
 * Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. 
 * (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
 */

/** @const {Number} someNumber - Random number */
const someNumber = Math.floor(Math.random() * 100);

function is3xNumber(number) {
    if (number === 1) {
        return true;
    }

    let i = 1;
    while (3 ** i <= number) {
        if (3 ** i === number) {
            return true;
        }

        i++;
    }

    return false;
}

console.log('Task 5:');

console.log(`${someNumber} is 3^x: ${is3xNumber(someNumber)}`);