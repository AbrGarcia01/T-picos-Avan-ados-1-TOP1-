/* // ----

// Utilizando métodos de objetos 

// Altera o retorno do método do "slogan"
player.slogan = ()  => 'Eu quero, eu posso!';

// Adicionar um novo movimento 

player.attack = (type) => `Uga, uga.... tima uma ${tyoe}! Grrrrr.....`;

console.log(player.attack('porretada'));
player.slogan();
console.log(player.slogan());

// ---

// Estrutura de repetição: for

// contar de 0 à 4. */

for(let i = 0; i <= 4; ++i )
{
    console.log(`O valor de i é: ${i}`);
}

//---

// Iterar sobre um array

let itens = ['moeda', 'Espada', 'pocao', 'chave'];

for (let i = 0; i < itens.length; i++)
{
    console.log(`Item ${i + 1}: ${Itens[i]}`);
}


// --- 

// Estrutura de repetição While

let contador = 0;

while(contador < 11) 
{
    console.log(`Contador: ${contador}`);
    contador++;
}


// valor escolhido
const valorEscolhido = 5;

//faixa de valores 
const faixa =  [0, 10];

//total de tentativas
let tentativas = 0;

// numero a ser sorteado 
let numeroSorteado = null;

// Loop para tentar adivinhar o valor escolhido.
do {

    //Incrementar o total de tentativas
    tentativas++;

    // Sorteia um valor aleatorio, dentro da faixa de valores
    numeroSorteado = Math.floor(Math.random() *(faixa[1] - faixa[0] + 1)) + faixa[0];

    // Exibir no console 
    console.log(`Tentativas ${tentativas}: ${numeroSorteado}`);

}while(numeroSorteado !== valorEscolhido);

//exibir total de tentativas que foram utilizadas
console.log(`Encontrou o número em ${tentativas} tentativas`);


//estrutura de repetição: for...in

//Exibe as propriedades do objeto "player"
for (let propriedades in player){
    console.log(`${player.name}: ${player[propridades]}`);
}

//Estrutura de repeticao: for...for

const numeroSorteados = [4, 12, 24, 32, 34, 53];

// Loop para exibir os elementos do array
for(let numero of numeroSorteados)
{
    consolet.log(`Numero Sorteado`)

}