"use strict";

const dataSet = require("./data-set");

/**
 * Get values by condition
 * @param {String} propName
 * @param {Function} condition
 * @returns {Array<String|Boolean|Number>} values
 */
function getValuesByCondition(propName, condition) {
    return dataSet.filter(condition).map((item) => item[propName]);
}

console.log(
    getValuesByCondition(
        'phone',
        (item) => Number(item.balance.replace(/[^0-9\.-]+/g,"")) > 2000
    )
);