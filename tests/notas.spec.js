import { expect } from 'chai';
import { Calculadora, CalculadoraGeral } from '../src/main';

// Pesos
// xp: 5
// cursos: 2
// artigos: 1

// 1. Nota: a soma da multiplicação dos atributos pelos pesos
// 2. Caso o candidato tenha escrito mais de 10 artigos, então peso de artigos sobe para 2
// 3. Caso o candidato zere em qualquer atributo então a nota final dele será 0

// xp: 1 * 5 = 5
// cursos: 1 * 2 = 2
// artigos: 1 * 1 = 1
//          8

describe('Notas', () => {

    it('deve retornar 8 caso o candidato seja tudo 1', () => {
        const candidato = {
            xp: 1,
            cursos: 1,
            artigos: 1
        };
        expect(Calculadora(candidato)).to.be.equal(8);
    });

    it('deve retornar 99 caso o candidato seja tudo 11', ()=>{
        const candidato = {
            xp: 11, 
            cursos: 11,
            artigos: 11
        };
        
        expect(Calculadora(candidato)).to.be.equal(99);
    });

    it('deve retornar 0 caso o candidato zere em qualquer atributo', ()=>{
        const candidato = {
            xp: 11, 
            cursos: 0, 
            artigos: 11 
        }
    
        expect(Calculadora(candidato)).to.be.equal(0);
    });

    it('deve calcular a nota e ordenar da nota maior para a menor', () => {

        const candidato = {
            xp: 1,
            cursos: 1,
            artigos: 1
        }
        const candidatoFodao = {
            xp: 11,
            cursos: 11,
            artigos: 11
        }
        const candidatoZerado = {
            xp: 0,
            cursos: 0,
            artigos: 0
        }

        const listaCandidatos = [candidato, candidatoFodao, candidatoZerado];
        const listaEsperado = [99, 8, 0];

        expect(CalculadoraGeral(listaCandidatos)).to.deep.equal(listaEsperado);

    });      

});