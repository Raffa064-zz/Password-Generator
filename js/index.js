const lowerCaseInput = document.querySelector('#lowercase-letters')
const upperCaseInput = document.querySelector('#uppercase-letters')
const numbersInput = document.querySelector('#numbers')
const symbolsInput = document.querySelector('#symbols')
const sizeInput = document.querySelector('#size')
const result = document.querySelector('#result')
const generate = document.querySelector('#generate')

generate.onclick = generatePassword

function generatePassword() {
    availableChars = []
    addIfOn(lowerCaseInput.checked, availableChars, 'abcdefghijklmnopqrstuvwxyz'.split(''))
    addIfOn(upperCaseInput.checked, availableChars, 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split(''))
    addIfOn(numbers.checked, availableChars, '0123456789'.split(''))
    addIfOn(symbolsInput.checked, availableChars, '@#!_ç'.split(''))
    
    if (availableChars.length === 0) {
        result.innerHTML = '<span class="error">Add at least one charset</span>'
        return
    }
    
    var password = ''
    for (let i = 0; i < parseInt(sizeInput.value); i++) {
        password += availableChars[parseInt(Math.random() * availableChars.length)]
    }
    
    result.innerText = password;
}

function addIfOn(condition, array, value) {
    console.log(condition)
    if (condition) {
        for (let index in value) {
            array.push(value[index])
        }
    }
}