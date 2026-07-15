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

function fizzBuzzZeroToHundred() {
  return Array.from({ length: 101 }, (_, index) => fizzBuzz(index));
}

module.exports = {
  fizzBuzz,
  fizzBuzzZeroToHundred,
};
