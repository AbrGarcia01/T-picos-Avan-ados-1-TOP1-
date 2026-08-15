//Demonstracao do uso de sets

// Cria um set vazio
const meuSet = new Set();

// Cria um novo Set utilizando um array
const setComArray = new Set([1, 2, 'Maça', 2, 'Maça', 'Uva']);

//Exibe os dados 
console.log(meuSet);
console.log(setComArray);

//adiciona alguns itens no conjunto 'meuSet'

meuSet.add(10);
meuSet.add(20);
meuSet.add(10); // Não adiciona 
meuSet.add('Maca');

console.log(meuSet);

// Verifica se alguns itens estao armazenados em 'meuSet'

console.log(meuSet.has(10));
console.log(meuSet.has(30));
console.log(meuSet.has('Maca'));

// Remover alguns itens armazenados em 'meuSet'

console.log(meuSet.delete(10));
console.log(meuSet.delete(50));
console.log(meuSet.delete('Uva'));

// Exibe os dados
console.log(meuSet);

// Insere elementos em cadeia

meuSet.add(5).add(15).add('Morango'); // um método
/*
meuSet.add(5).
add(15).
add('Morango'); // outro método
*/

// Remover todos os elementos do conjunto
meuSet.clear();

// Cria um novo conjunto 

const frutas = new Set(['Maçã', 'Banana', 'Uva']);

// Exibe o total de elementos do conjunto: for..of
console.log(`Total de elementos: ${frutas.size}`);

for (const fruta of frutas) 
{
    console.log(fruta);
}

// Exibe o total de elementos do conjunto: values()
for (const valor of frutas.values()) 
{
    console.log(valor);
}

// Exibe o total de elementos do conjunto: entries()
for (const entrada of frutas.entries()) 
{
    console.log(entrada);
}