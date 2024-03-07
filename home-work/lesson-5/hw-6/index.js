"use strict";

const dataSet = require("./data-set");

/**
 * Get values by condition
 * @param {Array<Object>} dataResource
 * @param {String} propName
 * @param {Function} condition
 * @returns {Array<String|Boolean|Number>} values
 */
function getValuesByCondition(dataResource, propName, condition) {
    return dataResource.filter(condition).map((item) => item[propName]);
}

console.log(
    getValuesByCondition(
        dataSet,
        'phone',
        (item) => Number(item.balance.replace(/[^0-9\.-]+/g,"")) > 2000
    )
);