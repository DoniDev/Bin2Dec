const form = document.querySelector('#binary-form');
const result = document.querySelector('.result');

form.addEventListener('submit', convertToDecimal);

function calculateBinaryToDecimal(number) {
    return parseInt(number, 2)
}

function raiseAlert(text, time) {
    document.querySelector('.alert').textContent = text
    document.querySelector('.alert').style.display = 'block';
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
        form.reset();
    }, time)
}

function convertToDecimal(e) {
    e.preventDefault();
    let input = document.querySelector('#input').value;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === '1' || input[i] === '0') {
            // console.log('Correct')
        } else {
            raiseAlert('Value have should be either 0 or 1', 1000);
            return;
        }
    }

    if (input.length > 8) {
        raiseAlert('Value have 8 digits length', 1000)
    } else {
        result.parentElement.style.display = 'block'
        result.textContent = calculateBinaryToDecimal(input);

        setTimeout(function () {
            result.parentElement.style.display = 'none'
        }, 1500)

        form.reset();
    }
}