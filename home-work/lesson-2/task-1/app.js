'use strict';

/**
 * Calculator Actions "Enum"
 * @const {Object}
 * @property {string} plus - Plus action
 * @property {string} minus - Minus action
 * @property {string} multiply - Multiply action
 * @property {string} divide - Divide action
 */
const calcActionsEnum = {
    plus: '+',
    minus: '-',
    multiply: '*',
    divide: '/',
};

/**
 * Validate action
 * @param {string} action - Action to validate
 * @returns {boolean} - True if action is valid, false otherwise
 */
function validateAction(action) {
    return Object.values(calcActionsEnum).includes(action);
}

/**
 * Validate number
 * @param {string} number - Number to validate
 * @returns {boolean} - True if number is valid, false otherwise
 */
function validateNumber(number) {
    return !isNaN(Number(number));
}

/**
 * Format/parse number from string
 * @param {string} number - Number to format/parse
 * @returns {number} - Formatted/parsed number
 */
function formatNumber(number) {
    return Number(number);
}

/**
 * Get action from user
 * @returns {string} - Action
 */
function askAction() {
    /** @var {number} action */
    let action;
    do {
        action = prompt('Enter action (+, -, *, /):');
    } while (!validateAction(action));

    return action;
}

/**
 * Ask number from user
 * @param {string} numberName - Number name
 * @returns {number} - Number
 */
function askNumber(numberName) {
    /** @var {number} number */
    let number;
    do {
        number = prompt(`Enter ${numberName} number:`);
    } while (!validateNumber(number));

    return formatNumber(number);
}

/**
 * Calculate
 */
function calculate() {
    let action = askAction();
    let numFirst = askNumber('first');
    let numSecond = askNumber('second');
    /** @var {string|number} result */
    let result;

    switch (action) {
        case calcActionsEnum.plus:
            result = numFirst + numSecond;
            break;
        case calcActionsEnum.minus:
            result = numFirst - numSecond;
            break;
        case calcActionsEnum.multiply:
            result = numFirst * numSecond;
            break;
        case calcActionsEnum.divide:
            result = numFirst / numSecond;
            break;
    }

    let continueCalculation = confirm(
        `
        Result: ${result}. 
        Do you want to continue?
        `
    );

    if (continueCalculation) {
        calculate();
    }
}

calculate();