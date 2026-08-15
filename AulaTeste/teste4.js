//Demonstração do uso de maps

// cria um novo map vazio 
const meuMap = new Map()

//cria um novo map, utilizando um array
const mapComArray = new Map ([
    ['name', 'Tiozão'],
    ['health', 100]
]);

// Exibe os dados
console.log(meuMap);
console.log(mapComArray);
console.log(mapComArray.get('name'));

// cria um novo map vazio
const playerMap = new Map();

// Adiciona itens no 'playerMap'
playerMap.set('id', 123);

//exibe os dados
console.log(playerMap);

playerMap.set(
    'player', {
        name: 'Tiozão',
        health: 100
    }
)

//exibe os dados
console.log(playerMap);

// Define uma função
const slogan = () => {};

// Adiciona a função no map 
playerMap.set(slogan, 'Uga, uga..... Grrrr!');

//exibe os dados
console.log(playerMap);

// Exibe o valor associado a chave 
console.log(playerMap.get('id'));
console.log(playerMap.get('player').name);
console.log(playerMap.get(slogan));

// Verifica se algumas chaves existem em 'playerMap'
console.log(playerMap.has('id'));
console.log(playerMap.has('player'));
console.log(playerMap.has('type'));

// Verifica se a chave 'player' existe e se dentro dela existe a chave 'name'
console.log(playerMap.has('player') && 'name' in playerMap.get('player'));

// Retorna o total de pares chave-valor
console.log(playerMap.size);

// Deleta a chave 'Slogan'
playerMap.delete(slogan);

//Verifica se a chave 'slogan existe 
console.log(playerMap.has('slogan'));

//Remover todos os elementos do Map
playerMap.clear();

// Retorna o total de pares chave-valor
console.log(playerMap.size);

// --- 

// Cria um novo Map Vazio 
const enemies = new Map();

// Adiciona alguns inimigos 
enemies.set(1, {name: 'Tio', type: 'Ogro'});
enemies.set(2, {name: 'Aveli', type: 'Calango'});
enemies.set(3, {name: 'Paraiba', type: 'Monstro'});

// Exibe os elementos de 'enemies'
console.log(enemies);

// Exibe os dados utilizados: for.....of
for(const [id, enemy] of enemies)
{
    console.log(`ID: ${id}, Nome: ${enemy.name}`);
}

// Exibe os dados utilizados: Keys()
for(const id  of enemies.keys())
{
    console.log(`Chave: ${id}`);
}

// Exibe os dados utilizando: Values()
for(const enemy  of enemies.values())
{
    console.log(`Tipo: ${enemy.type}`);
}

// Exibe os dados utilizando: Entries()
for(const row  of enemies.entries())
{
    console.log(row);
}

// Exibe os dados utilizando forEach
enemies.forEach((enemy, id, mapOriginal) => {
    console.log(`Enemy ${id}: ${enemy,name}`)
    console.log(mapOriginal);
})

// Exibe os dados utilizando forEach
enemies.forEach((enemy, id, mapOriginal) => {
    console.log(`Enemy ${id}: ${enemy,name}`)
})