import { expect } from 'chai';
import { FizzBuzz } from '../src/main';

/**
 * Desafio: FizzBuzz
 * Se o número for divisível por 3 -> retorna 'Fizz [ x ]
 * Se o número for divisível por 5 -> retorna 'Buzz [ x ]
 * Se o número for divisível por 3 e 5 -> retorna 'FizzBuzz [ x ]
 * Se o número não for múltiplo de nada -> retorna o número [ x ]
 */

describe('Fizz Buzz', () => {
   
    it('should return `Fizz` when multiple of 3', () => {
        expect(FizzBuzz(3)).to.be.equal('Fizz');
        expect(FizzBuzz(6)).to.be.equal('Fizz');
        expect(FizzBuzz(7)).to.not.be.equal('Fizz');
    });

    it('should return `Buzz` when multiple of 5', () => {
        expect(FizzBuzz(5)).to.be.equal('Buzz');
        expect(FizzBuzz(10)).to.be.equal('Buzz');
        expect(FizzBuzz(8)).to.not.be.equal('Buzz');
    });

    it('should return `FizzBuzz` when multiple of 3 and 5', () => {
        expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
    });

    it('should return the number when non-multiple of', () => {
        expect(FizzBuzz(7)).to.be.equal(7);
    })
   
});