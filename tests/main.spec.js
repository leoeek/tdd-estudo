import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main';

describe('Calc', () => {
   
    /**
     * smoke tests -> os mais simples, para verificar por exemplo se os métodos existem;
     * Interessante para utilizar em APIs, validando se a rota existe;
     */
    describe('Smoke tests', () => {

      
        it('should exist the method `sum`', () => {
            expect(sum).to.exist;
            expect(sum).to.be.a('function');
        });

        it('should exist the method `sub`', () => {
            expect(sub).to.exist;
            expect(sub).to.be.a('function');
        });
        
        it('should exist the method `mult`', () => {
            expect(mult).to.exist;
            expect(mult).to.be.a('function');
        });

        it('should exist the method `div`', () => {
            expect(div).to.exist;
            expect(div).to.be.a('function');
        });

    });

    describe('Sum', () => {
        
        it('should return 4 when `sum(2, 2)`', () => {
            expect(sum(2, 2)).to.be.equal(4);
        });

        it('should return 4 when `sub(6, 2)`', () => {
            expect(sub(6, 2)).to.be.equal(4);
        });

        it('should return -2 when `sub(4, 6)`', () => {
            expect(sub(4, 6)).to.be.equal(-2);
        });

        it('should return 15 when `mult(5, 3)`', () => {
            expect(mult(5, 3)).to.be.equal(15);
        });

        it('should return 5 when `div(10, 2)`', () => {
            expect(div(10, 2)).to.be.equal(5);
        });

        it('should return `Não permitido divisão por zero` when divide by 0', () => {
            expect(div(2, 0)).to.be.equal('Não permitido divisão por zero');
        })

    });

});