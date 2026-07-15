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

module.exports = {
  fizzBuzz,
  fizzBuzzSequence,
  fizzBuzzRange,
};
