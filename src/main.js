const sum = (n1, n2) => n1 + n2;
const sub = (n1, n2) => n1 - n2;
const mult = (n1, n2) => n1 * n2;
const div = (n1, n2) => (n2 === 0) ? 'Não permitido divisão por zero' : n1 / n2;


const FizzBuzz = (num) => {
    if (num === 0) return 0;
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';

    return num;
}

const Calculadora = (candidato) => {
    const { xp, cursos, artigos } = candidato;
    
    //Base de calculo
    const peso = {
        xp: 5,
        cursos: 2,
        artigos: artigos > 10 ? 2 : 1,
    };

    const values    = Object.values(candidato);
    let notaZerada  = values.find(valor => valor == 0);
    if (notaZerada === 0) return 0;
    
    let nota = (xp * peso.xp) + (cursos * peso.cursos) + (artigos * peso.artigos);
    return parseInt(nota);
}

const CalculadoraGeral = (candidatos) => {
    // const notaGeral = candidatos.reduce((total, candidato) => {
    //     return total + Calculadora(candidato)
    // }, 0);

    const notas = [];
    candidatos.forEach(candidato => {
        notas.push(Calculadora(candidato));
    });
    return notas.sort((a, b) => b - a);
}

const TesteTravaDeploy = () => {
    return 'só no teste';
}

export { sum, sub, mult, div, FizzBuzz, Calculadora, CalculadoraGeral };