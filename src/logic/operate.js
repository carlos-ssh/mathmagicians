import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne);
  const two = Big(numberTwo);
  if (operation === '+') {
    try {
      return one.plus(two).toString();
    } catch (err) {
      return '0';
    }
  }
  if (operation === '-') {
    try {
      return one.minus(two).toString();
    } catch (err) {
      return '0';
    }
  }
  if (operation === 'x') {
    try {
      return one.times(two).toString();
    } catch (err) {
      return '0';
    }
  }
  if (operation === '÷') {
    try {
      return one.div(two).toString();
    } catch (err) {
      return '0';
    }
  }
  if (operation === '%') {
    try {
      return one.mod(two).toString();
    } catch (err) {
      return '0';
    }
  }
  throw Error(`Unknown operation '${operation}'`);
}
