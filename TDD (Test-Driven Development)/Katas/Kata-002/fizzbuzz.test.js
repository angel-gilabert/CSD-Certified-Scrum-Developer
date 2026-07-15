const test = require('node:test');
const assert = require('node:assert/strict');
const { fizzBuzz, fizzBuzzZeroToHundred } = require('./fizzbuzz');

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
  assert.equal(fizzBuzz(15), 'FizzBuzz');
  assert.equal(fizzBuzz(30), 'FizzBuzz');
});

test('genera la secuencia completa del 0 al 100', () => {
  const sequence = fizzBuzzZeroToHundred();
  assert.equal(sequence.length, 101);
  assert.equal(sequence[0], 'FizzBuzz');
  assert.equal(sequence[3], 'Fizz');
  assert.equal(sequence[5], 'Buzz');
  assert.equal(sequence[15], 'FizzBuzz');
  assert.equal(sequence[100], 'Buzz');
});
