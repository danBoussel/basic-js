const CustomError = require("../extensions/custom-error");

// module.exports = function createDreamTeam(members) {
// const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
// if(!Array.isArray(members)) return false
//  return arr.filter(el=>typeof el ==='string')
//  .map((el)=>el.replace(/\s/g, '')[0].toUpperCase()).sort().join('')
// }

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) return false
    const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    const firsCharsArr = members.filter(el => typeof el === 'string').map((el) => el.replace(/\s/g, '')[0].toUpperCase())
    let j = Math.floor(firsCharsArr.length / 1.2)
    while (j > 0) {
        for (let i = 0; i + j < firsCharsArr.length; i++) {
            if (alphabet.indexOf(firsCharsArr[i]) > alphabet.indexOf(firsCharsArr[i + j])) {
                let first = firsCharsArr[i + j]
                firsCharsArr[i + j] = firsCharsArr[i]
                firsCharsArr[i] = first
            }
        }
        j = Math.floor(j / 1.2)
    }
    return firsCharsArr.join('')
};