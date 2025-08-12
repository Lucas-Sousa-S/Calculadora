const resultInput = document.getElementById('result');

function appendNumber(number) {
    resultInput.value += number;
}

function appendOperator(operator) {
    const lastChar = resultInput.value.slice(-1);
    if (lastChar !== '' && !isOperator(lastChar)) {
        resultInput.value += operator;
    }
}

function clearDisplay() {
    resultInput.value = '';
}
 
function deleteLast() {
    resultInput.value =  resultInput.value.slice(0, -1); 
}

function calculateResult() {
    try {
        const expression = resultInput.value;
        if (expression) {
            const result = eval(expression);
            resultInput.value = result;
        }
    } catch (error) {
        resultInput.value = 'Erro';
    }
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}