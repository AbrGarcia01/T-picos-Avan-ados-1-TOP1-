// Operador spread => ...
const items = [ 'Moeda', 'Espada', 'Poção'];
const enemies = [ 'Ogro', 'Monstro', 'Calango'];

// Gera um novo array
const newArray = [...items, ...enemies];
console.log(newArray);


// ...

// Copia rasa dos elementos de um array

//Array original
const original = [1, 2, 3];

// Realiza a copia do array
const copia = [...original];

console.log(copia);

// Mesclagem das propriedades de objetos

//Objetos originais 
const enemy = {name: 'Tiozão', health: 100};
const enemy = {type: 'Ogro', power: 50};

// Cria um novo objeto 
const newEnemy = {...enemy, ...type};

console.log(newEnemy);

// ---

// Cria um novo objeto com propriedades 

// Objeto Original
let Item = {id: 1, name: 'Moeda', points: 2};

// Atualiza os dados do objeto original
item = {...item, points: 10};

console.log(Item);

// ---

// Passagem de argumentos para funções 

// Array original
const numeros = [10, 5, 25];

//Equivalente a => Math.max(10, 5, 25)
const maximo = Math.max(...numeros);

console.log(maximo);

// ---

// Separação de Valores

// String original
const palavra = 'IFSP-CJO';

// Separa e armazena as letras em um array 
const letras = [...palavra];

console.log(letras);

// ---

// Converte um Set para um Array 

// Array original, com valores duplicados 
const duplicados = [1, 2, 2, 3, 4, 4, 5];

// Gera um conjunto de valores únicos 
const temp = new Set(duplicados);

// Converte o Set para Array 
const unicos = [...temp];

console.log(unicos);

// ---

// Converte um Map para um Array 

// Map Original
const meuMap = new Map([
    ['Moeda', 2], 
    ['Estrela', 5]
])

// Separar os valores do Map
const dadosMap = [...meuMap];
const chavesMap = [...meuMap.keys()];
const valoresMap = [...meuMap.values()];

// Exibe o resultado
console.log(dadosMap);
console.log(chavesMap);
console.log(valoresMap);