// Aula 03/teste.js

/*
comentario 
de varias 
linhas
*/

// ---

// Saida padrao
console.log();

// Declaracao De Variaveis

// Escopo de bloco: mutável
let texto = "Ola mundo";
let numero = 11;

// Escopo de bloco: imutável
const PI = 3.14;

// Escopo de funcao ou global (nao aconselhado)
var nomeIfsp = "IFSP";

// ---

// Tipos primitivos
let nome = "Augusto"; // string
let estamina = 100; // number
let podeVoar = false; // boolean
let item = null; //null
let fraqueza; //undefined

console.log("Nome: " + nome);
console.log("Estamina: " + estamina);
console.log("Item: " + item);
console.log("Fraqueza: " + fraqueza);
console.log();

// ---

// Operador typeof (tipo da variavel)
console.log("Nome: " + typeof(nome));
console.log("Estamina: " + typeof(estamina));
console.log("Item: " + typeof(item));
console.log("Fraqueza: " + typeof(fraqueza));
console.log();

// ---

// operaçoes matematicas
let a = 10;
let b = 5;
let c = 3;

console.log("Soma:", a + b);
console.log("Subtracao:", a - b);
console.log("Multiplicacao:", a * b);
console.log("Divisao:", a / b);
console.log("Modulo:", a % b);
console.log("Exponenciacao:", c ** 2);
console.log();

a++; // Incremento
b--; // Decremento

// ---

// Operador ternario (?)

// Vida inicial
let health = 100;
console.log(`Vida: ${health}`);
console.log();

// Status do jogo, de acordo com a vida do player
let gameStatus = (health > 0) ? "Playing" : "Game Over";

console.log("Estado do jogo: " + gameStatus);
console.log();

// ---

// Funcao com valor padrao

// Funcao simples
function saudacao(nome) {
    return `Ola, ${nome}!`;
}

let mensagem = saudacao(nome);

console.log(mensagem);
console.log();

// ---

let dano = 10;

function saudacao2(nome = "visitante") {
    return `Ola, ${nome}!`;
}

let mensagem1 = saudacao2();
let mensagem2 = saudacao2("Augusto");

console.log(mensagem1);
console.log(mensagem2);
console.log();

// ---

// Expressao de funcao

// Cria a funcao e atribui seu retorno a variavel
const calcularDano = function(health, dano) {
    return health - dano;
}

health = calcularDano(health, dano);

console.log(`Levou ${dano} de dano`);
console.log(`Total de vida: ${health}`);
console.log();

// ---

// Arrow function (simplificada)

// Se a funcao tem apenas uma instrucao,
// ela pode ser simplificada
const subtrair = (a, b) => a - b;

// Funcao para somar dois valores passados como parametros

const somar = (a, b) => {
    return a + b;
}

/* Equivalente a funcao abaixo
function somar(a, b) {
    return a + b;
}
*/

console.log(`Soma: ${somar(10, 5)}`);
console.log(`Subtracao: ${subtrair(10, 5)}`);
console.log();

// ---

// Estrutura de decisao: if ... else

if (health > 0) {
    console.log(`Vida: ${health}`);
} else {
    console.log("Game Over!");
}

console.log();

// ---

// Estrutura de decisao aninhada

// Decrementa o total de vidas
health -= 1;
console.log(`Levou 1 de dano`);

if (health > 0) {
    console.log(`Player esta vivo: ${health}`);
} else if (health > 0 && health < 2) {
    console.log(`Morrendo: ${health}`);
} else {
    console.log(`Morto: ${health}`);
}

console.log();

// ---

// Estrutura de desicao: switch .. case

// Estado do player
const playerState = 'idle';

switch(playerState) {

    case 'walk':
        console.log("Player ta andando...");
        break;

    case 'jump':
        console.log("Player ta pulando...");
        break;

    default:
        console.log("Player ta parado...");
        break;
}

console.log();

// ---

// Arrays (indice do array comeca em 0)

// Literal de array: maneira 1 (mais comum)
let frutas = ['Maça', 'Banana', 'Laranja'];
let numeros = [1, 2, 3, 4, 5];
let misto = [10, 'IFSP', true, null];

// Literal de array: maneira 2 (construtor de array)
let cores = new Array('vermelho', 'verde', 'azul');

// ---

// Acessando os elementos do array
console.log(frutas[0]);
console.log(frutas[2]);
console.log();

// Modificando um elemento
console.log('Array modificado');
frutas[1] = 'Morango';

console.log(frutas);
console.log();

// ---

// Propriedades e metodos utilizados em arrays
frutas = ['Maça', 'Banana', 'Laranja'];

console.log('Array original');
console.log(frutas);
console.log();

// length()
console.log(`Total frutas: ${frutas.length}`);
console.log();

// push()
frutas.push('Uva');
console.log(frutas);

// pop()
let ultimaFruta = frutas.pop();
console.log(`Ultima fruta: ${ultimaFruta}`);
console.log();

// unshift()
frutas.unshift('Pera');
console.log(frutas);

// shift()
let primeiraFruta = frutas.shift();
console.log(`Primeira fruta: ${primeiraFruta}`);
console.log();

// indexOf()
console.log('Array original');
console.log(frutas);

console.log(`Posicao da laranja: ${frutas.indexOf('Laranja')}`);
console.log(`Posicao do abacaxi: ${frutas.indexOf('Abacaxi')}`);
console.log();

// slice()
console.log('Array copiado sem modificaçao');
let algumasFrutas = frutas.slice(0, 2);

console.log(algumasFrutas);
console.log();
console.log('Array original');
console.log(frutas);
console.log();

// splice()
frutas.splice(1, 1);

console.log(frutas);

frutas.splice(1, 0, 'Kiwi', 'Manga');

console.log(frutas);