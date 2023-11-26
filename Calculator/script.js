let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        const result = evaluateExpression(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Kļūda';
    }
}

function evaluateExpression(expression) {

    const regex = /(\d+(\.\d+)?)|([\+\-\*\/])/g;
    const tokens = expression.match(regex);

   
    const numbers = tokens.filter(token => !isNaN(token));
    const operators = tokens.filter(token => isNaN(token));

  
    let result = parseFloat(numbers[0]);

    for (let i = 0; i < operators.length; i++) {
        const num = parseFloat(numbers[i + 1]);

        if (operators[i] === '+') {
            result += num;
        } else if (operators[i] === '-') {
            result -= num;
        } else if (operators[i] === '*') {
            result *= num;
        } else if (operators[i] === '/') {
            if (num !== 0) {
                result /= num;
            } else {
                throw new Error('Dalīšana ar 0');
            }
        }
    }

    return result;
}
