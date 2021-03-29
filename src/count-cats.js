const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    return matrix.reduce((acc, el) => {
        el == '^^' ? acc++ : acc
        if (Array.isArray(el)) acc += countCats(el)
        return acc
    }, 0)
};