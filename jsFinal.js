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
        const { firstOperand, displayValue, operator } = calculator
        const inputValue = parseFloat(displayValue);
    
        if (operator && calculator.waitingForSecondOperand)  {
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
    
        '=': (firstOperand, secondOperand) => secondOperand
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
        if (!target.matches('button')) {
            return;
        }
    
        if (target.classList.contains('operator')) {
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

    //variables
    /*var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');

    //Eventos de click
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent  + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent  + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent  + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent  + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent  + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent  + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent  + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent  + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent  + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent  + "0";
    }
    reset.onclick = function(e){
        resetear();
    }
    suma.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function(e){
        operandob = resultado.textContent;
        resolver();
    }*/
}

/*function limpiar(){
    resultado.textContent = "";
}
  
function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver(){
    var res = 0;
    switch(operacion){
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
    
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
    
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
    
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    resetear();
    resultado.textContent = res;
}

function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
}*/