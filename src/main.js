const sum = (n1, n2) => n1 + n2;
const sub = (n1, n2) => n1 - n2;
const mult = (n1, n2) => n1 * n2;
const div = (n1, n2) => (n2 === 0) ? 'Não permitido divisão por zero' : n1 / n2;


const FizzBuzz = (num) => {
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';

    return num;
}

export { sum, sub, mult, div, FizzBuzz };