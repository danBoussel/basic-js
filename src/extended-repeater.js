const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

    let out = ''
    if (options.addition !== undefined) {
        for (i = 1; i < options.additionRepeatTimes; i++) {
            out += options.addition;
            if (options.additionSeparator !== undefined) {
                out += options.additionSeparator;
            } else out += options.additionSeparator + '|'
        }
        out += options.addition;
    }
    let = outStr = ''
    let = finalStr = ''
    outStr = str + out

    for (i = 1; i < options.repeatTimes; i++) {
        finalStr += outStr;
        if (options.separator !== undefined) {
            finalStr += options.separator
        } else finalStr = finalStr + '+'

    }
    finalStr += outStr;
    return finalStr;
};