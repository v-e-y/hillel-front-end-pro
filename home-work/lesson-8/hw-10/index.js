'use strict';

/**
 * Ladder
 * @param {Object} ladder
 */
const ladder = {
    /** @var {Number} step Count of steps */
    step: 0,

    /**
     * Inc step
     * @returns {Object} this
     */
    up() {
        this.step++;
        return this;
    },

    /**
     * Dec step
     * @returns {Object} this
     * @throws {Error} - if step is already 0
     */
    down() {
        if (this.step === 0) throw new Error('Step is already 0!');

        this.step--;
        return this;
    },

    /**
     * Show step
     * @returns {Object} this
     */
    showStep() {
        console.log(this.step);
        return this;
    }
};

// ladder.up().up().down().showStep(); // 1
// ladder.up().up().down().down().showStep(); // 0
ladder.up().up().down().down().up().up().showStep(); // 2