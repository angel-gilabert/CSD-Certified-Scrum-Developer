const test = require('node:test');
const assert = require('node:assert/strict');
const { fizzBuzz, fizzBuzzSequence, fizzBuzzRange, fizzBuzzZeroToHundred } = require('./fizzbuzz');

test('devuelve el mismo número cuando no es múltiplo de 3 ni de 5', () => {
  assert.equal(fizzBuzz(1), '1');
  assert.equal(fizzBuzz(2), '2');
  assert.equal(fizzBuzz(4), '4');
});

test('devuelve Fizz para múltiplos de 3', () => {
  assert.equal(fizzBuzz(3), 'Fizz');
  assert.equal(fizzBuzz(6), 'Fizz');
});

test('devuelve Buzz para múltiplos de 5', () => {
  assert.equal(fizzBuzz(5), 'Buzz');
  assert.equal(fizzBuzz(10), 'Buzz');
});

test('devuelve FizzBuzz para múltiplos de 3 y 5', () => {
  assert.equal(fizzBuzz(0), 'FizzBuzz');
  assert.equal(fizzBuzz(15), 'FizzBuzz');
  assert.equal(fizzBuzz(30), 'FizzBuzz');
});

test('lanza error si el valor no es un entero no negativo', () => {
  assert.throws(() => fizzBuzz(-1), /entero no negativo/);
  assert.throws(() => fizzBuzz(1.5), /entero no negativo/);
});

test('genera la secuencia completa hasta el límite indicado', () => {
  assert.deepEqual(fizzBuzzSequence(5), ['1', '2', 'Fizz', '4', 'Buzz']);
  assert.deepEqual(fizzBuzzSequence(15), [
    '1',
    '2',
    'Fizz',
    '4',
    'Buzz',
    'Fizz',
    '7',
    '8',
    'Fizz',
    'Buzz',
    '11',
    'Fizz',
    '13',
    '14',
    'FizzBuzz',
  ]);
});

test('genera el rango de 0 a 100 con las reglas de FizzBuzz', () => {
  const sequence = fizzBuzzZeroToHundred();
  assert.equal(sequence.length, 101);
  assert.equal(sequence[0], 'FizzBuzz');
  assert.equal(sequence[3], 'Fizz');
  assert.equal(sequence[5], 'Buzz');
  assert.equal(sequence[15], 'FizzBuzz');
  assert.equal(sequence[100], 'Buzz');
  assert.equal(sequence[1], '1');
  assert.equal(sequence[2], '2');
  assert.equal(sequence[4], '4');
});

test('genera la secuencia completa desde 0 hasta 100 inclusive', () => {
  const sequence = fizzBuzzRange(0, 100);
  assert.deepEqual(sequence, fizzBuzzZeroToHundred());
});
