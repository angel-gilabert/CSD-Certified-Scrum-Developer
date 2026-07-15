function fizzBuzz(number) {
  if (!Number.isInteger(number) || number < 0) {
    throw new TypeError('El valor debe ser un entero no negativo');
  }

  if (number % 15 === 0) {
    return 'FizzBuzz';
  }

  if (number % 3 === 0) {
    return 'Fizz';
  }

  if (number % 5 === 0) {
    return 'Buzz';
  }

  return String(number);
}

function fizzBuzzSequence(limit) {
  if (!Number.isInteger(limit) || limit < 1) {
    throw new TypeError('El límite debe ser un entero positivo');
  }

  return Array.from({ length: limit }, (_, index) => fizzBuzz(index + 1));
}

function fizzBuzzRange(start, end) {
  if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < start) {
    throw new TypeError('El rango debe ser válido');
  }

  return Array.from({ length: end - start + 1 }, (_, index) => fizzBuzz(start + index));
}

function fizzBuzzZeroToHundred() {
  return fizzBuzzRange(0, 100);
}

const fizzBuzzApi = {
  fizzBuzz,
  fizzBuzzSequence,
  fizzBuzzRange,
  fizzBuzzZeroToHundred,
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = fizzBuzzApi;
}

if (typeof window !== 'undefined') {
  window.fizzBuzzApi = fizzBuzzApi;
  window.fizzBuzz = fizzBuzz;
  window.fizzBuzzSequence = fizzBuzzSequence;
  window.fizzBuzzRange = fizzBuzzRange;
  window.fizzBuzzZeroToHundred = fizzBuzzZeroToHundred;
}
