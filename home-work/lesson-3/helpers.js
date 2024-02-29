'use strict';

/**
 * Validate number
 * @param {Number|String} value - Value to validate
 * @returns {Boolean} - Is valid number
 */
function validateNumber(value) {
    return !isNaN(parseInt(value, 10));
}

/**
 * Validate year
 * @param {Number|String} value - Value to validate
 * @returns {Boolean} - Is valid year
 */
function validateYear(value) {
    if (typeof value !== 'number') {
        value = parseNumber(value);
    }

    return value >= 1900 && value <= 2024;
}

/**
 * Parse number from string
 * @param {String} value - Value to parse
 * @returns {Number} - Parsed number
 */
function parseNumber(value) {
    return parseInt(value);
}

/**
 * Validate string
 * @param {String} value - Value to validate
 * @returns {Boolean} - Is valid string
 */
function validateString(value) {
    return typeof value === 'string' && value.length > 2;
}

/**
 * Resolve place message
 * @param {String} city - User living city
 * @returns {String} - Message
 */
function resolvePlaceMessage(city) {
    const country = Object.keys(countries).find(
        (country) => countries[country].toLowerCase() === city.toLowerCase()
    );
    // console.log('country', country);

    return country
        ? `You live in capital of ${country}`
        : `You live in ${city}`;
}

/**
 * Resolve sport message
 * @param {String} sport - User favorite sport
 * @returns {String} - Message
 */
function resolveFavoriteSportMessage(sport) {
    const knownSport = Object.keys(sports).find(
        (knownSport) => knownSport.toLowerCase() === sport.toLowerCase()
    );

    return knownSport
        ? `Awesome! You want to play in ${sports[knownSport]}`
        : 'You choose unknown for as a type of sport';
}