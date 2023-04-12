'use strict'

const rotate = str => {
    const rotatedWordArr = []
    let currentWord = str

    if (str === '') return rotatedWordArr

    for (let i = 1; i < str.length; i++) {
        let lastLetter = ''
        let rotatedWord = ''
        
        for (let j = 0; j < currentWord.length; j++) {
            if (!j) {
                lastLetter += currentWord[j]
                continue
            }
            rotatedWord += currentWord[j]
        }

        rotatedWord += lastLetter
        rotatedWordArr.push(rotatedWord)
        currentWord = rotatedWord
    }

    rotatedWordArr.push(str)
    
    return rotatedWordArr
}

const str = 'Hello'

console.log(rotate(str))