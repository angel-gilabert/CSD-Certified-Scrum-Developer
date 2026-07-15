const display = document.getElementById('display');
let currentValue = '0';
let storedValue = null;
let pendingOperator = null;
let waitingForNextValue = false;

function updateDisplay() {
  display.textContent = currentValue;
}

function clearAll() {
  currentValue = '0';
  storedValue = null;
  pendingOperator = null;
  waitingForNextValue = false;
  updateDisplay();
}

function appendNumber(value) {
  if (waitingForNextValue) {
    currentValue = value;
    waitingForNextValue = false;
  } else {
    currentValue = currentValue === '0' ? value : currentValue + value;
  }
  updateDisplay();
}

function appendDecimal() {
  if (waitingForNextValue) {
    currentValue = '0.';
    waitingForNextValue = false;
  } else if (!currentValue.includes('.')) {
    currentValue += '.';
  }
  updateDisplay();
}

function toggleSign() {
  currentValue = currentValue.startsWith('-') ? currentValue.slice(1) : `-${currentValue}`;
  updateDisplay();
}

function performOperation(nextOperator) {
  const inputValue = parseFloat(currentValue);
  if (storedValue === null) {
    storedValue = inputValue;
  } else if (pendingOperator) {
    storedValue = calculate(storedValue, inputValue, pendingOperator);
  }
  pendingOperator = nextOperator;
  waitingForNextValue = true;
  updateDisplay();
}

function calculate(firstValue, secondValue, operator) {
  switch (operator) {
    case '+': return firstValue + secondValue;
    case '-': return firstValue - secondValue;
    case '*': return firstValue * secondValue;
    case '/': return secondValue === 0 ? 'Error' : firstValue / secondValue;
    default: return secondValue;
  }
}

function equals() {
  if (!pendingOperator || storedValue === null) return;
  const inputValue = parseFloat(currentValue);
  const result = calculate(storedValue, inputValue, pendingOperator);
  currentValue = String(result);
  storedValue = null;
  pendingOperator = null;
  waitingForNextValue = false;
  updateDisplay();
}

function handlePercent() {
  currentValue = String(parseFloat(currentValue) / 100);
  updateDisplay();
}

document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', () => {
    const action = button.dataset.action;
    const value = button.dataset.value;
    const op = button.dataset.op;

    if (value !== undefined) {
      if (value === '.') {
        appendDecimal();
      } else {
        appendNumber(value);
      }
      return;
    }

    switch (action) {
      case 'clear': clearAll(); break;
      case 'delete': currentValue = currentValue.length <= 1 ? '0' : currentValue.slice(0, -1); updateDisplay(); break;
      case 'percent': handlePercent(); break;
      case 'equals': equals(); break;
      case 'toggle-sign': toggleSign(); break;
      default: if (op) performOperation(op);
    }
  });
});

updateDisplay();
