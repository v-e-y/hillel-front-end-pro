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
 * @param {Array<Function>} validator - Validator functions
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

    if (!answer) {
        return declineToAnswer();
    }

    if (Array.isArray(validator)) {
        for (let i = 0; i < validator.length; i++) {
            if (!validator[i](answer)) {
                return askQuestion(...arguments);
            }
        }
    }

    if (middleware) {
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
function fillUser() {
    askQuestion(
        (answer) => {user.birthYear = answer}, 
        questions.birthYear,
        [validateNumber, validateYear],
        () => alert('It is a pity that you did not want to enter your birth year'),
        [parseNumber]
    );

    askQuestion(
        (answer) => {user.livingCity = answer}, 
        questions.livingCity,
        [validateString],
        () => alert('It is a pity that you did not want to enter your living city')
    );

    askQuestion(
        (answer) => {user.favoriteSport = answer}, 
        questions.favoriteSport,
        [validateString],
        () => alert('It is a pity that you did not want to enter your favorite sport')
    );

    return true;
}

if (fillUser()) {
    /** @var string message */
    let message = '';

    if (user.birthYear !== null) message += `You were born in ${user.birthYear}`;
    if (user.livingCity !== null) message += '\n' + resolvePlaceMessage(user.livingCity);
    if (user.favoriteSport !== null) message += '\n' + resolveFavoriteSportMessage(user.favoriteSport);

    alert(message || 'You did not answer any question');
}