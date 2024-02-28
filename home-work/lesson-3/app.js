'use strict';

/**
 * User object
 * Like entity
 * @const {Object} User
 * @property {Number|null} birthYear - User birth year
 * @property {String|null} livingCity - User living city
 * @property {String|null} favoriteSport - User favorite sport
 */
const user = {
    birthYear: null,
    livingCity: null,
    favoriteSport: null
};

/**
 * Ask question
 * @param {Function} receiver - Receiver function
 * @param {String} question - Question to ask
 * @param {Function|Array} validator - Validator function
 * @param {Function} declineToAnswer - Decline to answer resolver
 * @param {Array<Function>|null} middleware - Middleware functions
 * @returns {void}
 */
function askQuestion(
    receiver, 
    question, 
    validator, 
    declineToAnswer, 
    middleware = null
) {
    let answer = prompt(question);

    if (answer === null) {
        return declineToAnswer();
    }

    if (typeof validator === 'function' && !validator(answer)) {
        return askQuestion(...arguments);
    }

    if (typeof validator === 'object') {
        for (let i = 0; i < validator.length; i++) {
            if (!validator[i](answer)) {
                return askQuestion(...arguments);
            }
        }
    }

    if (middleware !== null) {
        for (let i = 0; i < middleware.length; i++) {
            answer = middleware[i](answer);
        }
    }

    receiver(answer);
}

/**
 * Fill User entity
 * @returns {Boolean} - Is filled
 */
async function fillUser() {
    askQuestion(
        (answer) => {user.birthYear = answer}, 
        questions.birthYear,
        [parseNumber, validateYear],
        () => alert('It is a pity that you did not want to enter your birth year'),
        [parseNumber]
    );

    askQuestion(
        (answer) => {user.livingCity = answer}, 
        questions.livingCity,
        validateString,
        () => alert('It is a pity that you did not want to enter your living city')
    );

    askQuestion(
        (answer) => {user.favoriteSport = answer}, 
        questions.favoriteSport,
        validateString,
        () => alert('It is a pity that you did not want to enter your favorite sport')
    );

    return true;
}

function showFinalMessage() {
    /** @const {Object} finalMessage */
    const finalMessage = {
        birthYear: null,
        livingCity: null,
        favoriteSport: null
    };

    fillUser().then(() => {
        finalMessage.birthYear = user.birthYear !== null ? `You were born in ${user.birthYear}` : null;
        finalMessage.livingCity = resolvePlaceMessage(user.livingCity);
        finalMessage.favoriteSport = resolveFavoriteSportMessage(user.favoriteSport);

        alert(
            `
            ${finalMessage.birthYear}
            ${finalMessage.livingCity}
            ${finalMessage.favoriteSport}
            `
        );
    });
}

showFinalMessage();