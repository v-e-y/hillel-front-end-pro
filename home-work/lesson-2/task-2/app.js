'use strict';

/**
 * Validate user numbers (hour(s))
 * @param {string} hours
 * @return {boolean}
 */
function validateHours(hours) {
    let parsedHours = parseFloat(hours);
    return !isNaN(parsedHours) && parsedHours > 0;
}

/**
 * Format prompt message (hours)
 * @param {string} hours
 * @return {number}
 */
function formatHours(hours) {
    return parseFloat(hours);
}


/**
 * Hours to seconds convertor
 * @param {number} hours
 * @return {number}
 */
function hoursToSecondsConvertor(hours) {
    return hours * 3600;
}

/**
 * Ask hours from user
 * @return {string}
 */
function askHours() {
    let hours;
    do {
        hours = prompt('Please enter hours');
    } while (!validateHours(hours));
    return hours;
}

/**
 * Convert hours to seconds
 * @return {void}
 */
function convertHoursToSeconds() {
    let hours = askHours();
    let seconds = hoursToSecondsConvertor(
        formatHours(hours)
    );
    
    let continueToWork = confirm(
        `
        You entered ${hours} hours. 
        It is ${seconds} seconds. 
        Do you want to continue?`
    );

    if (continueToWork) {
        convertHoursToSeconds();
    }
}

convertHoursToSeconds();
