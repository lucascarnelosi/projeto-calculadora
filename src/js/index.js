const result = document.querySelector('.result-number');
const resetKey = document.getElementById('reset');
const numbers = document.querySelectorAll('.number');
const moreLess = document.querySelector('.more-less');
const operators = document.querySelectorAll('.op');
const equalSign = document.getElementById('equal-sign');
const point = document.getElementById('dot')

function adicionarDigito(digit) {
    if (typeof(digit) == 'string') {
        result.innerHTML += digit
        if (result.innerHTML.includes('..')) {
            result.innerHTML = 0
        }
    } else if (result.innerHTML == '0') {
        result.innerHTML = digit
    } else {
        result.innerHTML += digit
    }
}

function trocaSinal() {
    if (result.innerHTML.includes('-')) {
        result.innerHTML += ''
    } else {
        result.innerHTML = `-${result.innerHTML}`
    }
}

resetKey.addEventListener('click', () => result.innerHTML = 0)

moreLess.addEventListener('click', () => {
    trocaSinal()
})

numbers.forEach(number => {
    number.addEventListener('click', () => {
        adicionarDigito(Number(number.innerHTML))        
    })
})

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        adicionarDigito(operator.innerHTML)
    })
})

point.addEventListener('click', () => {
    adicionarDigito(point.innerHTML)
})

equalSign.addEventListener('click', () => {
    result.innerHTML = eval(result.innerHTML)
})