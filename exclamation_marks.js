'use strict'

const remove = str => {
    const words = str.split(' ')
    let noExclamationMarks = ''

    words.forEach(word => {
        let repetedExclamation = countRepetedChar(word, '!')

        if (repetedExclamation !== 1)
            noExclamationMarks += word

    })

    return noExclamationMarks
}

const countRepetedChar = (str, char) => {
    let count = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i] === char)
            count ++
    }
    
    return count
}

const setence1 = 'hi!'
const setence2 = 'hi! hi!'
const setence3 = 'hi! hi! hi!'
const setence4 = 'hi hi! hi!'
const setence5 = 'hi! !hi hi!'
const setence6 = 'hi! hi!! hi!'
const setence7 = 'hi! !hi! hi!'

console.log(remove(setence1))
console.log(remove(setence2))
console.log(remove(setence3))
console.log(remove(setence4))
console.log(remove(setence5))
console.log(remove(setence6))
console.log(remove(setence7))