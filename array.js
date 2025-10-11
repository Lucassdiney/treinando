/*Questão 01*/

nomes = [];

function adicionarNome(nome){
    if(nome && typeof nome === 'string'){
        nomes.push(nome);
    }
}

adicionarNome("lucas");
adicionarNome("");
adicionarNome(123);
adicionarNome("luana");

console.log(nomes);

/*Questão 02*/

let Nome = ["Ana", "leticia", "Marcos", "Bruno"];

function sortearNome(){
    const numero = Math.floor(Math.random() * Nome.length)
    return Nome[numero];
}

console.log(sortearNome());

/*Questão 03*/

let frutas = [];

function AdicionarFrutas(fruta){
    if( fruta && typeof fruta === 'string'){
        frutas.push(fruta)
    }
}

AdicionarFrutas('Maça');
AdicionarFrutas(2341);
AdicionarFrutas('');
AdicionarFrutas('Maracujá');
AdicionarFrutas('Banana');

console.log(frutas);

/*Questão 04*/

let carros = ['civic', 'fusca', 'santana', 'astra'];

function sortearCarro(){
    const indice = Math.floor(Math.random() * carros.length);
    return carros[indice];
}

console.log(sortearCarro());

/*Questão 05
    só pra relembrar!
*/

function cumprimentar(name){
    return "olá, " + name + "!";
}

console.log(cumprimentar("lucas"));



