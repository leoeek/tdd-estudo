import { expect } from 'chai';

describe('Main', () => {
    let arr;

    //roda antes
    before(() => {
        console.log('Iniciando...');
    })

    //roda após finalizar
    after(() => {
        console.log('...Finalizando')
    });

    //roda sempre antes de cada bloco;
    beforeEach(() => {
        arr = [1, 2, 3];
    });

    //roda sempre após cada bloco;
    afterEach(() => {

    });

    //testa o tipo da variavel;
    it('should be an array', () => {
        expect(arr).to.be.a('array');
    })

    it('should have a size of 4 when push another value to the array', () => {
        arr.push(4);
        expect(arr).to.have.lengthOf(4);
    });

    it('should remove the value 3 when use pop in the array', () => {
        arr.pop();
        expect(arr).to.not.include(3);
    });

    it('should return true when pop 3 from the array', () => {
        expect(arr.pop() === 3).to.be.true;
    })

    it('should have a size of 2 when pop a value from the array', () => {
        arr.pop();
        expect(arr).to.have.lengthOf(2);
    });

});