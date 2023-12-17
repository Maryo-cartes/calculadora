//Declaramos variables
var operandoa;
var operandob;
var operacion;

function init(){
    const calculator = {
        displayValue: '0',
        firstOperand: null,
        waitingForSecondOperand: false,
        operator: null,
    };

    function updateDisplay() {
        const display = document.querySelector('.calculator-screen');
        display.value = calculator.displayValue;
    }

    updateDisplay();

    function inputDigit(digit) {
        const { displayValue, waitingForSecondOperand } = calculator;
    
        if (waitingForSecondOperand === true) {
            calculator.displayValue = digit;
            calculator.waitingForSecondOperand = false;
        } else {
            calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
        }
    }

    function inputDecimal(dot) {
        // If the `displayValue` does not contain a decimal point
        if (!calculator.displayValue.includes(dot)) {
        // Append the decimal point
        calculator.displayValue += dot;
        }
    }

    function handleOperator(nextOperator) {
        if (nextOperator == 'sqrt') {
            calculator.operator = nextOperator;
        }
        const { firstOperand, displayValue, operator } = calculator
        const inputValue = parseFloat(displayValue);

        if (nextOperator == 'sqrt') {
            if (firstOperand == null) {
                calculator.firstOperand = displayValue;
            }
            const currentValue = calculator.firstOperand || 0;
            const result = performCalculation[operator](currentValue, 0);
            calculator.displayValue = String(result);
        } else if (operator && calculator.waitingForSecondOperand) {
            calculator.operator = nextOperator;
            return;
        }
    
        if (firstOperand == null) {
            calculator.firstOperand = inputValue;
        } else if (operator) {
            const currentValue = firstOperand || 0;
            const result = performCalculation[operator](currentValue, inputValue);

            calculator.displayValue = String(result);
            calculator.firstOperand = result;
        }
    
        calculator.waitingForSecondOperand = true;
        calculator.operator = nextOperator;
    }

    const performCalculation = {
        '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    
        '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    
        '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    
        '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    
        '=': (firstOperand, secondOperand) => secondOperand,

        'pow': (firstOperand, secondOperand) => Math.pow(firstOperand, secondOperand),

        'sqrt': (firstOperand, secondOperand) => Math.sqrt(firstOperand)
    };

    function resetCalculator() {
        calculator.displayValue = '0';
        calculator.firstOperand = null;
        calculator.waitingForSecondOperand = false;
        calculator.operator = null;
    }

    const keys = document.querySelector('.calculator-keys');
    keys.addEventListener('click', (event) => {
        const { target } = event;
        // console.log(target);
        // console.log(target.id);
        if (!target.matches('button')) {
            return;
        }

        if (target.classList.contains('operator') && target.id == 'raiz') {
            // console.log('Operador raiz');
            handleOperator(target.value, true);
            updateDisplay();
            return;
        }
    
        if (target.classList.contains('operator')) {
            console.log('Operador');
            handleOperator(target.value);
            updateDisplay();
            return;
        }
    
        if (target.classList.contains('decimal')) {
            inputDecimal(target.value);
            updateDisplay();
            return;
        }
    
        if (target.classList.contains('all-clear')) {
            resetCalculator();
            updateDisplay();
            return;
        }
    
        inputDigit(target.value);
        updateDisplay();
    });

   }