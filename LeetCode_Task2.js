// https://leetcode.com/problems/counter-ii/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

var createCounter = function(init) {
    let value = init;

    return {
        increment: function() {
            value += 1;
            return value;
        },
        decrement: function() {
            value -= 1;
            return value;
        },
        reset: function() {
            value = init;
            return value;
        }
    };
};

const counter = createCounter(5);
console.log(counter.increment()); // Output: 6
console.log(counter.reset());      // Output: 5
console.log(counter.decrement());  // Output: 4

